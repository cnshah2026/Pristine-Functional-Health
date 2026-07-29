"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Check } from "lucide-react";

const INITIAL_DELAY_MS = 15 * 60_000; // first appearance: 15 minutes into the session
const REPEAT_MS = 5 * 60_000; // then every 5 minutes
const NEXT_KEY = "pfh_popup_next"; // persisted timestamp of the next scheduled show
const STOP_KEY = "pfh_popup_stopped"; // set once the visitor books, to stop nagging

// The schedule lives in sessionStorage so it survives reloads and page
// navigations — the popup follows one clock for the whole session instead
// of restarting its countdown every time a page loads.
function readStopped(): boolean {
  try {
    return sessionStorage.getItem(STOP_KEY) === "1";
  } catch {
    return false;
  }
}

function nextShowAt(): number {
  try {
    const stored = sessionStorage.getItem(NEXT_KEY);
    if (stored) return Number(stored);
    const next = Date.now() + INITIAL_DELAY_MS;
    sessionStorage.setItem(NEXT_KEY, String(next));
    return next;
  } catch {
    return Date.now() + INITIAL_DELAY_MS;
  }
}

function setNextShowAt(ts: number) {
  try {
    sessionStorage.setItem(NEXT_KEY, String(ts));
  } catch {
    /* ignore */
  }
}

const reasons = [
  "Fatigue",
  "Gut issues",
  "Hormones & thyroid",
  "Weight that won't move",
  "Brain fog",
  "Autoimmune & inflammation",
];

const onTheCall = [
  "We listen to the whole story — no seven-minute clock.",
  "We're honest about whether we can actually help.",
  "You leave with a clear, specific next step.",
];

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Arm a timer for whenever the persisted schedule says the next show is due.
  const schedule = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (readStopped()) return;
    const delay = Math.max(0, nextShowAt() - Date.now());
    timerRef.current = setTimeout(() => {
      // As soon as it shows, push the next show 5 minutes out and persist it —
      // so a reload while it's open (or right after) won't re-trigger early.
      setNextShowAt(Date.now() + REPEAT_MS);
      setOpen(true);
    }, delay);
  }, []);

  // Dismiss (X / "maybe later" / backdrop / Esc) → next show already persisted; re-arm.
  const dismiss = useCallback(() => {
    setOpen(false);
    schedule();
  }, [schedule]);

  // Booked / called → stop popping for the rest of the session.
  const converted = useCallback(() => {
    try {
      sessionStorage.setItem(STOP_KEY, "1");
    } catch {
      /* ignore */
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(false);
  }, []);

  // Follow the persisted session schedule (survives reloads and navigations).
  useEffect(() => {
    schedule();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [schedule]);

  // Lock scroll, focus the close button, and Esc-to-close while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end justify-center p-3 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 h-full w-full cursor-default"
        style={{ background: "color-mix(in srgb, var(--color-ink) 58%, transparent)", backdropFilter: "blur(3px)" }}
      />

      <div
        className="animate-mobile-morph relative flex max-h-[92vh] w-full max-w-[720px] flex-col overflow-y-auto border shadow-xl"
        style={{ borderColor: "var(--color-line-strong)", background: "var(--color-paper)" }}
      >
        {/* Prominent close button */}
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close"
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
          style={{ background: "color-mix(in srgb, var(--color-linen) 22%, transparent)", color: "var(--color-linen)" }}
        >
          <X size={20} />
        </button>

        {/* Header band */}
        <div className="px-6 pt-9 pb-7 md:px-9" style={{ background: "var(--color-forest)", color: "var(--color-linen)" }}>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em]" style={{ color: "rgba(226,223,218,0.85)" }}>
            Free 20-minute consultation · virtual
          </p>
          <h2 id="lead-popup-title" className="mt-3 max-w-[20ch] font-serif text-[1.9rem] leading-[1.06] md:text-[2.35rem]">
            Still feeling off, even when your labs are &ldquo;normal&rdquo;?
          </h2>
          <p className="mt-4 max-w-[52ch] text-[0.98rem] leading-relaxed" style={{ color: "rgba(226,223,218,0.92)" }}>
            You don&apos;t need a louder plan — you need the right questions. One
            short call with Megha Shah, PT, CFNC is the fastest way to find out
            what&apos;s really going on.
          </p>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-8 px-6 py-7 md:grid-cols-2 md:px-9">
          <div>
            <p className="eyebrow mb-4">Common reasons people book</p>
            <ul className="flex flex-wrap gap-2">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="rounded-full border px-3 py-1.5 text-[0.85rem]"
                  style={{ borderColor: "var(--color-line-strong)", color: "var(--color-ink-soft)" }}
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">On your free call</p>
            <ul className="grid gap-3">
              {onTheCall.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-[var(--color-ink-soft)]">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-forest)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t px-6 pb-7 pt-6 md:px-9" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/book-appointment" onClick={converted} className="btn btn-primary flex-1">
              Book your free call
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12406763079" onClick={converted} className="btn btn-ghost flex-1">
              <Phone size={15} />
              Call 240-676-3079
            </a>
          </div>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-[0.78rem] text-[var(--color-ink-muted)]">
              No cost. No pressure. $0 for your first call.
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="text-[0.82rem] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
