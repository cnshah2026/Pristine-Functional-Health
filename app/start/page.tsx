import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { testimonialStories } from "@/lib/testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book your free functional health consultation",
  description:
    "Still exhausted, foggy, or told your labs are 'normal' when you don't feel normal? Book a free 20-minute call with Megha Shah, PT, CFNC — virtual, no pressure.",
  path: "/start",
  keywords: [
    "free functional health consultation",
    "functional medicine consultation online",
    "root cause health consultation",
  ],
});

const symptoms = [
  "Tired no matter how much you sleep",
  "Weight that won't move",
  "Bloating, gut issues, food reactions",
  "Thyroid symptoms with “normal” labs",
  "Hormone or cycle changes",
  "Brain fog and low focus",
  "Stubborn inflammation or joint pain",
  "Anxiety, low mood, or burnout",
];

const callSteps = [
  { h: "You tell us what's going on", p: "Your symptoms, history, and what you've already tried — no seven-minute clock." },
  { h: "We're honest about fit", p: "We'll tell you directly whether functional medicine is likely to help you." },
  { h: "You leave with a next step", p: "You'll know what we'd investigate first and what the path looks like." },
];

export default function StartPage() {
  const story = testimonialStories[0];

  return (
    <>
      {/* HERO / OFFER */}
      <section className="pt-16 md:pt-24 pb-14">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 items-center gap-y-10 md:gap-x-12">
            <Reveal className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-5">Free 20-minute consultation · virtual</p>
              <h1 className="display-xl max-w-[18ch]">
                Feel off, even when your labs look{" "}
                <em className="italic-serif">&ldquo;fine&rdquo;</em>?
              </h1>
              <p className="lede mt-6 max-w-[54ch]">
                Pristine Functional Health helps you find the real reason you
                don&apos;t feel like yourself — and rebuild from the root up.
                Start with a free call. No cost, no pressure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book-appointment" className="btn btn-primary">
                  Book your free call
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:+12406763079" className="btn btn-ghost">
                  <Phone size={15} />
                  240-676-3079
                </a>
              </div>

              <dl
                className="mt-10 grid max-w-[520px] grid-cols-3 gap-6 border-t pt-7"
                style={{ borderColor: "var(--color-line)" }}
              >
                <Stat n="20+" l="years of clinical care" />
                <Stat n="50" l="states, fully virtual" />
                <Stat n="$0" l="for your first call" />
              </dl>
            </Reveal>

            <Reveal className="col-span-12 md:col-span-5" delay={120}>
              <div className="overflow-hidden rounded-2xl" style={{ maxWidth: 420, marginInline: "auto" }}>
                <Image
                  src="/dr-shah.jpg"
                  alt="Megha Shah, PT, CFNC — Founder of Pristine Functional Health"
                  width={852}
                  height={1280}
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="h-auto w-full object-cover object-top"
                  style={{ maxHeight: 520 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section
        className="py-16 md:py-24 border-t"
        style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">Does this sound like you?</p>
            <h2 className="display max-w-[18ch]">
              Real symptoms. Real answers, at the root.
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {symptoms.map((s, i) => (
              <Reveal key={s} delay={i * 40}>
                <li
                  className="flex items-start gap-3 border-t pt-4 text-[1.02rem] leading-snug"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <Check size={16} className="mt-1 shrink-0 text-[var(--color-forest)]" />
                  <span>{s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <Link href="/book-appointment" className="btn btn-primary mt-10">
              Book your free call
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="py-16 md:py-24 border-t" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">What happens on the call</p>
            <h2 className="display max-w-[16ch]">20 minutes, and a clear next step.</h2>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {callSteps.map((step, i) => (
              <Reveal key={step.h} delay={i * 70}>
                <li
                  className="h-full border-t pt-5"
                  style={{ borderColor: "var(--color-line-strong)" }}
                >
                  <p className="font-mono text-[0.72rem] text-[var(--color-ink-muted)] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-[1.4rem] leading-tight">{step.h}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {step.p}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST — one story */}
      <section
        className="py-16 md:py-24 border-t"
        style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
      >
        <div className="mx-auto w-full max-w-[880px] px-6">
          <Reveal>
            <p className="eyebrow mb-6">{story.condition} · {story.detail}</p>
            <blockquote className="font-serif text-[1.6rem] leading-[1.3] md:text-[2rem]">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-[0.9rem] text-[var(--color-ink-muted)]">
              — {story.name}. Representative patient story; individual results vary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEAD FORM */}
      <LeadFormSection
        eyebrow="Rather we reach out?"
        title="Leave your details and we'll follow up."
      />

      {/* FINAL CTA */}
      <section
        className="py-20 md:py-28 border-t text-center"
        style={{ borderColor: "var(--color-line)", background: "var(--color-forest)", color: "var(--color-linen)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <h2 className="font-serif text-[2.2rem] md:text-[3.4rem] leading-[1.06] max-w-[20ch] mx-auto">
              Your next step is one short conversation away.
            </h2>
            <div className="mt-9 flex justify-center">
              <Link
                href="/book-appointment"
                className="btn w-full max-w-[340px]"
                style={{ background: "var(--color-linen)", color: "var(--color-forest)" }}
              >
                Book your free 20-min call
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-serif text-[1.9rem] leading-none" style={{ color: "var(--color-forest)" }}>
        {n}
      </dt>
      <dd className="mt-1.5 text-[0.8rem] leading-snug" style={{ color: "var(--color-ink-muted)" }}>
        {l}
      </dd>
    </div>
  );
}
