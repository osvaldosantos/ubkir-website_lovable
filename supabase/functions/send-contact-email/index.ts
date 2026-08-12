import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

// Recipient is fixed server-side and can never be chosen by the browser.
const RECIPIENT = 'info@ubkir.pt'

const str = (max: number) => z.string().trim().max(max)

const GeneralSchema = z.object({
  type: z.literal('general'),
  firstName: str(100).min(1),
  lastName: str(100).min(1),
  email: z.string().trim().email().max(255),
  subject: str(100).optional().default(''),
  message: str(5000).min(1),
  turnstileToken: str(4096).min(1),
})

const TrainingSchema = z.object({
  type: z.literal('training'),
  name: str(150).min(1),
  email: z.string().trim().email().max(255),
  organization: str(200).optional().default(''),
  program: str(100).min(1),
  comments: str(5000).optional().default(''),
  turnstileToken: str(4096).min(1),
})

const BodySchema = z.discriminatedUnion('type', [GeneralSchema, TrainingSchema])

// Simple in-memory rate limit: 5 requests / 10 min per IP
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (list.length >= MAX_REQUESTS) {
    hits.set(ip, list)
    return true
  }
  list.push(now)
  hits.set(ip, list)
  return false
}

// Strip control characters / header-injection attempts
const clean = (v: string) => v.replace(/[\r\n\u0000-\u001F\u007F]+/g, ' ').trim()

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const SITEVERIFY_TIMEOUT_MS = 5000

// Hostnames allowed to produce a valid Turnstile token. Exact matches only —
// no wildcards, no apex-domain widening.
const ALLOWED_TURNSTILE_HOSTNAMES = new Set([
  'ubkir.pt',
  'www.ubkir.pt',
  // Lovable preview surfaces (not required for production traffic)
  '37bd2aea-804a-4f63-a547-d3a62f0afdc1.lovableproject.com',
  'id-preview--37bd2aea-804a-4f63-a547-d3a62f0afdc1.lovable.app',
])

// Server-side Cloudflare Turnstile verification. Fails closed on any error,
// timeout, reuse or invalid/expired token.
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = Deno.env.get('TURNSTILE_SECRET_KEY')
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return false
  }

  const form = new URLSearchParams()
  form.set('secret', secret)
  form.set('response', token)
  if (ip && ip !== 'unknown') form.set('remoteip', ip)

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
      signal: AbortSignal.timeout(SITEVERIFY_TIMEOUT_MS),
    })
    if (!res.ok) {
      console.error('Turnstile siteverify HTTP error', res.status)
      return false
    }
    const result = (await res.json()) as {
      success?: boolean
      hostname?: string
      'error-codes'?: string[]
    }
    if (!result.success) {
      // Error codes never contain the secret value.
      console.warn('Turnstile verification rejected', result['error-codes'] ?? [])
      return false
    }
    // Extra defence: the token must originate from a known hostname.
    if (!result.hostname || !ALLOWED_TURNSTILE_HOSTNAMES.has(result.hostname)) {
      console.warn('Turnstile hostname not allowed', result.hostname ?? 'missing')
      return false
    }
    return true
  } catch (err) {
    console.error('Turnstile siteverify failed', err instanceof Error ? err.message : 'unknown error')
    return false
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('cf-connecting-ip') ??
    'unknown'
  if (rateLimited(ip)) return json({ error: 'Too many requests. Please try again later.' }, 429)

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400)
  const data = parsed.data

  // Anti-bot check runs before any sanitization/templating and before any email is queued.
  const humanVerified = await verifyTurnstile(data.turnstileToken, ip)
  if (!humanVerified) {
    return json(
      {
        error:
          'Anti-bot verification failed. Please reload the page and try again, or contact us directly at info@ubkir.pt',
      },
      403,
    )
  }

  // --- Delivery via Lovable App Emails (notify.ubkir.pt) ---
  let templateName: string
  let templateData: Record<string, string>

  if (data.type === 'general') {
    templateName = 'contact-general'
    templateData = {
      firstName: clean(data.firstName),
      lastName: clean(data.lastName),
      email: clean(data.email),
      subject: clean(data.subject) || 'General Inquiry',
      message: data.message,
    }
  } else {
    templateName = 'contact-training'
    templateData = {
      name: clean(data.name),
      email: clean(data.email),
      organization: clean(data.organization) || 'Not specified',
      program: clean(data.program),
      comments: data.comments || 'No additional comments',
    }
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const internalSecret = Deno.env.get('INTERNAL_EMAIL_SECRET')
  if (!supabaseUrl || !serviceKey || !internalSecret)
    return json({ error: 'Email service not configured' }, 500)

  const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${serviceKey}`,
      'x-internal-email-secret': internalSecret,
    },
    body: JSON.stringify({
      templateName,
      // Recipient is fixed server-side (and again by the template's `to`).
      recipientEmail: RECIPIENT,
      replyTo: clean(data.email),
      idempotencyKey: `${templateName}-${crypto.randomUUID()}`,
      templateData,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('App email send failed', res.status, detail)
    return json({ error: 'Failed to send email' }, 502)
  }

  return json({ success: true })
})
