import Image from "next/image";
import Link from "next/link";
import { SCAM_TYPES } from "@/data/scamTypes";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Start Your Case — Check Your Eligibility | Regainr",
  description:
    "Tell us what happened and we'll let you know honestly whether there's a case worth pursuing.",
};

const FAQS = [
  {
    question: "How long does the eligibility check take?",
    answer:
      "Most people finish the form in a couple of minutes. We'll review it and get back to you within one business day.",
  },
  {
    question: "Is there any obligation once I submit this?",
    answer:
      "No. Checking your eligibility is completely free, and there's no obligation to continue if you decide not to.",
  },
  {
    question: "What if I don't have all the details or documents yet?",
    answer:
      "That's fine. Submit what you have now, we'll let you know if anything specific would help strengthen your case.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Our team reviews the details and gives you an honest read on whether there's a realistic path to recovery. If we take your case on, we'll walk you through exactly what happens next.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Tell us what happened",
    body: "Share a few details about the scam and how much you lost. It takes a couple of minutes.",
  },
  {
    number: "02",
    title: "We review your case",
    body: "Our team looks at what evidence exists and whether there's a realistic path to recovery.",
  },
  {
    number: "03",
    title: "We take action",
    body: "If we take your case on, we start building it immediately, no obligation until then.",
  },
];

function FieldLabel({ children, htmlFor }: { children: string; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-semibold text-brand-900"
    >
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-xl border border-line-100 bg-mist-50 px-4 py-3 text-sm text-brand-900 placeholder:text-ink-500/60 focus:border-brand-900 focus:bg-white focus:outline-none";

export default function StartYourClaimPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Start your case</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Free eligibility check
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Let&apos;s see if you have a case
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              Tell us what happened and we&apos;ll let you know honestly
              whether there&apos;s a realistic path to recovering what
              you lost. There&apos;s no cost and no obligation to check.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/start-your-claim.jpg"
              alt="Reviewing eligibility check details together"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
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

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
          <Reveal>
          <form
            action="/api/start-your-claim"
            method="POST"
            className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(11,11,13,0.08)] sm:p-10"
          >
            <h2 className="font-display text-xl font-medium text-brand-900">
              Your details
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              It takes about two minutes, and we&apos;ll get back to you
              within one business day.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 (000) 000-0000"
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="scamType">Type of scam</FieldLabel>
                <select id="scamType" name="scamType" className={inputClasses}>
                  <option value="">Select an option</option>
                  {SCAM_TYPES.map((scam) => (
                    <option key={scam.slug} value={scam.slug}>
                      {scam.title}
                    </option>
                  ))}
                  <option value="other">Other / not sure</option>
                </select>
              </div>
              <div>
                <FieldLabel htmlFor="amountLost">Approximate amount lost</FieldLabel>
                <input
                  id="amountLost"
                  name="amountLost"
                  type="text"
                  placeholder="$0"
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="whenLost">When did this happen?</FieldLabel>
                <input
                  id="whenLost"
                  name="whenLost"
                  type="text"
                  placeholder="e.g. March 2026"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="details">What happened?</FieldLabel>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Tell us how you were contacted, what platform was involved, and any other details that might help."
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-accent-500 py-3 pr-3 pl-6 text-[15px] font-semibold tracking-tight whitespace-nowrap text-brand-950 transition-colors duration-150 hover:bg-accent-400"
            >
              Submit your details
            </button>
          </form>
          </Reveal>

          <Reveal delay={100} className="lg:sticky lg:top-24 lg:self-start">
            <aside>
              <div className="rounded-2xl bg-brand-950 p-6">
                <p className="font-display text-lg font-medium text-white">
                  No case, no cost
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  We work on a no-recovery, no-fee basis, so checking your
                  eligibility costs nothing. We only take on cases we
                  believe have a realistic chance of recovery, and
                  we&apos;ll tell you honestly if we don&apos;t think
                  that&apos;s the case for you.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>

        <FaqBlock items={FAQS} />
      </div>
    </div>
  );
}
