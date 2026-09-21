import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqJsonLd } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/fees",
  title: "Our Fees | Regainr",
  description: "What it costs to work with Regainr.",
});

const FAQS = [
  {
    question: "Is there a cost to check my case?",
    answer:
      "No. Your initial eligibility check is completely free, and there's no obligation to continue if you decide not to.",
  },
  {
    question: "How are fees structured?",
    answer:
      "We work on a no-recovery, no-fee basis. If we do recover money on your behalf, our fee is a percentage of the amount recovered, agreed with you upfront before any work begins.",
  },
  {
    question: "Do I pay anything if you don't recover my money?",
    answer:
      "No. If we're unable to recover anything, you owe us nothing for the case work itself.",
  },
  {
    question: "When would I be charged?",
    answer:
      "Only once funds have actually been recovered on your behalf. We don't ask for payment upfront.",
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

export default function FeesPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Our Fees</span>
        </nav>

        <Reveal className="mt-8 max-w-2xl">
          <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
            Our fees
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            We work on a simple no-recovery, no-fee basis. You won&apos;t
            pay us anything upfront, and if we don&apos;t recover any money
            on your behalf, you don&apos;t owe us a fee for the work
            itself.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
              <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                Initial check
              </p>
              <p className="font-display mt-2 text-2xl font-medium text-brand-900">
                Free
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                A no-obligation review of your case and an honest
                assessment of whether it&apos;s worth pursuing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
              <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                If we take your case
              </p>
              <p className="font-display mt-2 text-2xl font-medium text-brand-900">
                % of recovery
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Our fee is a percentage of what&apos;s actually recovered,
                agreed with you upfront before any work begins.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
              <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                If nothing is recovered
              </p>
              <p className="font-display mt-2 text-2xl font-medium text-brand-900">
                You pay nothing
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                If we&apos;re unable to recover any money, you don&apos;t
                owe us a fee for the case work.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-line-100 pt-14">
          <FaqJsonLd items={FAQS} />
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              Fee questions
            </h2>
          </Reveal>

          <div className="mt-8 flex max-w-3xl flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 60, 240)}>
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

        <Reveal className="mt-20 grid overflow-hidden rounded-[28px] bg-brand-950 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src="/fees.jpg"
              alt="The Regainr team reviewing a case together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-14">
            <div>
              <p className="font-display text-2xl font-medium text-white">
                Ready to find out if you have a case?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Start with a free eligibility check, no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/how-it-works" variant="ghost">
                How it works
              </Button>
              <Button href="/start-your-claim" variant="primary">
                Check eligibility
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
