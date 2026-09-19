"use client";

import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SCAM_TYPES } from "@/data/scamTypes";

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path
        d="M2.5 7h9M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScamTypes() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-mist-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[32px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[38px]">
            Scams we help with
          </h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous scam types"
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-100 text-brand-900 transition-colors hover:border-brand-900"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next scam types"
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-100 text-brand-900 transition-colors hover:border-brand-900"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          >
            {SCAM_TYPES.map((scam) => (
              <a
                key={scam.slug}
                href={`/scams/${scam.slug}`}
                className="flex h-[300px] w-[240px] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(11,11,13,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-mist-100 hover:shadow-[0_16px_40px_rgba(11,11,13,0.12)] sm:w-[260px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight font-medium text-brand-900">
                    {scam.title}
                  </h3>
                  <scam.icon className="h-7 w-7 shrink-0 text-brand-900" />
                </div>
                <p className="text-sm leading-relaxed text-ink-500">{scam.description}</p>
              </a>
            ))}

            <a
              href="/how-it-works"
              className="flex h-[300px] w-[240px] shrink-0 snap-start flex-col justify-between rounded-2xl bg-brand-950 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-brand-900 sm:w-[260px]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-brand-950">
                <ArrowIcon />
              </span>
              <div>
                <p className="font-display text-xl leading-tight font-medium text-white">
                  We&apos;re experts in fraud recovery
                </p>
                <p className="mt-3 text-sm font-semibold text-accent-400">
                  Explore all specialisations
                </p>
              </div>
            </a>
          </div>

          <div className="pointer-events-none absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand-950 text-white shadow-[0_4px_16px_rgba(11,11,13,0.25)] sm:hidden">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
