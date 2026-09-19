import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Why Choose Regainr | Regainr",
  description: "What makes Regainr different from going it alone.",
});

const FAQS = [
  {
    question: "Is there a catch to 'no recovery, no fee'?",
    answer:
      "No. If we don't recover any money on your behalf, you don't owe us a fee for the case work. If we do, our fee is a percentage of what's recovered, agreed with you upfront.",
  },
  {
    question: "Do you guarantee you can recover my money?",
    answer:
      "No, and we'd be wary of anyone who does. Every case is different, and we'll always give you an honest assessment of your chances rather than a guarantee we can't back up.",
  },
  {
    question: "How do I know you're a legitimate business?",
    answer:
      "Regainr is a private fraud and scam recovery consultancy with an in-house legal team, not a bank or government body. You're welcome to ask questions and verify our details before you share any information with us.",
  },
  {
    question: "How is this different from reporting it to my bank myself?",
    answer:
      "You can absolutely report it yourself, and we'd encourage you to. What we add is dedicated investigation, evidence-building, and escalation expertise, plus the leverage of a well-documented case, which a single individual complaint often lacks.",
  },
];

function HandCoinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 18c1.5-2.5 4-4 6.5-4h3c1 0 2 .3 2.5 1 .5.8 0 1.8-1 2l-3.5.8M13 15l5-1.5c1-.3 2 .3 2 1.3 0 .7-.5 1.3-1.2 1.5L13.5 18.5c-1 .3-2 .3-3 0L7 17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 8.5a2.5 2.5 0 100-5M18 11c1.9.4 3.5 1.7 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarBadgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L14.5 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STATS = [
  {
    icon: HandCoinIcon,
    value: "$120 million recovered",
    body: "The total amount we've helped clients pursue and recover from scams.",
    theme: "bg-mist-100 text-brand-900",
  },
  {
    icon: PeopleIcon,
    value: "2,500+ people helped",
    body: "From single bank transfers to coordinated group actions with hundreds of victims.",
    theme: "bg-brand-950 text-white",
  },
  {
    icon: StarBadgeIcon,
    value: "Excellent client rating",
    body: "4.8 out of 5, based on 1,286 client reviews.",
    theme: "bg-accent-500 text-brand-950",
  },
  {
    icon: ShieldCheckIcon,
    value: "No recovery, no fee",
    body: "You only ever pay us if we actually recover money on your behalf.",
    theme: "bg-mist-200 text-brand-900",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Honest from the start",
    body: "We tell you honestly whether we think your case has a realistic path to recovery, before you commit to anything. No false hope, no wasted time.",
  },
  {
    title: "Evidence-led investigation",
    body: "Every case is built on tracing funds, gathering documentation, and constructing the strongest possible argument for why your money should be returned.",
  },
  {
    title: "A dedicated case team",
    body: "You're not passed between departments. A specialist team, investigation through to appeals and legal, works your case from start to finish.",
  },
  {
    title: "In-house legal support",
    body: "Formal complaints and regulatory referrals are backed by our own legal team, not outsourced to a third party partway through your case.",
  },
  {
    title: "No recovery, no fee",
    body: "Our fee is a percentage of what's actually recovered, agreed with you upfront. If we don't recover anything, you don't owe us for the work.",
  },
  {
    title: "Group action when it helps",
    body: "If your case is part of a wider pattern affecting other people, we'll pool the evidence and escalate collectively for a stronger case.",
  },
];

const GOING_ALONE = [
  {
    title: "Time",
    diy: "Hours spent researching where to report, drafting complaints, and following up repeatedly with little response.",
    withUs: "We handle the investigation, documentation, and escalation, and keep you updated at each stage.",
  },
  {
    title: "Leverage",
    diy: "A single individual complaint is often easy for a bank or platform to close quickly.",
    withUs: "A well-documented case, and group action where relevant, carries far more weight.",
  },
  {
    title: "Expertise",
    diy: "Fund tracing, evidence gathering, and formal escalation aren't something most people do regularly.",
    withUs: "Our investigation and legal teams do this every day, and know exactly what a strong case needs.",
  },
];

export default function WhyChooseRegainrPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Why Choose Regainr</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Why choose Regainr
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              Recovering money lost to a scam is possible, but it&apos;s
              rarely simple to do alone. Here&apos;s what working with us
              actually looks like, and why it makes a difference.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/about.jpg"
              alt="The Regainr team discussing a case together"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <div className={`rounded-2xl p-6 ${stat.theme}`}>
                <stat.icon />
                <p className="font-display mt-4 text-xl leading-snug font-medium">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {stat.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              What makes us different
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 60, 240)}>
                <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                  <h3 className="font-display text-base font-medium text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              Going it alone vs. working with us
            </h2>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
            <div className="hidden grid-cols-3 border-b border-line-100 bg-mist-100 px-6 py-3 text-xs font-semibold tracking-wide text-brand-900 uppercase sm:grid">
              <span />
              <span>On your own</span>
              <span>With Regainr</span>
            </div>
            {GOING_ALONE.map((row, i) => (
              <Reveal key={row.title} delay={i * 80}>
                <div
                  className={`grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-3 sm:gap-4 sm:px-6 ${
                    i !== GOING_ALONE.length - 1 ? "border-b border-line-100" : ""
                  }`}
                >
                  <span className="font-display text-sm font-medium text-brand-900">
                    {row.title}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-500">
                    <span className="mb-1 block text-xs font-semibold tracking-wide text-ink-500 uppercase sm:hidden">
                      On your own
                    </span>
                    {row.diy}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">
                    <span className="mb-1 block text-xs font-semibold tracking-wide text-ink-500 uppercase sm:hidden">
                      With Regainr
                    </span>
                    {row.withUs}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <FaqBlock items={FAQS} />

        <Reveal className="mt-20 grid items-center gap-10 rounded-[28px] bg-brand-950 p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="font-display text-2xl font-medium text-white">
              Ready to see where you stand?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              A free eligibility check takes about two minutes, with no
              obligation to continue.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/team" variant="ghost">
              Meet the team
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
