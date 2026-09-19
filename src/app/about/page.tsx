import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "About Us | Regainr",
  description: "Who we are and why Regainr exists.",
};

const FAQS = [
  {
    question: "Is Regainr a law firm or a bank?",
    answer:
      "No. Regainr is a private fraud and scam recovery consultancy with an in-house legal team supporting every case. We are not a bank or government agency.",
  },
  {
    question: "How long has Regainr been operating?",
    answer:
      "Regainr was founded in 2019, and has since grown to a full team of investigators, appeals specialists, and in-house legal counsel working cases every day.",
  },
  {
    question: "What types of scams do you help with?",
    answer:
      "Investment scams, romance scams, job and task scams, safe account scams, impersonation scams, and purchase scams are the most common cases we see. If you're unsure whether your situation fits, a free eligibility check will tell you honestly.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a free eligibility check. It takes about two minutes, and we'll get back to you within one business day.",
  },
];

const VALUES = [
  {
    title: "Honest from the start",
    body: "We tell you honestly whether we think your case has a realistic path to recovery, before you commit to anything. No false hope, no wasted time.",
  },
  {
    title: "Evidence-led",
    body: "Every case is built on tracing funds, gathering documentation, and constructing the strongest possible argument for why your money should be returned.",
  },
  {
    title: "No recovery, no fee",
    body: "You don't pay us a fee unless we actually recover money on your behalf. It's a structure that keeps our incentives aligned with yours.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">About Us</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Why Regainr exists
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              Regainr was founded to help people who&apos;ve lost money to
              scams build the strongest possible case for recovering it,
              without the confusion and dead ends that usually come with
              trying to do it alone. We saw too many people give up after
              their bank or the platform they lost money on gave them a
              quick &quot;no,&quot; simply because they didn&apos;t know
              how to push back.
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

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
                <h2 className="font-display text-base font-medium text-brand-900">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 grid items-center gap-10 rounded-[28px] bg-brand-950 p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="font-display text-2xl font-medium text-white">
              Want to know more about the team?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Meet the specialists who work on every case, from
              investigation through to escalation.
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

        <FaqBlock items={FAQS} />
      </div>
    </div>
  );
}
