import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CaseStatGrid } from "@/components/ui/CaseStatGrid";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/metadata";

const CURRENT_SLUG = "romance-scam-recovery";
const MORE_STORIES = CASE_STUDIES.filter((item) => item.slug !== CURRENT_SLUG);

const SECTIONS = [
  {
    heading: "How the relationship began",
    body: "Christine, from Texas, was first contacted on Instagram by someone presenting himself as Chris David, an online personality known as a motivational speaker and fitness instructor. He told her he wanted something real, away from the attention that came with being in the public eye.",
  },
  {
    heading: "How trust was built",
    body: "Over the following months, the two spoke constantly. He was attentive and convincing, telling her their connection felt different from anything he'd experienced before. He eventually mentioned a project he was working on, something Christine could share in once it was finished. By then, she had no reason to doubt him.",
  },
  {
    heading: "When the requests for money started",
    body: "The requests began small and grew from there, each one tied to finishing the project so the two of them could finally be together. Over nearly two years, Christine sent a total of $50,000, believing every explanation he gave her.",
  },
  {
    heading: "The outcome",
    body: "When Christine came to us, our investigator Stuart worked closely with her, piecing together the messages, transfers, and the pattern behind them to build the case for why the funds should be returned. After review, $43,000 of what Christine lost was recovered.",
  },
];

export const metadata = pageMetadata({
  title: "Romance Scam Recovery — Case Study | Regainr",
  description:
    "How we helped Christine recover $43,000 lost to a romance scam that ran for nearly two years.",
});

const FAQS = [
  {
    question: "I'm embarrassed to explain this to my bank. Do I have to?",
    answer:
      "Being honest about what happened, even the parts that feel embarrassing, genuinely helps your case. Our team has heard it all before, and small omissions can weaken a case later during escalation.",
  },
  {
    question: "What if I never met them in person or know their real name?",
    answer:
      "That's extremely common with romance scams, and it doesn't stop us from investigating. We focus on tracing where the money actually went, not just who you believe you were speaking with.",
  },
  {
    question: "Can I still get help if this happened a while ago?",
    answer:
      "Often, yes. Older cases can be harder to trace, but it's always worth a free eligibility check rather than assuming too much time has passed.",
  },
  {
    question: "What if I'm not fully sure it was a scam?",
    answer:
      "That's exactly what an eligibility check is for. Tell us what happened, and we'll give you an honest read on it.",
  },
];

export default function RomanceScamRecoveryPage() {
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
          <span className="text-brand-900">Romance scam recovery</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Romance Scam
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              $43,000 recovered for a romance scam victim
            </h1>
            <p className="mt-4 text-sm text-ink-500">
              Published September 18, 2026 · 2 min read
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src="/romance.jpg" alt="" fill className="object-cover" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <CaseStatGrid
              stats={[
                { label: "Amount lost", value: "$50,000" },
                { label: "Amount recovered", value: "$43,000" },
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
