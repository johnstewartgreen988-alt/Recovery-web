"use client";

import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const REVIEWS = [
  {
    name: "Rachel M.",
    timeAgo: "2 weeks ago",
    title: "Thought I'd never see that money again",
    quote:
      "I was skeptical after being scammed once already, but the team was upfront about what to expect from day one. They kept me updated constantly and never overpromised.",
  },
  {
    name: "James O.",
    timeAgo: "1 month ago",
    title: "Professional, patient, and honest",
    quote:
      "They didn't sugarcoat anything and told me exactly what was realistic. The process took longer than I hoped, but they stuck with it and got results.",
  },
  {
    name: "Priya K.",
    timeAgo: "3 weeks ago",
    title: "Finally, someone who explained things clearly",
    quote:
      "After weeks of getting nowhere with my bank on my own, Regainr took over and knew exactly which questions to ask. Huge weight off my shoulders.",
  },
];

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 0.5l1.9 4 4.4.6-3.2 3.1.8 4.4L7 10.5 3.1 12.6l.8-4.4L.7 5.1l4.4-.6L7 .5z" />
    </svg>
  );
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-accent-500">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/50">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="6" fill="currentColor" opacity="0.3" />
        <path
          d="M3.5 6l1.6 1.6L8.5 4"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Verified
    </span>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
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

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-mist-50 py-5 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal className="grid min-w-0 gap-10 rounded-[28px] bg-brand-950 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_1.3fr] lg:gap-12 lg:px-16 lg:py-16">
          {/* Left: heading, stat, summary */}
          <div className="flex min-w-0 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <div>
              <h2 className="font-display text-[32px] leading-[1.15] font-normal tracking-tight text-white sm:text-[38px]">
                Rated <span className="text-accent-500">Excellent</span> on{" "}
                <span className="text-accent-500">Trustpilot</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-white/70 lg:mx-0">
                We&apos;ve helped over{" "}
                <Counter to={2500} suffix=" people" className="font-semibold text-accent-400" />{" "}
                recover{" "}
                <Counter to={120} prefix="$" suffix=" million" className="font-semibold text-accent-400" />{" "}
                in stolen funds.
              </p>
            </div>

            <div className="flex w-fit flex-col items-center gap-2 rounded-2xl bg-white/5 px-5 py-4 lg:items-start">
              <span className="text-sm font-semibold text-white">Excellent</span>
              <StarRow />
              <span className="text-xs text-white/50">
                Based on{" "}
                <span className="underline underline-offset-2">1,286 reviews</span>
              </span>
              <span className="text-xs font-semibold text-white/40">
                Trustpilot
              </span>
            </div>
          </div>

          {/* Right: review cards — desktop only, matching the reference's mobile layout */}
          <div className="relative hidden min-w-0 lg:block">
            <div
              ref={scrollerRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
            >
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="w-[85%] shrink-0 snap-start rounded-2xl bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10 sm:w-[70%] lg:w-[calc(50%-8px)]"
                >
                  <div className="flex items-center justify-between">
                    <StarRow />
                    <VerifiedBadge />
                  </div>
                  <p className="mt-3 text-sm text-white/50">
                    <span className="font-semibold text-white/80">{review.name}</span>
                    {", "}
                    {review.timeAgo}
                  </p>
                  <p className="font-display mt-3 text-base font-semibold text-white">
                    {review.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {review.quote}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => scroll("left")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => scroll("right")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
