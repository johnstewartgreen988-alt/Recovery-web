import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 0.5l1.9 4 4.4.6-3.2 3.1.8 4.4L7 10.5 3.1 12.6l.8-4.4L.7 5.1l4.4-.6L7 .5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-1 pb-5 sm:px-6 sm:pt-2 sm:pb-6 lg:px-8 lg:pt-2 lg:pb-8">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Left: message panel */}
          <div className="flex flex-col items-center gap-6 rounded-[28px] bg-brand-950 px-6 pt-12 pb-14 text-center sm:px-10 sm:pt-14 lg:items-start lg:px-16 lg:pt-16 lg:pb-16 lg:text-left">
            <div
              className="animate-hero-in flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[14px] text-white/90 lg:flex-nowrap lg:justify-start"
              style={{ animationDelay: "0ms" }}
            >
              <span className="whitespace-nowrap font-semibold text-white">Excellent</span>
              <span className="whitespace-nowrap text-white/70">4.8 out of 5</span>
              <span className="flex items-center gap-0.5 text-accent-400">
                <StarIcon />
              </span>
              <span className="whitespace-nowrap text-white/50">average client rating</span>
            </div>

            <h1
              className="animate-hero-in font-display max-w-xl text-[38px] leading-[1.1] font-normal tracking-tight text-white sm:text-[52px] lg:text-[60px] lg:leading-[1.08]"
              style={{ animationDelay: "80ms" }}
            >
              Money lost
              <br />
              to a scam?
            </h1>

            <p
              className="animate-hero-in max-w-md text-[17px] leading-relaxed text-white/75 sm:text-[18px]"
              style={{ animationDelay: "160ms" }}
            >
              We&apos;ve helped over{" "}
              <Counter to={2500} suffix=" people" className="font-semibold text-accent-400" />{" "}
              pursue the return of{" "}
              <Counter to={120} prefix="$" suffix=" million" className="font-semibold text-accent-400" />{" "}
              in stolen funds.
            </p>

            <div
              className="animate-hero-in mt-4 flex items-center"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="/start-your-claim" variant="ghost" className="!rounded-none">
                Check eligibility
              </Button>
            </div>
          </div>

          {/* Right: visual panel */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] lg:min-h-[600px]">
            <Image
              src="/hero.jpg"
              alt="A specialist speaking with a team during a case discussion"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/95 sm:h-48 sm:w-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
