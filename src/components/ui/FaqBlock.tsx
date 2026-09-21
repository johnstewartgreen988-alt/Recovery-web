import { Reveal } from "@/components/ui/Reveal";

export type FaqItem = {
  question: string;
  answer: string;
};

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

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function FaqBlock({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: FaqItem[];
}) {
  return (
    <section className="mt-20 border-t border-line-100 pt-14">
      <FaqJsonLd items={items} />
      <Reveal>
        <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
          {heading}
        </h2>
      </Reveal>
      <div className="mt-8 flex max-w-3xl flex-col gap-3">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i * 60, 240)}>
            <details className="group rounded-2xl bg-white px-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base font-medium text-brand-900 sm:text-lg">
                  {item.question}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900 transition-transform duration-200 group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-ink-500">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
