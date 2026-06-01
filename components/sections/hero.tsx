import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HeroLiquidEther } from "@/components/sections/hero-liquid-ether";
import { MorphingText } from "@/components/ui/morphing-text";

const heroMorphingTexts = ["Root Cause", "Real Solutions", "Lasting Wellness"];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-96px)] items-start overflow-hidden pb-20 pt-8 md:pb-24 md:pt-8 lg:pt-6">
      <div className="hero-mobile-field absolute inset-0 z-0 md:hidden" aria-hidden />
      <div className="absolute inset-0 z-0 hidden opacity-45 md:block dark:opacity-60" aria-hidden>
        <HeroLiquidEther />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in srgb, var(--color-bone) 68%, transparent) 0%, color-mix(in srgb, var(--color-bone) 82%, transparent) 48%, color-mix(in srgb, var(--color-bone) 92%, transparent) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 md:h-44"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-bone-2) 0%, transparent) 0%, color-mix(in srgb, var(--color-bone-2) 56%, transparent) 58%, var(--color-bone-2) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <Reveal className="mb-5 w-full md:mb-5">
            <MorphingText
              texts={heroMorphingTexts}
              className="hero-morph"
            />
          </Reveal>

          <Reveal>
            <h1 className="display-xl hero-headline mx-auto max-w-[26ch] md:max-w-[31ch] lg:max-w-[34ch]">
              Beyond Symptoms. Into{" "}
              <em className="italic-serif">True&nbsp;Healing.</em> Personalized
              answers for lasting health and vitality.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="lede hero-lede mx-auto mt-6 max-w-[62ch]">
              Pristine Functional Health helps you find the real reason you
              don&apos;t feel like yourself and rebuild from the root up. No
              more <em className="italic-serif">&ldquo;your labs look fine.&rdquo;</em>{" "}
              No dismissals. Just answers, a plan, and a clinician who actually listens.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/book-appointment" className="btn btn-primary">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <Link href="/conditions" className="btn btn-ghost">
                Explore conditions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-8 md:mt-10">
            <dl
              className="grid max-w-[560px] grid-cols-3 gap-6 border-t pt-7"
              style={{ borderColor: "var(--color-line)" }}
            >
              <StatItem n="20+" l="years of clinical care" />
              <StatItem n="100+" l="lab markers mapped" />
              <StatItem n="1:1" l="personalized support" />
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatItem({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-serif text-[1.9rem] leading-none tracking-tight" style={{ color: "var(--color-forest)" }}>
        {n}
      </dt>
      <dd className="text-[0.8rem] mt-1.5 leading-snug" style={{ color: "var(--color-ink-muted)" }}>
        {l}
      </dd>
    </div>
  );
}
