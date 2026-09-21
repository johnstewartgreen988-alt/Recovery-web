import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/group-action",
  title: "Group Action | Regainr",
  description:
    "When multiple people are targeted by the same scam, pooling cases together can build a stronger, faster path to recovery.",
});

const FAQS = [
  {
    question: "How do I know if others were targeted by the same scam?",
    answer:
      "You might already know, through a forum, a community group, or people you know personally. If not, tell us the details of your case; our own investigations sometimes reveal a pattern we hadn't yet connected to your case.",
  },
  {
    question: "Will my case be merged with others without my consent?",
    answer:
      "No. We'll always explain what group action would mean for your case and ask before combining evidence or escalating collectively.",
  },
  {
    question: "Does group action cost more?",
    answer:
      "No. The same no-recovery, no-fee structure applies whether your case is pursued individually or as part of a group.",
  },
  {
    question: "What if no group exists yet for my case?",
    answer:
      "We still pursue your case individually with the same level of investigation and escalation. Group action is an added strength when it's available, not a requirement.",
  },
];

const WHEN_IT_MAKES_SENSE = [
  "The same platform, app, or 'advisor' targeted several people you know, or that we've identified through our own investigations",
  "You've found other victims of the same scheme in an online forum, community group, or news report",
  "Your individual case involves a smaller amount, but the scheme behind it affected many people the same way",
  "A bank or platform has been slow to act on an individual complaint, but might respond differently to a pattern of them",
];

const STEPS = [
  {
    number: "01",
    title: "We identify the pattern",
    body: "Through our own casework, or because you've flagged other victims to us, we identify a group of people affected by the same scheme.",
  },
  {
    number: "02",
    title: "We build a shared case file",
    body: "Evidence from each individual case, payment records, messages, platform details, is combined to show the full scale and pattern of the scheme.",
  },
  {
    number: "03",
    title: "We escalate collectively",
    body: "A group case carries more weight with banks, platforms, and regulators than a single complaint. We escalate on behalf of the whole group.",
  },
  {
    number: "04",
    title: "Recovery is pursued for each member",
    body: "Any outcome is applied individually. Group action strengthens the case, but what's recovered is always tied to what each person actually lost.",
  },
];

const BENEFITS = [
  {
    title: "More evidence, more weight",
    body: "A documented pattern across multiple victims is far harder for a bank or platform to dismiss than a single account.",
  },
  {
    title: "Shared cost of investigation",
    body: "Tracing a scheme's infrastructure, wallets, shell companies, payment processors, often benefits every case involved, not just one.",
  },
  {
    title: "You're not alone in it",
    body: "Many of the people we work with are relieved to learn they weren't the only one targeted, and that others are pursuing the same fight.",
  },
];

export default function GroupActionPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Group Action</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Group Action
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Stronger together
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              When more than one person has been targeted by the same
              scam, platform, or scheme, pooling cases together can build
              a far stronger, faster path to recovery than pursuing it
              alone.
            </p>
            <div className="mt-6">
              <Button href="/start-your-claim" variant="secondary">
                Check your eligibility
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/group-action.jpg"
              alt="A group of people joining hands together"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <Reveal>
              <section>
                <h2 className="font-display text-xl font-medium text-brand-900">
                  What is group action?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  Group action means combining the cases of several
                  people who were targeted by the same scam operation
                  into a single, coordinated effort. Instead of each
                  victim raising an isolated complaint, we build one case
                  that documents the full pattern, showing a bank,
                  platform, or regulator that this wasn&apos;t a one-off,
                  but a scheme with a recognizable method and a trail of
                  victims.
                </p>
              </section>
            </Reveal>

            <section>
              <h2 className="font-display text-xl font-medium text-brand-900">
                When group action makes sense
              </h2>
              <ul className="mt-4 space-y-3">
                {WHEN_IT_MAKES_SENSE.map((point, i) => (
                  <li
                    key={i}
                    className="animate-fade-up rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                    style={{ animationDelay: `${Math.min(i * 60, 240)}ms` }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-brand-900">
                How it works
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {STEPS.map((step, i) => (
                  <Reveal key={step.number} delay={i * 80}>
                    <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                      <span className="font-display text-sm font-semibold text-accent-600">
                        {step.number}
                      </span>
                      <h3 className="font-display mt-2 text-base font-medium text-brand-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-brand-900">
                Why it helps
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {BENEFITS.map((benefit, i) => (
                  <Reveal key={benefit.title} delay={i * 80}>
                    <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                      <h3 className="font-display text-base font-medium text-brand-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {benefit.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <aside>
              <div className="rounded-2xl bg-brand-950 p-6">
                <p className="font-display text-lg font-medium text-white">
                  Think others were targeted too?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Tell us about your case. If it looks like part of a
                  wider pattern, we&apos;ll let you know honestly whether
                  group action could strengthen it.
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
      </div>
    </div>
  );
}
