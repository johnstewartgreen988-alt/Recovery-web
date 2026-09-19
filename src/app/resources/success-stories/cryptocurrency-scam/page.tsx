import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CaseStatGrid } from "@/components/ui/CaseStatGrid";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";

const CURRENT_SLUG = "cryptocurrency-scam";
const MORE_STORIES = CASE_STUDIES.filter((item) => item.slug !== CURRENT_SLUG);

const SECTIONS = [
  {
    heading: "How it started",
    body: "Brad came across someone on Instagram who presented himself as a professional investor and broker, an asset manager who introduced Brad to a trading platform. The platform wasn't real, though it looked convincing.",
  },
  {
    heading: "How the platform built credibility",
    body: "The application looked and worked like a genuine trading platform, and Brad could see his balance growing in real time. He was even able to withdraw a small amount, enough to convince him the platform, and the money, were real.",
  },
  {
    heading: "When the requests for money started",
    body: "When Brad tried to withdraw the full amount he'd accumulated, he was told he needed to pay additional fees, commissions, and taxes before the funds could be released. Each payment was followed by another reason for the next one. Along the way, Brad also referred other people to the platform. In total, he lost $550,000.",
  },
  {
    heading: "The outcome",
    body: "When Brad came to us, our team investigated the case, tracing the wallets involved and gathering the evidence needed to escalate the matter to the relevant authorities. Through that process, we were able to help track down those responsible and recover $418,000, a substantial part of what Brad had lost, though not the full amount.",
  },
];

export const metadata = {
  title: "Cryptocurrency Scam Recovery — Case Study | Regainr",
  description:
    "How we helped Brad recover $418,000 lost to a fake cryptocurrency trading platform.",
};

const FAQS = [
  {
    question: "Can money sent to a crypto wallet be recovered?",
    answer:
      "It's harder than a bank transfer, but not always impossible. Tracing wallet activity and identifying where funds moved on to is exactly the kind of investigative work our team does.",
  },
  {
    question: "What if I referred other people to the platform?",
    answer:
      "You're not responsible for being deceived by a convincing scheme, and it doesn't affect whether we can help with your own case.",
  },
  {
    question: "I already reported this to the police. Is it still worth checking eligibility?",
    answer:
      "Yes. A police report is useful evidence, but it doesn't automatically lead to financial recovery. We focus specifically on tracing funds and escalating with banks and platforms.",
  },
  {
    question: "How long did a case like Brad's typically take?",
    answer:
      "Brad's case took around 6 months, from initial investigation through to the funds being recovered. Timelines vary depending on how quickly the platforms and banks involved respond.",
  },
];

export default function CryptocurrencyScamPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span>Success Stories</span>
          <span>/</span>
          <span className="text-brand-900">Cryptocurrency scam recovery</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Cryptocurrency Scam
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              $418,000 recovered for a cryptocurrency scam victim
            </h1>
            <p className="mt-4 text-sm text-ink-500">
              Published September 18, 2026 · 2 min read
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src="/investment.jpg" alt="" fill className="object-cover" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <CaseStatGrid
              stats={[
                { label: "Amount lost", value: "$550,000" },
                { label: "Amount recovered", value: "$418,000" },
                { label: "Duration", value: "6 months" },
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
