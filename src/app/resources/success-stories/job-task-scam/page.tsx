import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CaseStatGrid } from "@/components/ui/CaseStatGrid";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";

const CURRENT_SLUG = "job-task-scam";
const MORE_STORIES = CASE_STUDIES.filter((item) => item.slug !== CURRENT_SLUG);

const SECTIONS = [
  {
    heading: "How it started",
    body: "Tyler was messaged out of the blue on WhatsApp with an offer for flexible, work-from-home task work, rating and 'boosting' product listings for an online retailer. The recruiter was friendly and patient, and the app he was asked to install looked like a legitimate freelance platform.",
  },
  {
    heading: "How the scheme built trust",
    body: "The first few tasks were free and paid out immediately, small amounts that landed in Tyler's account within minutes. His dashboard balance climbed steadily as he completed more tasks, and the quick, real payouts early on made everything that followed feel credible.",
  },
  {
    heading: "When the requests for money started",
    body: "Eventually Tyler was assigned a 'premium' task that required him to pay a deposit to unlock a much larger commission. Each deposit unlocked a bigger balance he still couldn't withdraw, and each stall came with a new fee needed to 'release' the funds. In total, he paid in $18,200 before he stopped.",
  },
  {
    heading: "The outcome",
    body: "When Tyler came to us, our investigation team traced the payment trail and the platform's ownership, and built the evidence needed to escalate the case with his bank. Through that process, we helped recover $14,600 of what he'd paid in.",
  },
];

export const metadata = {
  title: "Job / Task Scam Recovery — Case Study | Regainr",
  description:
    "How we helped Tyler recover $14,600 lost to a work-from-home job/task scam.",
};

const FAQS = [
  {
    question: "I still have a 'balance' showing on the platform. Can I withdraw it?",
    answer:
      "No. That balance isn't real money, it's a number designed to keep you paying in. Stop making any further deposits, regardless of what the app shows.",
  },
  {
    question: "The recruiter has blocked me. Does that stop the investigation?",
    answer:
      "No. Losing contact with the recruiter doesn't prevent us from tracing the payment trail and building your case.",
  },
  {
    question: "Is it worth reporting if I only lost a small amount?",
    answer:
      "Yes. Smaller individual amounts are often part of a much larger scheme affecting many people, and reporting can matter for group action even when a single case is modest.",
  },
  {
    question: "Can money sent through a mobile payment app be recovered?",
    answer:
      "It depends on how quickly it's reported and the provider's own policies, but it's always worth a free eligibility check rather than assuming nothing can be done.",
  },
];

export default function JobTaskScamPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/resources/success-stories" className="hover:text-brand-900">
            Success Stories
          </Link>
          <span>/</span>
          <span className="text-brand-900">Job / task scam recovery</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Job / Task Scam
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              $14,600 recovered for a job/task scam victim
            </h1>
            <p className="mt-4 text-sm text-ink-500">
              Published September 12, 2026 · 2 min read
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src="/job.jpg" alt="" fill className="object-cover" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <CaseStatGrid
              stats={[
                { label: "Amount lost", value: "$18,200" },
                { label: "Amount recovered", value: "$14,600" },
                { label: "Duration", value: "4 months" },
              ]}
            />

            <div className="mt-12 space-y-10">
              {SECTIONS.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-xl font-medium text-brand-900">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/start-your-claim" variant="secondary">
                Check your eligibility
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24 lg:self-start">
            <aside>
              <div className="rounded-2xl bg-brand-950 p-6">
                <p className="font-display text-lg font-medium text-white">
                  New here? We&apos;re Regainr.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  We help people build the strongest possible case for
                  recovering money lost to fraud, from evidence to
                  escalation.
                </p>
                <div className="mt-5">
                  <Button href="/start-your-claim" variant="primary">
                    Check eligibility
                  </Button>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        <FaqBlock items={FAQS} />

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              More success stories
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_STORIES.map((item, i) => (
              <Reveal key={item.slug} delay={Math.min(i * 80, 240)} className="h-full">
                <CaseStudyCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
