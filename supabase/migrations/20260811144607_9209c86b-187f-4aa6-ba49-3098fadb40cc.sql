-- 1. Tighten user_roles table privileges
REVOKE ALL ON public.user_roles FROM anon;
REVOKE ALL ON public.user_roles FROM authenticated;
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

-- 2. Remove admin bootstrap function
DROP FUNCTION IF EXISTS public.claim_first_admin();

-- 3. Move has_role into a private, non-exposed schema
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM public, anon, authenticated;
GRANT USAGE ON SCHEMA private TO service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM public;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 4. Repoint RLS policies to the relocated helper
DROP POLICY IF EXISTS "Admins can manage site texts" ON public.site_texts;
CREATE POLICY "Admins can manage site texts"
ON public.site_texts FOR ALL TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can manage site images" ON public.site_images;
CREATE POLICY "Admins can manage site images"
ON public.site_images FOR ALL TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (private.has_role(auth.uid(), 'admin'::public.app_role));

-- 5. Repoint storage policies that used public.has_role
DO $$
DECLARE pol record;
BEGIN
  FOR pol IN
    SELECT policyname, qual, with_check FROM pg_policies
    WHERE schemaname = 'storage' AND tablename = 'objects'
      AND (coalesce(qual,'') LIKE '%has_role%' OR coalesce(with_check,'') LIKE '%has_role%')
  LOOP
    EXECUTE format(
      'ALTER POLICY %I ON storage.objects %s %s',
      pol.policyname,
      CASE WHEN pol.qual IS NOT NULL THEN 'USING (' || replace(pol.qual, 'has_role(', 'private.has_role(') || ')' ELSE '' END,
      CASE WHEN pol.with_check IS NOT NULL THEN 'WITH CHECK (' || replace(pol.with_check, 'has_role(', 'private.has_role(') || ')' ELSE '' END
    );
  END LOOP;
END $$;

-- 6. Drop the publicly exposed function last
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);