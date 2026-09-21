import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SCAM_TYPES } from "@/data/scamTypes";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/how-it-works",
  title: "How It Works | Regainr",
  description:
    "How we handle your case, from the first eligibility check through to escalation and recovery.",
});

const FAQS = [
  {
    question: "How long does the whole process take?",
    answer:
      "It varies by case. Some resolve in a matter of weeks, others take several months, depending on the type of scam, the evidence available, and how quickly the bank or platform involved responds.",
  },
  {
    question: "What happens if you don't think you can help?",
    answer:
      "We'll tell you clearly and explain why, rather than taking on a case we don't believe has a realistic chance of recovery.",
  },
  {
    question: "Do I need to do anything once you take on my case?",
    answer:
      "Mostly just respond promptly if we need a document or a clarifying detail. We handle the investigation and escalation directly.",
  },
  {
    question: "Is the eligibility check really free?",
    answer:
      "Yes, completely free, with no obligation to continue if you decide not to.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Free eligibility check",
    body: "Tell us what happened, when, and how much you lost. We'll review the details and let you know honestly whether there's a realistic path to recovery.",
  },
  {
    number: "02",
    title: "Investigation & evidence",
    body: "If we take your case on, our investigation team gets to work tracing funds, gathering transaction records, and building the strongest possible case file.",
  },
  {
    number: "03",
    title: "Escalation",
    body: "We escalate the case directly with the relevant banks, platforms, or authorities, on your behalf, using the evidence we've built.",
  },
  {
    number: "04",
    title: "Recovery & resolution",
    body: "Recovery can mean a full refund, a partial settlement, or a formal decision in your favor, depending on the case. Whatever the outcome, we keep you updated at every stage until it's resolved.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">How It Works</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              How we help you recover what you lost
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              From your first eligibility check through to escalation, here&apos;s
              what working with us looks like.
            </p>
            <div className="mt-6">
              <Button href="/start-your-claim" variant="secondary">
                Check your eligibility
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/how-it-works.jpg"
              alt="A Regainr specialist talking a client through their case"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                <span className="font-display text-sm font-semibold text-accent-600">
                  {step.number}
                </span>
                <h2 className="font-display mt-2 text-base font-medium text-brand-900">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              Scams we specialise in
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-500">
              Every case is different, but most of the cases we work fall
              into one of these categories.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCAM_TYPES.map((scam, i) => (
              <Reveal key={scam.slug} delay={Math.min(i * 60, 300)}>
                <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                  <scam.icon className="h-7 w-7 shrink-0 text-brand-900" />
                  <h3 className="font-display text-lg font-medium text-brand-900">
                    {scam.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {scam.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <FaqBlock items={FAQS} />

        <Reveal className="mt-20 grid items-center gap-10 rounded-[28px] bg-brand-950 p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="font-display text-2xl font-medium text-white">
              Not sure if your case fits?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Start with a free eligibility check, we&apos;ll tell you
              honestly whether there&apos;s a case worth pursuing.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/fees" variant="ghost">
              Our fees
            </Button>
            <Button href="/start-your-claim" variant="primary">
              Check eligibility
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
