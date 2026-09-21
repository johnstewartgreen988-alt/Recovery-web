import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { SCAM_TYPES } from "@/data/scamTypes";
import { SCAM_DETAILS } from "@/data/scamDetails";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return SCAM_TYPES.map((scam) => ({ slug: scam.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scam = SCAM_TYPES.find((item) => item.slug === slug);
  const detail = SCAM_DETAILS[slug];
  if (!scam || !detail) return {};

  return pageMetadata({
    path: `/scams/${slug}`,
    title: `${scam.title} — Warning Signs & How to Protect Yourself | Regainr`,
    description: detail.intro,
  });
}

function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l9.5 16.5H2.5L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5l5 5L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ScamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scam = SCAM_TYPES.find((item) => item.slug === slug);
  const detail = SCAM_DETAILS[slug];

  if (!scam || !detail) notFound();

  const otherScams = SCAM_TYPES.filter((item) => item.slug !== slug);

  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/how-it-works" className="hover:text-brand-900">
            Scam types
          </Link>
          <span>/</span>
          <span className="text-brand-900">{scam.title}</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
              Scam Awareness
            </span>
            <h1 className="font-display mt-4 text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              {scam.title}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              {detail.intro}
            </p>
            <div className="mt-6">
              <Button href="/start-your-claim" variant="secondary">
                Check your eligibility
              </Button>
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-800 to-brand-950"
          >
            {detail.image ? (
              <Image
                src={detail.image}
                alt={scam.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <scam.icon className="h-24 w-24 text-accent-500" />
            )}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <section className="animate-fade-up">
              <h2 className="font-display text-xl font-medium text-brand-900">
                What is a {scam.title.toLowerCase()}?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {detail.whatIsIt}
              </p>
            </section>

            <section className="animate-fade-up">
              <h2 className="font-display text-xl font-medium text-brand-900">
                How it works
              </h2>
              <ol className="mt-4 space-y-4">
                {detail.howItWorks.map((step, i) => (
                  <li
                    key={i}
                    className="animate-fade-up flex gap-4"
                    style={{ animationDelay: `${Math.min(i * 60, 240)}ms` }}
                  >
                    <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist-100 text-sm font-semibold text-brand-900">
                      {i + 1}
                    </span>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-500">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="animate-fade-up">
              <h2 className="font-display text-xl font-medium text-brand-900">
                Warning signs to watch for
              </h2>
              <ul className="mt-4 space-y-3">
                {detail.warningSigns.map((sign, i) => (
                  <li
                    key={i}
                    className="animate-fade-up flex gap-3 rounded-xl bg-white p-4 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                    style={{ animationDelay: `${Math.min(i * 60, 240)}ms` }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                      <WarningIcon />
                    </span>
                    <p className="text-sm leading-relaxed text-ink-700">{sign}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="animate-fade-up">
              <h2 className="font-display text-xl font-medium text-brand-900">
                How to protect yourself
              </h2>
              <ul className="mt-4 space-y-3">
                {detail.protectYourself.map((tip, i) => (
                  <li
                    key={i}
                    className="animate-fade-up flex gap-3 rounded-xl bg-white p-4 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                    style={{ animationDelay: `${Math.min(i * 60, 240)}ms` }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-900/10 text-brand-900">
                      <CheckIcon />
                    </span>
                    <p className="text-sm leading-relaxed text-ink-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="animate-fade-up">
              <h2 className="font-display text-xl font-medium text-brand-900">
                Has this already happened to you?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {detail.ifItHappened}
              </p>
              <div className="mt-6">
                <Button href="/start-your-claim" variant="secondary">
                  Check your eligibility
                </Button>
              </div>
            </section>
          </div>

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

        <FaqBlock
          heading={`${scam.title} questions`}
          items={detail.faqs}
        />

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
              Other scam types
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherScams.map((other, i) => (
              <Reveal key={other.slug} delay={Math.min(i * 60, 300)}>
                <Link
                  href={`/scams/${other.slug}`}
                  className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]"
                >
                  <other.icon className="h-7 w-7 shrink-0 text-brand-900" />
                  <h3 className="font-display text-lg font-medium text-brand-900">
                    {other.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {other.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-line-100 pt-14">
          <Reveal className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(11,11,13,0.05)] sm:p-10">
            <span className="text-xs font-semibold tracking-wide text-accent-600 uppercase">
              What our clients say
            </span>
            <p className="font-display mt-4 text-[22px] leading-[1.4] font-normal tracking-tight text-brand-900 sm:text-[26px]">
              &ldquo;{detail.testimonial.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-ink-500">
              &mdash; {detail.testimonial.name}, client
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid items-center gap-10 rounded-[28px] bg-brand-950 p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="font-display text-2xl font-medium text-white">
              Think this might be what happened to you?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Start with a free eligibility check, we&apos;ll tell you
              honestly whether there&apos;s a case worth pursuing.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="/how-it-works" variant="ghost">
              How it works
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
