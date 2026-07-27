import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

// Reusable lead-capture section. Used on the homepage, contact page,
// and the /start funnel page so the form lives in one place.
export function LeadFormSection({
  id,
  eyebrow = "Send us a message",
  title = "Tell us what's going on.",
  subtitle = "A few details are all we need to point you in the right direction. Megha reads every message personally and replies within one business day.",
  background,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  background?: string;
}) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 border-t"
      style={{ borderColor: "var(--color-line)", background }}
    >
      <div className="mx-auto grid w-full max-w-[var(--container-page)] grid-cols-12 gap-y-8 px-6 md:gap-x-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="title text-[1.9rem] md:text-[2.3rem] leading-[1.08] max-w-[16ch]">
              {title}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)] max-w-[36ch]">
              {subtitle}
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
