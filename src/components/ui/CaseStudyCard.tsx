import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

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

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-2xl">
        {item.image ? (
          <>
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-950" />
        )}

        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
          {item.category}
        </span>
        <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
          <ArrowUpRightIcon />
        </span>
      </div>

      <div className="relative -mt-10 mx-4 flex flex-1 flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(11,11,13,0.08)] transition-shadow duration-300 group-hover:shadow-[0_16px_40px_rgba(11,11,13,0.14)]">
        <h3 className="font-display line-clamp-2 text-lg leading-snug font-semibold text-brand-900">
          {item.headline}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-500">
          {item.summary}
        </p>
        <a
          href={item.href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-900 hover:text-accent-600"
        >
          Read the full case
          <ArrowUpRightIcon />
        </a>
      </div>
    </article>
  );
}
