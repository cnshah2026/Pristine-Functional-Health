import Link from "next/link";
import { ChevronDown, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { generalFaqs } from "@/lib/faqs";

export function FAQSection({
  eyebrow = "Common questions",
  title = "Straight answers before you book.",
  showContact = true,
}: {
  eyebrow?: string;
  title?: string;
  showContact?: boolean;
}) {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
    >
      <div className="mx-auto grid w-full max-w-[var(--container-page)] grid-cols-12 gap-y-10 px-6 md:gap-x-12">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="title text-[2rem] md:text-[2.45rem] leading-[1.08] max-w-[18ch]">
            {title}
          </h2>
          {showContact && (
            <p className="mt-5 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)] max-w-[34ch]">
              For more questions, please reach out to us. We are happy to help
              you understand whether virtual functional health support is the
              right next step.
            </p>
          )}
          {showContact && (
            <Link href="/contact" className="btn btn-ghost mt-7">
              Contact us
              <Mail size={15} />
            </Link>
          )}
        </Reveal>

        <div
          className="col-span-12 md:col-span-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]"
        >
          {generalFaqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 45}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6">
                  <span className="font-serif text-[1.25rem] md:text-[1.45rem] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="mt-1 shrink-0 text-[var(--color-forest)] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="pb-7 pr-10 text-[0.98rem] leading-[1.75] text-[var(--color-ink-soft)]">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
