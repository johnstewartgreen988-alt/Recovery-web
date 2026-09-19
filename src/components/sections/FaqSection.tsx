import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  {
    question: "How do I know if you can help me?",
    answer:
      "Start with our eligibility check. Tell us what happened and we'll let you know honestly whether there's a case worth pursuing.",
  },
  {
    question: "Is there a cost to check my case?",
    answer:
      "No. Your initial eligibility check is completely free, and there's no obligation to continue if you decide not to.",
  },
  {
    question: "How can I verify you're a genuine business?",
    answer:
      "We're upfront about who we are: Regainr is a private fraud and scam recovery consultancy with an in-house legal team, not a bank or government body. You're welcome to ask questions and verify our details before you share any information with us.",
  },
  {
    question: "What happens if you don't think you can help?",
    answer:
      "We'll tell you clearly and explain why, rather than taking on a case we don't believe has a realistic chance.",
  },
  {
    question: "How long do cases typically take?",
    answer:
      "It varies by case — timelines depend on the type of scam, the evidence available, and whether your bank or provider needs to escalate a decision.",
  },
  {
    question: "What information will I need to provide?",
    answer:
      "Details of what happened, when, and any records you have — messages, transaction records, or correspondence with your bank. We'll guide you on exactly what's useful for your specific case.",
  },
];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1v12M1 7h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-mist-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[32px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[38px]">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 60, 300)}>
              <details className="group rounded-2xl bg-white px-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base font-medium text-brand-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900 transition-transform duration-200 group-open:rotate-45">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-ink-500">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
