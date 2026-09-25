import Image from "next/image";
import Link from "next/link";
import { SCAM_TYPES } from "@/data/scamTypes";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/start-your-claim",
  title: "Start Your Case — Check Your Eligibility | Regainr",
  description:
    "Tell us what happened and we'll let you know honestly whether there's a case worth pursuing.",
});

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
    body: "Share the key details of the incident, including how you were contacted, what platform or person was involved, and what happened to your money.",
  },
  {
    number: "02",
    title: "We review your case",
    body: "We assess the information and evidence available to understand the circumstances of your case and whether there may be a realistic path toward recovery.",
  },
  {
    number: "03",
    title: "We explain your options",
    body: "If your case is suitable for further review, we explain the next steps and what may be required to move forward.",
  },
];

const CURRENCIES = ["USD", "GBP", "EUR", "CAD", "AUD", "Other"];

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

export default async function StartYourClaimPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

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
              Free case assessment
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Let&apos;s assess what happened
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              If you&apos;ve lost money to an online scam, the first step
              is understanding exactly what happened and what evidence is
              available.
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
              Tell us about your situation. Our team will review the
              information you provide and assess whether there may be a
              realistic path toward recovery.
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
              No upfront cost. No obligation. Every case is different, and
              recovery is not guaranteed.
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
              Your Case Details
            </h2>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong submitting your details. Please try
                again, or reach us on WhatsApp or email instead.
              </p>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email address"
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
                  placeholder="Include your country code"
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="scamType">Type of fraud</FieldLabel>
                <select id="scamType" name="scamType" className={inputClasses}>
                  <option value="">Select the type of scam involved</option>
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
                  placeholder="Enter the amount"
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel htmlFor="currency">Currency</FieldLabel>
                <select id="currency" name="currency" className={inputClasses}>
                  <option value="">Select currency</option>
                  {CURRENCIES.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <FieldLabel htmlFor="whenLost">When did this happen?</FieldLabel>
                <input
                  id="whenLost"
                  name="whenLost"
                  type="text"
                  placeholder="Month and year"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel htmlFor="details">What happened?</FieldLabel>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Tell us how you were contacted, what platform or person was involved, how the payment was made, and what happened afterward."
                  required
                  className={`${inputClasses} resize-none`}
                />
                <p className="mt-2 text-xs text-ink-500">
                  Please do not share passwords, banking login details,
                  recovery phrases, or other sensitive security
                  information.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-accent-500 py-2 pr-2 pl-6 text-[15px] font-semibold tracking-tight whitespace-nowrap text-brand-950 transition-colors duration-150 hover:bg-accent-400"
            >
              Submit Your Case for Assessment
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-950/10 transition-transform duration-150 group-hover:translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7h9M7.5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <p className="mt-3 text-xs text-ink-500">
              Your information will be reviewed as part of the case
              assessment. Submission does not guarantee recovery.
            </p>
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
