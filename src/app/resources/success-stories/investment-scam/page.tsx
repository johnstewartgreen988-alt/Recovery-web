import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CaseStatGrid } from "@/components/ui/CaseStatGrid";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/metadata";

const CURRENT_SLUG = "investment-scam";
const MORE_STORIES = CASE_STUDIES.filter((item) => item.slug !== CURRENT_SLUG);

const SECTIONS = [
  {
    heading: "How it started",
    body: "Elena was added to a private Telegram group by someone she'd met through a mutual connection online. The group was run by a 'senior analyst' who shared daily crypto and forex trading signals, along with screenshots of other members' profits.",
  },
  {
    heading: "How the platform built credibility",
    body: "Elena was guided to open an account on a trading app that mirrored the signals from the group. Her dashboard showed steady, believable gains, and the analyst was responsive and reassuring whenever she had questions, always ready with an explanation.",
  },
  {
    heading: "When the requests for money started",
    body: "When Elena tried to withdraw her balance, she was told she needed to upgrade to a 'VIP tier' to unlock larger withdrawals, then pay a tax clearance fee once she had. Each payment was framed as the last one standing between her and her funds. In total, she paid in $86,500.",
  },
  {
    heading: "The outcome",
    body: "When Elena came to us, our investigation team traced the flow of funds through the platform and built the case needed to escalate the matter with her bank and payment providers. Through that process, we helped her recover the full $86,500 she'd lost.",
  },
];

export const metadata = pageMetadata({
  title: "Investment Scam Recovery — Case Study | Regainr",
  description:
    "How we helped Elena recover the full $86,500 she lost to a fake crypto signals trading scheme.",
});

const FAQS = [
  {
    question: "How can I check if a trading platform is legitimate before investing?",
    answer:
      "Independently search the relevant financial regulator's public register for the platform or advisor's name, rather than trusting a badge or logo on the site itself.",
  },
  {
    question: "I already paid a 'release fee.' Should I pay another one to get my money out?",
    answer:
      "No. Stop immediately, even if you're told it's the very last payment required. Further fees are a sign of continued extraction, not a genuine path to withdrawal.",
  },
  {
    question: "What if I invested through a group chat, not an official company?",
    answer:
      "That's a very common pattern, and it doesn't prevent us from investigating. We focus on tracing where the money actually went.",
  },
  {
    question: "Is it too late if I've lost contact with the 'analyst' or the group?",
    answer:
      "No. A free eligibility check will tell you honestly whether there's still a realistic path to recovery, even without ongoing contact.",
  },
];

export default function InvestmentScamPage() {
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
          <span className="text-brand-900">Investment scam recovery</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Investment Scam
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              $86,500 recovered for an investment scam victim
            </h1>
            <p className="mt-4 text-sm text-ink-500">
              Published August 29, 2026 · 2 min read
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src="/investment-scam.jpg" alt="" fill className="object-cover" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <CaseStatGrid
              stats={[
                { label: "Amount lost", value: "$86,500" },
                { label: "Amount recovered", value: "$86,500" },
                { label: "Duration", value: "2 months" },
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
