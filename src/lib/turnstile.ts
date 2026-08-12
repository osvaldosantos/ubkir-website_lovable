// Cloudflare Turnstile site key. This value is PUBLIC by design and is meant to
// be shipped in the browser bundle. The matching secret key is stored only as a
// backend secret (TURNSTILE_SECRET_KEY) and is never referenced from the frontend.
export const TURNSTILE_SITE_KEY = "__TURNSTILE_SITE_KEY__";

export const isTurnstileConfigured = () =>
  TURNSTILE_SITE_KEY.length > 0 && !TURNSTILE_SITE_KEY.startsWith("__");
