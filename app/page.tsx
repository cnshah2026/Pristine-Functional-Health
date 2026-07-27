import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, ShoppingBag } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConditionsList } from "@/components/sections/conditions-list";
import { ServicesList } from "@/components/sections/services-list";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQSection } from "@/components/sections/faq-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/reveal";
import { faqPageJsonLd } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Online functional health consultation across the USA",
  description:
    "Pristine Functional Health offers online functional health consultations for adults seeking root-cause support for fatigue, gut symptoms, hormones, weight resistance, thyroid concerns, and chronic patterns.",
  path: "/",
  keywords: [
    "online functional health consultation",
    "virtual functional health consultation",
    "root cause health consultation online",
    "functional nutrition",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <Hero />
      <ProblemSection />
      <ConditionsList />
      <ServicesList />
      <ShopPreview />
      <AboutPreview />
      <Testimonials />
      <FAQSection />
      <LeadFormSection
        id="contact-form"
        eyebrow="Start a conversation"
        title="Tell us what's going on."
        background="var(--color-bone-2)"
      />
      <CtaBand
        eyebrow="Book your free 20-minute call"
        title="You do not need a louder plan. You need the right questions."
        subtitle="Bring the symptoms, the labs, the long story, and the parts no one has connected yet. We'll start there."
      />
    </>
  );
}

function ShopPreview() {
  const items = [
    { icon: ShoppingBag, label: "Premium quality supplements" },
    { icon: FlaskConical, label: "Food sensitivity kit" },
    { icon: BookOpen, label: "Premium courses" },
  ];

  return (
    <section
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
    >
      <div className="mx-auto grid w-full max-w-[var(--container-page)] grid-cols-12 gap-y-8 px-6 md:gap-x-10">
        <Reveal className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-5">Shop</p>
          <h2 className="display max-w-[12ch]">Coming soon.</h2>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7" delay={100}>
          <p className="lede max-w-[58ch]">
            A curated shop is coming for patients who want carefully selected support
            between appointments: premium quality supplements, food sensitivity
            kits, and premium courses built around sustainable wellness habits.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.label}
                  className="border-t pt-4 text-[0.95rem]"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <Icon size={16} className="mb-3 text-[var(--color-forest)]" />
                  {item.label}
                </li>
              );
            })}
          </ul>
          <Link href="/shop" className="btn btn-ghost mt-8">
            Visit shop preview
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="relative z-[3] -mt-14 pt-24 pb-24 md:-mt-20 md:pt-32 md:pb-36"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-bone-2) 72%, transparent) 56px, var(--color-bone-2) 128px, var(--color-bone-2) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <p className="eyebrow mb-5">The problem we solve</p>
          <p className="font-serif text-[2.15rem] md:text-[4.25rem] leading-[1.05] max-w-[22ch]">
            You can be medically &ldquo;fine&rdquo; and still know, in your bones, that something is off.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10">
          {[
            {
              label: "The dismissed patient",
              copy: "Your labs are in range, your symptoms are real, and the explanation you were given was too small.",
            },
            {
              label: "The careful skeptic",
              copy: "You do not want wellness theater. You want a clinician who can read the pattern and explain the why.",
            },
            {
              label: "The exhausted achiever",
              copy: "You have tried harder than anyone knows. The work now is to stop forcing and start investigating.",
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <article className="border-t pt-6" style={{ borderColor: "var(--color-line)" }}>
                <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="font-serif text-[1.65rem] md:text-[2rem] leading-[1.08] mb-4">
                  {item.label}
                </h2>
                <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-[34ch]">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
