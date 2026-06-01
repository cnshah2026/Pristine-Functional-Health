import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="grid grid-cols-12 gap-y-12 gap-x-0 md:gap-x-12 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <Portrait />
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <p className="eyebrow mb-5">Meet your clinician</p>
            <h2 className="display">
              Megha Shah, <em className="italic-serif">PT, CFNC.</em>
            </h2>
            <p className="lede mt-6 max-w-[58ch]">
              For over twenty years, Megha has worked with people the system
              couldn't help. As a Physical Therapist, she watched the same
              patients come back with the same pain — because nobody was
              looking deeper. As a Certified Functional Nutritional
              Counsellor, she now does what she always wanted to:{" "}
              <em className="italic-serif">treat the whole person.</em>
            </p>
            <p className="text-[var(--color-ink-soft)] mt-5 max-w-[58ch]">
              Her practice is built on three quiet beliefs: that the body is
              intelligent, that symptoms are meaningful, and that healing —
              given the right conditions — is the most natural thing in the
              world.
            </p>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-8 pt-7 border-t"
              style={{ borderColor: "var(--color-line)" }}
            >
              {[
                "20+ yrs clinical experience",
                "Physical Therapist (PT)",
                "Cert. Functional Nutritional Counsellor",
                "1,200+ patients guided",
                "IFM-aligned methodology",
                "Virtual, all 50 states",
              ].map((c) => (
                <li
                  key={c}
                  className="text-[0.92rem] text-[var(--color-ink-soft)] flex items-center gap-2"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "var(--color-sage-deep)" }}
                  />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-ghost">
                Read Megha's full bio
                <ArrowRight size={14} />
              </Link>
              <Link href="/book-appointment" className="btn btn-primary">
                Book your free call
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="w-full max-w-[420px] mx-auto overflow-hidden rounded-2xl">
      <Image
        src="/dr-shah.jpg"
        alt="Megha Shah, PT, CFNC — Founder of Pristine Functional Health"
        width={852}
        height={1280}
        sizes="(max-width: 768px) 100vw, 420px"
        className="w-full h-auto object-cover object-top"
        style={{ maxHeight: 520 }}
      />
    </div>
  );
}
