import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Megha Shah | Online functional health consultant",
  description:
    "Learn about Megha Shah, PT, CFNC, and Pristine Functional Health's virtual root-cause wellness approach for adults across the United States.",
  path: "/about",
  keywords: ["Megha Shah", "functional nutrition counselor", "online functional health consultant"],
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— About</p>
            <h1 className="display-xl max-w-[18ch]">
              Twenty years of <em className="italic-serif">listening</em> to the body.
            </h1>
          </Reveal>
        </div>
      </section>

      <section
        id="philosophy"
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-12 gap-x-0 md:gap-x-12 items-start">
            <Reveal className="col-span-12 md:col-span-5">
              <Portrait />
            </Reveal>

            <div className="col-span-12 md:col-span-7 space-y-6">
              <Reveal>
                <p className="eyebrow mb-4">The clinician</p>
                <h2 className="display">
                  Megha Shah, <em className="italic-serif">PT, CFNC.</em>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="lede max-w-[60ch]">
                  Megha trained as a Physical Therapist and spent two decades
                  watching the same patients return with the same pain — because
                  no one was looking past the symptom. She earned her
                  certification as a Functional Nutritional Counsellor to do
                  the work she always wanted to: <em className="italic-serif">treat the whole person.</em>
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-[var(--color-ink-soft)] leading-[1.7] max-w-[60ch]">
                  Her practice today is virtual, rooted in the Institute for
                  Functional Medicine framework, and built on the conviction
                  that almost every chronic condition has an upstream cause
                  worth finding. She works with adults navigating thyroid
                  disease, autoimmunity, gut dysfunction, hormonal imbalances,
                  metabolic stuckness, and the kind of unexplained fatigue that
                  has been dismissed by ten different doctors.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-[var(--color-ink-soft)] leading-[1.7] max-w-[60ch]">
                  Her style is calm, deeply curious, and built around the
                  belief that healing is a partnership. She is not in the
                  business of telling you what to do — she is in the business
                  of helping you understand your own body well enough to make
                  the right decisions for it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-bone-2)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— Philosophy</p>
            <h2 className="display max-w-[24ch]">
              Three quiet beliefs <em className="italic-serif">underneath every plan.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10">
            {[
              {
                n: "01",
                h: "The body is intelligent.",
                p: "It is not making mistakes. It is making decisions about safety and survival, based on the signals it's receiving. Symptoms are the language. Listen first.",
              },
              {
                n: "02",
                h: "Symptoms are meaningful.",
                p: "They are never random. They are signposts pointing at upstream causes — sometimes recent, sometimes decades old. Our job is to read the map.",
              },
              {
                n: "03",
                h: "Healing is natural.",
                p: "Given the right inputs and a removed obstruction, bodies do remarkable things. Our work is to set the conditions, not force the outcome.",
              },
            ].map((b, i) => (
              <Reveal key={b.n} delay={i * 100}>
                <article
                  className="border-t pt-6 h-full"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <span className="font-mono text-[0.78rem] tracking-[0.18em] text-[var(--color-lavender-deep)] mb-4 block">
                    {b.n}
                  </span>
                  <h3 className="font-serif text-[1.6rem] md:text-[1.85rem] leading-[1.1] tracking-tight mb-3">
                    {b.h}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] leading-relaxed">
                    {b.p}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-10 gap-x-0 md:gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— How we practice</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[18ch]">
                What it's actually <em className="italic-serif">like</em> to work with us.
              </h2>
            </Reveal>
            <ul className="col-span-12 md:col-span-8 space-y-7">
              {[
                {
                  h: "Virtual, but not impersonal.",
                  p: "All visits over secure video. The same clinician every time. No call centers. No bouncing between providers.",
                },
                {
                  h: "Real time, not rushed time.",
                  p: "Initial intakes are 60–90 minutes. Follow-ups are 30–45 minutes. Long enough to actually understand what's going on.",
                },
                {
                  h: "Co-care, not turf wars.",
                  p: "We coordinate happily with your PCP, endocrinologist, rheumatologist, OB, therapist, or whoever else is on your team. Better outcomes always come from collaboration.",
                },
                {
                  h: "Functional, not anti-medical.",
                  p: "We aren't anti-pharmaceutical. We use the tools that fit. We just want you to need fewer of them, and to understand exactly what each one is doing.",
                },
                {
                  h: "Evidence-informed, person-centered.",
                  p: "Protocols are grounded in research, but always shaped to who you are. Your culture, your schedule, your finances, your goals — all of it counts.",
                },
              ].map((row, i) => (
                <Reveal key={row.h} delay={i * 60}>
                  <li
                    className="border-b pb-6 last:border-b-0 last:pb-0"
                    style={{ borderColor: "var(--color-line)" }}
                  >
                    <h3 className="font-serif text-[1.4rem] leading-tight mb-2">
                      {row.h}
                    </h3>
                    <p className="text-[var(--color-ink-soft)] leading-relaxed">
                      {row.p}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-28 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-canvas)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— Credentials</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[24ch]">
              The training <em className="italic-serif">and</em> the experience.
            </h2>
          </Reveal>
          <ul
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
          >
            {[
              "Physical Therapist (PT)",
              "Certified Functional Nutritional Counsellor (CFNC)",
              "Institute for Functional Medicine — coursework",
              "20+ years clinical experience",
              "1,200+ patients guided",
              "Licensed in multiple states; virtual practice",
              "Specialty interest: thyroid, autoimmunity, metabolic",
              "Continuing education: 50+ hours annually",
            ].map((c) => (
              <li
                key={c}
                className="border-b pb-3 text-[0.95rem] text-[var(--color-ink-soft)] flex items-center gap-3"
                style={{ borderColor: "var(--color-line)" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: "var(--color-sage-deep)" }}
                />
                {c}
              </li>
            ))}
          </ul>

          <Reveal className="mt-14 flex flex-wrap gap-3">
            <Link href="/book-appointment" className="btn btn-primary">
              Book your free call
              <ArrowRight size={14} />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore our services
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Portrait() {
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl">
      <Image
        src="/dr-shah.jpg"
        alt="Megha Shah, PT, CFNC — Founder of Pristine Functional Health"
        width={852}
        height={1280}
        className="w-full h-auto object-cover object-top"
        style={{ maxHeight: 560 }}
        priority
      />
    </div>
  );
}
