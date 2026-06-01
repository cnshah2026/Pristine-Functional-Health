export const generalFaqs = [
  {
    q: "How much will this cost me?",
    a: "Program cost depends on the level of support, the program duration, and how customized your plan needs to be. Pristine Functional Health offers separate program options, and pricing is discussed privately during your free discovery call so you can understand the fit before making a decision.",
  },
  {
    q: "How much time does it take?",
    a: "Every person responds differently to nutrition changes, lifestyle work, and supplement support when appropriate. Some people notice progress earlier than expected, while others need more time because of health history, stress load, medications, sleep, digestion, hormones, or metabolic patterns. We set realistic checkpoints and adjust the plan as your body responds.",
  },
  {
    q: "Where are you located?",
    a: "Pristine Functional Health is based in Germantown, Maryland, and currently offers virtual and online consultation services. The benefit of virtual functional health coaching is that you can meet from home, work, or wherever you have a private internet connection.",
  },
  {
    q: "What makes your program different than others?",
    a: "We look at the body as a connected system instead of using a generic one-size-fits-all plan. Your symptoms, health history, lifestyle, nutrition patterns, goals, and available lab information are reviewed together so the plan can be built around the bigger picture.",
  },
  {
    q: "Are your programs safe?",
    a: "Safety is central to the process. Recommendations are individualized, conservative, and based on your history, current care, goals, and comfort level. Our services are educational and wellness-focused, and they do not replace medical diagnosis, emergency care, or treatment from your licensed medical providers.",
  },
  {
    q: "Does insurance pay for your services?",
    a: "Unfortunately, no. Pristine Functional Health is a private-pay service at this time. Program options, payment structure, and the level of support that makes the most sense for you can be discussed during your free discovery call.",
  },
  {
    q: "Do you prescribe medications?",
    a: "No. We do not prescribe medications or tell you to start, stop, or change prescribed medication. When appropriate, we may discuss nutrition, lifestyle, and wellness-focused supplement options, while medication decisions stay with your prescribing clinician.",
  },
] as const;

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
