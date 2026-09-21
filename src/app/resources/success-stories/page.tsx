import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/resources/success-stories",
  title: "Success Stories | Regainr",
  description:
    "Real cases where we've helped people recover money lost to scams and fraud.",
});

const FAQS = [
  {
    question: "How are these cases selected for publishing?",
    answer:
      "We only publish a case with the client's explicit permission, and names or identifying details are sometimes adjusted to protect their privacy.",
  },
  {
    question: "Will my case be added here?",
    answer:
      "Only if you'd like it to be, and only with details you're comfortable sharing. It's never a requirement to work with us.",
  },
  {
    question: "My situation doesn't match any of these. Can you still help?",
    answer:
      "Likely, yes. These are a small sample of the case types we handle. A free eligibility check will tell you honestly whether your specific situation is one we can help with.",
  },
  {
    question: "How long did cases like these typically take?",
    answer:
      "It varies, from a few months to longer, depending on the scam type, the evidence available, and how quickly the bank or platform involved responded.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Success Stories</span>
        </nav>

        <Reveal className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Real cases, real recoveries
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              A look at some of the cases we&apos;ve worked, and what we were
              able to help recover.
            </p>
          </div>
          <div>
            <Button href="/start-your-claim" variant="secondary">
              Check your eligibility
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i * 80, 240)} className="h-full">
              <CaseStudyCard item={item} />
            </Reveal>
          ))}
        </div>

        <FaqBlock items={FAQS} />
      </div>
    </div>
  );
}
