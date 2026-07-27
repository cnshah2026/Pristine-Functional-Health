"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Reveal } from "@/components/reveal";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

function useCalEmbed() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1]; api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "free-functional-health-consultation", {origin:"https://app.cal.com"});
      Cal.ns["free-functional-health-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export function BookingClient() {
  useCalEmbed();

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal className="max-w-[860px]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[0.84rem] mb-8 transition-colors hover:text-[var(--color-forest)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <p className="eyebrow mb-5">Book an appointment</p>
            <h1 className="display-xl max-w-[18ch]">
              Schedule your{" "}
              <em className="italic-serif">free consultation.</em>
            </h1>
            <p className="lede mt-6 max-w-[56ch]">
              A 20-minute call with Megha Shah — no commitment, no waitlist.
              Pick a time that works for you and let's figure out your next step together.
            </p>
            <div
              className="mt-9 grid max-w-[520px] grid-cols-1 divide-y border-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"
              style={{ borderColor: "var(--color-line)" }}
              aria-label="Free consultation details"
            >
              {[
                {
                  value: "20 min",
                  label: "Focused review",
                  note: "Symptoms, history, goals, and fit.",
                },
                {
                  value: "$0",
                  label: "Due today",
                  note: "No pressure and no commitment.",
                },
              ].map((item) => (
                <div key={item.label} className="px-0 py-5 sm:px-5">
                  <p className="font-serif text-[2rem] leading-none tracking-tight text-[var(--color-forest)]">
                    {item.value}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[0.86rem] leading-snug text-[var(--color-ink-soft)]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-[920px] px-6">
          <Reveal>
            <div className="border-y py-8 md:py-10" style={{ borderColor: "var(--color-line)" }}>
              <p className="eyebrow mb-3">Free · 20 minutes · virtual</p>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.08] mb-4">
                Free Functional Health Consultation
              </h2>
              <p className="text-[var(--color-ink-soft)] leading-[1.7] max-w-[64ch] mb-8">
                We'll talk through your symptoms, your history, and what you've
                already tried. You'll leave with clarity on whether functional
                medicine is the right fit and, if it is, exactly where we'd start.
              </p>
              <button
                type="button"
                data-cal-link="megha.shah/free-functional-health-consultation"
                data-cal-namespace="free-functional-health-consultation"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="btn btn-primary"
              >
                <Calendar size={17} />
                Book your free call
              </button>
              <p className="text-[0.78rem] mt-4" style={{ color: "var(--color-ink-muted)" }}>
                Powered by Cal.com · privacy-conscious scheduling
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-20" delay={100}>
            <p className="eyebrow mb-6">What to expect</p>
            <ol className="divide-y border-y" style={{ borderColor: "var(--color-line)" }}>
              {[
                {
                  h: "You'll tell us what's been going on.",
                  p: "Share your symptoms, your history, and whatever you've already tried. There's no judgment and no seven-minute clock.",
                },
                {
                  h: "We'll be honest about fit.",
                  p: "We'll tell you directly whether functional medicine is likely to help your situation, and if there's a better first step, we'll say so.",
                },
                {
                  h: "You'll leave with a clear next step.",
                  p: "Not a vague follow-up promise. You'll know what we'd investigate first and what the path forward looks like.",
                },
                {
                  h: "No pressure, ever.",
                  p: "This is an honest conversation. We only take on patients we genuinely believe we can help.",
                },
              ].map((item, index) => (
                <li key={item.h} className="py-6 grid grid-cols-12 gap-y-3 gap-x-0 sm:gap-x-6">
                  <span className="col-span-12 sm:col-span-2 font-mono text-[0.72rem] text-[var(--color-ink-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="col-span-12 sm:col-span-4 font-serif text-[1.35rem] leading-snug">
                    {item.h}
                  </h3>
                  <p className="col-span-12 sm:col-span-6 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {item.p}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-10" delay={160}>
            <p className="text-[0.92rem] leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
              <strong style={{ color: "var(--color-ink)" }}>Prefer email?</strong>{" "}
              Reach Megha Shah directly at{" "}
              <a
                href="mailto:contact@pristinefunctionalhealth.com"
                className="underline underline-offset-2 hover:text-[var(--color-forest)] transition-colors"
                style={{ color: "var(--color-ink-soft)" }}
              >
                contact@pristinefunctionalhealth.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+12406763079"
                className="underline underline-offset-2 hover:text-[var(--color-forest)] transition-colors"
                style={{ color: "var(--color-ink-soft)" }}
              >
                240-676-3079
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
