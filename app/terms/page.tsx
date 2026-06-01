import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for Pristine Functional Health services.",
  path: "/terms",
});

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using this website and scheduling any appointment with Pristine Functional Health, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services. We reserve the right to update these terms at any time, and continued use of the site constitutes acceptance of any changes.`,
  },
  {
    title: "Nature of Services",
    body: `Pristine Functional Health provides virtual functional health consultations, functional nutrition counseling, and wellness coaching services. These services are educational and supportive in nature. They do not replace diagnosis, treatment, or ongoing care from your licensed medical providers, and they are not a substitute for emergency medical care. Megha Shah is a licensed Physical Therapist (PT) and Certified Functional Nutritional Counsellor (CFNC). Services are provided within her scope of licensure and certification.`,
  },
  {
    title: "Not a Medical Emergency Service",
    body: `If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately. Pristine Functional Health cannot respond to emergencies and is not designed for crisis or acute care situations. Our services are intended for chronic, complex, and lifestyle-related health concerns pursued in a non-emergency context.`,
  },
  {
    title: "Disclaimer",
    body: `Pristine Functional Health does not provide psychotherapy, psychiatric diagnosis, crisis counseling, or emergency mental health services. Functional nutrition and wellness coaching may support the body systems that influence mood, energy, and stress resilience, but they do not replace care from a licensed therapist, psychiatrist, psychologist, or other mental health professional. If you are in emotional crisis, feel unsafe, or may harm yourself or someone else, call 911 or call or text 988 for the Suicide & Crisis Lifeline in the United States. Do not start, stop, or change psychiatric medication or therapy plans without guidance from the licensed professional managing that care.`,
  },
  {
    title: "FDA Disclaimer",
    body: `Statements on this website, in educational materials, and during wellness sessions have not been evaluated by the Food and Drug Administration. Pristine Functional Health does not claim that any nutrition strategy, supplement, protocol, lab review, lifestyle recommendation, food sensitivity kit, or educational resource will diagnose, treat, cure, or prevent any disease. Products discussed are not represented as FDA-approved treatments unless explicitly stated by the product manufacturer or applicable regulator. Information is provided for educational and wellness purposes only. Always consult a qualified licensed healthcare provider before beginning a supplement, changing medications, delaying medical care, or making significant diet, exercise, or lifestyle changes, especially if you are pregnant, nursing, taking medication, or managing a diagnosed medical condition.`,
  },
  {
    title: "Individualized Recommendations",
    body: `Service descriptions, condition pages, program tables, testing examples, supplement examples, protocols, timelines, support channels, resources, and outcomes described on this website are general educational examples. They are not a promise, guarantee, binding offer, prescription, or assurance that a specific test, supplement, protocol, product, communication method, result, or service feature is recommended, provided, available, safe, or appropriate for every client. Final recommendations depend on intake, health history, goals, current medical care, lab information when available, safety considerations, budget, scope, and professional judgment.`,
  },
  {
    title: "HIPAA Compliance & Confidentiality",
    body: `Pristine Functional Health protects health information using HIPAA-conscious administrative, technical, and physical safeguards. Protected Health Information (PHI) may include intake forms, consultation notes, lab documents you provide, wellness history, payment records tied to care, and communications about your services. PHI is accessed only by Megha Shah and necessary administrative support involved in scheduling, payment, documentation, or care coordination. We use secure platforms when collecting or storing health information, share the minimum necessary information for operational needs, and do not disclose PHI to third parties without written authorization except as permitted or required by law. Where a vendor handles PHI, we use privacy-sensitive systems and business-associate safeguards when applicable. Standard email and text messaging can carry security limits, so sensitive health details should be shared through secure channels whenever available.`,
  },
  {
    title: "Testimonials and Results",
    body: `Testimonials, case examples, and representative patient stories on this website are provided for educational context. Some stories may be composites or edited for privacy, clarity, and length. They are not guarantees of results, and they should not be interpreted as medical claims. Your outcome depends on your health history, consistency, medical care, labs, lifestyle, and other individual factors.`,
  },
  {
    title: "Appointment Scheduling and Cancellation",
    body: `Appointments are scheduled through our online booking system. We ask that you provide at least 24 hours' notice if you need to cancel or reschedule a session. Late cancellations or no-shows may be subject to a cancellation fee as outlined at the time of booking. We reserve the right to refuse service to individuals who repeatedly cancel without adequate notice.`,
  },
  {
    title: "Payment and Refunds",
    body: `All fees are due at the time of service or as otherwise agreed in writing. Payments are processed through secure, PCI-compliant payment processors. Refunds are considered on a case-by-case basis. Because our consultations involve significant preparation time, partial refunds may apply. No refund will be issued after a session has been completed.`,
  },
  {
    title: "Telehealth Consent",
    body: `By booking a virtual session with Pristine Functional Health, you acknowledge that you understand the benefits and limitations of telehealth services, including potential technology-related disruptions. You consent to the use of video conferencing technology for your consultations. You understand that Megha Shah may refer you to an in-person provider if telehealth is deemed clinically inadequate for your needs.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, graphics, logos, images, and educational materials — is the intellectual property of Pristine Functional Health and is protected by copyright law. You may not reproduce, distribute, or use our content for commercial purposes without express written permission. Personal, non-commercial use for your own health education is permitted.`,
  },
  {
    title: "Limitation of Liability",
    body: `Pristine Functional Health, Megha Shah, and affiliated staff are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our services or website. Our total liability to you for any claim arising out of or relating to these terms or our services is limited to the amount you paid for the specific service in question. We do not guarantee specific health outcomes.`,
  },
  {
    title: "Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Maryland, United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Maryland.`,
  },
  {
    title: "Contact",
    body: `If you have questions about these Terms and Conditions, please contact us at contact@pristinefunctionalhealth.com or call 240-676-3079. We are happy to clarify anything before you book.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Legal</p>
            <h1 className="display-xl max-w-[18ch]">
              Terms &amp; <em className="italic-serif">Conditions.</em>
            </h1>
            <p className="lede mt-6 max-w-[56ch]">
              Please read these terms carefully before using our website or
              booking any services. By using Pristine Functional Health, you agree to
              be bound by these terms.
            </p>
            <p className="mt-4 text-[0.84rem]" style={{ color: "var(--color-ink-muted)" }}>
              Last updated: May 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="max-w-[820px]">
            <div
              className="divide-y"
              style={{ borderColor: "var(--color-line)" }}
            >
              {sections.map((s, i) => (
                <Reveal key={s.title} delay={i * 30} className="py-8">
                  <h2
                    className="font-serif text-[1.45rem] leading-snug mb-4 tracking-tight"
                    style={{ color: "var(--color-ink)" }}
                  >
                    <span
                      className="font-mono text-[0.72rem] tracking-widest mr-3"
                      style={{ color: "var(--color-sage)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  <p
                    className="text-[0.96rem] leading-relaxed"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <div
                className="rounded-2xl border px-7 py-6"
                style={{
                  borderColor: "var(--color-line)",
                  background: "var(--color-canvas)",
                }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--color-sage)" }}>Questions?</p>
                <p className="text-[0.94rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  These terms are meant to be clear, not intimidating. If anything is unclear or you have concerns before booking, please reach out. We&apos;d rather talk it through than have you proceed with uncertainty.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-[0.9rem]">
                  <a href="tel:+12406763079" style={{ color: "var(--color-forest)" }}>240-676-3079</a>
                  <a href="mailto:contact@pristinefunctionalhealth.com" style={{ color: "var(--color-forest)" }}>contact@pristinefunctionalhealth.com</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
