import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const EMAILJS_SERVICE_ID = 'service_dfqma8a'
const EMAILJS_PUBLIC_KEY = 'OPfizN3VSaTfGTH_G'
const TEMPLATES = {
  general: 'general_contact',
  training: 'training_request',
} as const
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
})

const TrainingSchema = z.object({
  type: z.literal('training'),
  name: str(150).min(1),
  email: z.string().trim().email().max(255),
  organization: str(200).optional().default(''),
  program: str(100).min(1),
  comments: str(5000).optional().default(''),
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

  const privateKey = Deno.env.get('EMAILJS_PRIVATE_KEY')
  if (!privateKey) return json({ error: 'Email service not configured' }, 500)

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400)
  const data = parsed.data

  let template_id: string
  let template_params: Record<string, string>

  if (data.type === 'general') {
    template_id = TEMPLATES.general
    template_params = {
      to_email: RECIPIENT,
      firstName: clean(data.firstName),
      lastName: clean(data.lastName),
      email: clean(data.email),
      subject: clean(data.subject) || 'General Inquiry',
      message: data.message,
    }
  } else {
    template_id = TEMPLATES.training
    template_params = {
      to_email: RECIPIENT,
      name: clean(data.name),
      email: clean(data.email),
      organization: clean(data.organization) || 'Not specified',
      program: clean(data.program),
      comments: data.comments || 'No additional comments',
    }
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin: 'http://localhost' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id,
      user_id: EMAILJS_PUBLIC_KEY,
      accessToken: privateKey,
      template_params,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('EmailJS send failed', res.status, detail)
    return json({ error: 'Failed to send email' }, 502)
  }

  return json({ success: true })
})
