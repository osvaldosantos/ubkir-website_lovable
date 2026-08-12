import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { TURNSTILE_SITE_KEY, isTurnstileConfigured } from "@/lib/turnstile";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

// Loads the Turnstile script on demand (only on pages that mount the widget).
function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    const script = existing ?? document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => {
      scriptPromise = null;
      reject(new Error("Failed to load Turnstile"));
    });
    if (!existing) document.head.appendChild(script);
  });

  return scriptPromise;
}

export interface TurnstileHandle {
  reset: () => void;
}

interface TurnstileWidgetProps {
  /** Called with a fresh token, or null when the token is cleared/expired/errored. */
  onToken: (token: string | null) => void;
  /** 'en' | 'pt' — keeps the challenge language in sync with the site. */
  language: string;
  className?: string;
}

/**
 * Cloudflare Turnstile in Managed mode with `interaction-only` appearance:
 * invisible for normal visitors, only rendering a challenge when needed.
 * Each mounted instance owns its own widget/token (tokens are single-use).
 */
const TurnstileWidget = forwardRef<TurnstileHandle, TurnstileWidgetProps>(
  ({ onToken, language, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const onTokenRef = useRef(onToken);
    onTokenRef.current = onToken;

    useImperativeHandle(ref, () => ({
      reset: () => {
        onTokenRef.current(null);
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch {
            /* widget already gone — nothing to reset */
          }
        }
      },
    }));

    useEffect(() => {
      if (!isTurnstileConfigured()) return;

      let cancelled = false;

      loadTurnstile()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return;
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            appearance: "interaction-only",
            language,
            callback: (token: string) => onTokenRef.current(token),
            "expired-callback": () => onTokenRef.current(null),
            "timeout-callback": () => onTokenRef.current(null),
            "error-callback": () => {
              onTokenRef.current(null);
              return true;
            },
          });
        })
        .catch(() => {
          if (!cancelled) onTokenRef.current(null);
        });

      return () => {
        cancelled = true;
        const id = widgetIdRef.current;
        widgetIdRef.current = null;
        if (id && window.turnstile) {
          try {
            window.turnstile.remove(id);
          } catch {
            /* already removed */
          }
        }
      };
      // Re-render the widget when the site language changes.
    }, [language]);

    if (!isTurnstileConfigured()) return null;

    return <div ref={containerRef} className={className} />;
  }
);

TurnstileWidget.displayName = "TurnstileWidget";

export default TurnstileWidget;
