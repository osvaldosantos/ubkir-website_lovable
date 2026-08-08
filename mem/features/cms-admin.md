---
name: CMS Admin Panel
description: Backend de gestão de conteúdos (textos PT/EN e imagens) em /admin, com Lovable Cloud
type: feature
---
Painel de administração em `/admin` (fora do layout público, sem link no menu).

- Auth: email/palavra-passe. Sem registo público — a PRIMEIRA conta criada assume o papel de admin via `claim_first_admin()`; depois disso a função deixa de conceder acesso.
- Papéis em `public.user_roles` + `has_role()` (nunca na tabela de perfis).
- `site_texts (key, lang, value)`: overrides aos textos de `src/contexts/LanguageContext.tsx`. Fallback = texto original no código. Apagar a linha repõe o original.
- `site_images (key, url)`: imagens editáveis. Chaves: hero.research, hero.training, hero.clinical, hero.digital, hero.editorial, team.osvaldo.photo.
- Bucket `site-images` é PRIVADO — a política do workspace bloqueia buckets públicos. Usa signed URLs de 10 anos guardados em `site_images.url`. Se o utilizador ativar buckets públicos, migrar para URLs públicos.
