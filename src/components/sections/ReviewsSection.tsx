"use client";

import { useRef, useState } from "react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const REVIEWS = [
  {
    name: "Nora S.",
    timeAgo: "2 weeks ago",
    title: "Thought I'd never see that money again",
    quote:
      "I was skeptical after being scammed once already, but the team was upfront about what to expect from day one. They kept me updated constantly and never overpromised.",
  },
  {
    name: "Peter V.",
    timeAgo: "1 month ago",
    title: "Professional, patient, and honest",
    quote:
      "They didn't sugarcoat anything and told me exactly what was realistic. The process took longer than I hoped, but they stuck with it and got results.",
  },
  {
    name: "Matt B.",
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

function IntroContent({ align }: { align: "center" | "left" }) {
  const isLeft = align === "left";
  return (
    <div className={`flex min-w-0 flex-col items-center gap-8 text-center ${isLeft ? "lg:items-start lg:text-left" : ""}`}>
      <div>
        <span className="text-xs font-semibold tracking-wide text-accent-500 uppercase">
          What our clients say
        </span>
        <h2 className="font-display mt-3 text-[26px] leading-[1.3] font-normal tracking-tight text-white sm:text-[30px]">
          &ldquo;They kept me updated constantly and never overpromised.&rdquo;
        </h2>
        <p className="mt-3 text-sm font-semibold text-white/70">
          &mdash; Nora S., client
        </p>
        <p className={`mt-6 max-w-sm text-white/70 ${isLeft ? "mx-auto lg:mx-0" : "mx-auto"}`}>
          We&apos;ve helped over{" "}
          <Counter to={2500} suffix=" people" className="font-semibold text-accent-400" />{" "}
          recover{" "}
          <Counter to={120} prefix="$" suffix=" million" className="font-semibold text-accent-400" />{" "}
          in stolen funds.
        </p>
      </div>

      <div className={`flex w-fit flex-col items-center gap-2 rounded-2xl bg-white/5 px-5 py-4 ${isLeft ? "lg:items-start" : ""}`}>
        <span className="text-sm font-semibold text-white">Excellent</span>
        <StarRow />
        <span className="text-xs text-white/50">
          Based on{" "}
          <span className="underline underline-offset-2">1,286 client reviews</span>
        </span>
      </div>
    </div>
  );
}

function ReviewCardBody({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <>
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
      <p className="mt-2 text-sm leading-relaxed text-white/60">{review.quote}</p>
    </>
  );
}

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const mobileStageRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleMobileScroll = () => {
    const el = mobileStageRef.current;
    if (!el || el.clientWidth === 0) return;
    setActiveSlide(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goToSlide = (index: number) => {
    const el = mobileStageRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-mist-50 py-5 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Reveal className="min-w-0 overflow-hidden rounded-[28px] bg-brand-950">
          {/* Mobile: one slide at a time in the same spot — intro card
              swipes away to reveal each review card in turn, native
              CSS scroll-snap drives the swipe so it works with no JS;
              only the dot indicators are JS-enhanced (decorative) */}
          <div className="lg:hidden">
            <div
              ref={mobileStageRef}
              onScroll={handleMobileScroll}
              className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            >
              <div className="w-full shrink-0 snap-start px-6 pt-12 pb-8 sm:px-10 sm:pt-14">
                <IntroContent align="center" />
              </div>
              {REVIEWS.map((review, i) => (
                <div key={i} className="w-full shrink-0 snap-start px-6 pt-12 pb-8 sm:px-10 sm:pt-14">
                  <ReviewCardBody review={review} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 pb-10">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => goToSlide(i + 1)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeSlide === i + 1 ? "bg-accent-500" : "bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: unchanged — left column fixed, right column is a
              multi-card strip with arrow controls */}
          <div className="hidden min-w-0 gap-12 lg:grid lg:grid-cols-[1fr_1.3fr] lg:px-16 lg:py-16">
            <IntroContent align="left" />

            <div className="relative min-w-0">
              <div
                ref={scrollerRef}
                className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
              >
                {REVIEWS.map((review, i) => (
                  <div
                    key={i}
                    className="w-[calc(50%-8px)] shrink-0 snap-start rounded-2xl bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10"
                  >
                    <ReviewCardBody review={review} />
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
