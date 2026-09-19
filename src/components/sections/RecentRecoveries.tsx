import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/data/caseStudies";

function ArrowUpRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 11l8-8M5 3h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RecentRecoveries() {
  const featured = CASE_STUDIES.filter((item) => item.featured);

  return (
    <section className="bg-mist-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-[32px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[38px]">
            Recent recoveries
          </h2>
          <a
            href="/resources/success-stories"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-900"
          >
            Success Stories
            <ArrowUpRightIcon />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 100} className="h-full">
              <CaseStudyCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
