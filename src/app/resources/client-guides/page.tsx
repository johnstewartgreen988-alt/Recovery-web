import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqJsonLd } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/resources/client-guides",
  title: "Client Guide | Regainr",
  description:
    "A detailed, step-by-step guide to what working with Regainr actually looks like, from your first eligibility check through to case resolution.",
});

const TOC = [
  { id: "before-you-start", label: "Before you start" },
  { id: "what-happens-next", label: "What happens after you apply" },
  { id: "what-we-need", label: "What we need from you" },
  { id: "communication", label: "How we communicate" },
  { id: "timelines", label: "Understanding timelines" },
  { id: "resolution", label: "How a case resolves" },
  { id: "faqs", label: "Common questions" },
];

const DOCUMENTS_TO_GATHER = [
  "Any messages, emails, or chat logs with the person, platform, or company involved",
  "Screenshots of the website, app, or profile you were dealing with",
  "Bank or card statements showing the payments you made, including dates and reference numbers",
  "Any names, usernames, phone numbers, or account details you were given",
  "A rough timeline in your own words: how you were first contacted, and what happened after",
];

const WHAT_HAPPENS_STEPS = [
  {
    title: "1. You submit your eligibility check",
    body: "You tell us what happened through our online form, by phone, or over WhatsApp. This takes most people a few minutes, and there's no cost or obligation at this stage.",
  },
  {
    title: "2. We review your case",
    body: "Our team looks at the details you've provided and assesses whether there's a realistic path to recovery. We'll usually get back to you within one business day.",
  },
  {
    title: "3. We give you an honest answer",
    body: "If we don't think your case has a realistic chance, we'll tell you clearly and explain why, rather than taking it on regardless. If we do take it on, we'll walk you through what happens next and what we'll need from you.",
  },
  {
    title: "4. Investigation begins",
    body: "Our fraud investigation team starts building your case file: tracing funds, gathering documentation, and identifying the strongest grounds for escalation.",
  },
  {
    title: "5. We escalate on your behalf",
    body: "Once the case file is ready, our appeals team escalates it directly with the relevant bank, platform, or authority, using the evidence we've built.",
  },
  {
    title: "6. We keep you updated until it's resolved",
    body: "You'll hear from us at each meaningful stage, not just at the very end. If anything changes or we need more from you, we'll reach out directly.",
  },
];

const WHAT_WE_NEED = [
  {
    title: "Prompt responses to requests",
    body: "If we ask for a specific document or a clarifying detail, responding promptly helps keep your case moving. Delays on our side are rare, but delays waiting on missing information can add real time to a case.",
  },
  {
    title: "Honesty about the full picture",
    body: "Tell us everything relevant, even details that feel embarrassing or unflattering. We've heard it before, and small omissions can weaken a case if they surface later during escalation.",
  },
  {
    title: "No direct contact with the scammer once we're involved",
    body: "Once we've taken on your case, avoid contacting the scammer, platform, or 'advisor' yourself. Uncoordinated contact can sometimes complicate an active investigation or escalation.",
  },
];

const TIMELINE_FACTORS = [
  "The type of scam and how the money was moved (card, bank transfer, or cryptocurrency)",
  "How quickly the case was reported after the loss occurred",
  "Whether the bank, platform, or authority involved responds promptly or requires repeated escalation",
  "Whether your case is straightforward or forms part of a wider group action",
];

const FAQS = [
  {
    question: "Will I need to speak to my bank myself?",
    answer:
      "In most cases, we handle direct escalation with your bank or platform on your behalf. There may be moments where your bank needs to verify something with you directly, and we'll let you know in advance if that's expected.",
  },
  {
    question: "What if I remember new information partway through?",
    answer:
      "Send it over as soon as you can. New details, even ones that seem minor, can sometimes meaningfully strengthen a case.",
  },
  {
    question: "Can I check on my case's progress?",
    answer:
      "Yes. You're welcome to reach out to us at any point for an update, though we'll proactively update you at each meaningful stage regardless.",
  },
  {
    question: "What happens if new evidence works against my case?",
    answer:
      "We'll tell you honestly. Our job is to give you a realistic picture at every stage, not just an optimistic one.",
  },
];

export default function ClientGuidePage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Client Guide</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Client Guide
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Your guide to working with Regainr
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              A detailed, step-by-step look at what to expect, from your
              first eligibility check through to case resolution, whether
              you&apos;re just getting started or already an active
              client.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/client-guide.jpg"
              alt="An advisor walking a client through their case documents"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[240px_1fr]">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <aside>
              <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                On this page
              </p>
              <ul className="mt-4 flex flex-col gap-2 border-l border-line-100 pl-4">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-ink-500 hover:text-brand-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          <div className="space-y-16">
            <section id="before-you-start" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                Before you start
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                You don&apos;t need everything gathered before you reach out,
                our team will guide you through it, but having a few
                things ready in advance can speed your case up
                considerably:
              </p>
              <ul className="mt-4 space-y-3">
                {DOCUMENTS_TO_GATHER.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="what-happens-next" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                What happens after you apply
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {WHAT_HAPPENS_STEPS.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                  >
                    <h3 className="font-display text-base font-medium text-brand-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="what-we-need" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                What we need from you
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Recovering money lost to a scam works best as a
                partnership. Here&apos;s what helps your case move as smoothly
                as possible:
              </p>
              <div className="mt-4 space-y-4">
                {WHAT_WE_NEED.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                  >
                    <h3 className="font-display text-base font-medium text-brand-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="communication" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                How we communicate
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                You&apos;ll be assigned a point of contact within our
                investigation team for the duration of your case. We
                update clients at each meaningful milestone, when
                investigation begins, when a case is escalated, and when
                a bank or platform responds, rather than on a fixed
                schedule that doesn&apos;t reflect what&apos;s actually happening.
                If you ever want an update in between, you&apos;re welcome to
                reach out directly by email, phone, or WhatsApp.
              </p>
            </section>

            <section id="timelines" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                Understanding timelines
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                There&apos;s no single timeline that applies to every case.
                Some resolve in a matter of weeks; others take several
                months, particularly where a bank or platform is slow to
                respond. A few factors tend to influence how long a case
                takes:
              </p>
              <ul className="mt-4 space-y-3">
                {TIMELINE_FACTORS.map((factor, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                  >
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                We&apos;d rather set realistic expectations early than give
                you an optimistic estimate we can&apos;t stand behind. If a
                case is taking longer than expected, we&apos;ll tell you why.
              </p>
            </section>

            <section id="resolution" className="scroll-mt-24 animate-fade-up">
              <h2 className="font-display text-2xl font-medium text-brand-900">
                How a case resolves
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Resolution can take a few different forms depending on
                the case: a full refund, a partial settlement, or a
                formal decision in your favor from a bank, platform, or
                regulator. Whatever the outcome, we&apos;ll walk you through
                exactly what it means and what happens next, including
                how and when any recovered funds are released to you.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-24 animate-fade-up">
              <FaqJsonLd items={FAQS} />
              <h2 className="font-display text-2xl font-medium text-brand-900">
                Common questions from clients
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl bg-white px-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-brand-900 [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900 transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-5 text-sm leading-relaxed text-ink-500">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <Reveal className="rounded-[28px] bg-brand-950 p-8 sm:p-10">
              <p className="font-display text-xl font-medium text-white">
                Ready to get started?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                A free eligibility check is the first step in everything
                above. It takes about two minutes.
              </p>
              <div className="mt-5">
                <Button href="/start-your-claim" variant="primary">
                  Check eligibility
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
