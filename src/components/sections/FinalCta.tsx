import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="bg-mist-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-ink-500">See where you stand</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display mt-4 text-[30px] leading-[1.3] font-normal tracking-tight text-brand-900 sm:text-[38px]">
            We&apos;ve already helped over{" "}
            <span className="inline-block rounded-md bg-accent-400/40 px-1.5">
              <Counter to={2500} suffix=" people" />
            </span>{" "}
            recover{" "}
            <span className="inline-block rounded-md bg-[rgba(143,168,136,0.4)] px-1.5">
              <Counter to={120} prefix="$" suffix=" million" />
            </span>{" "}
            — and we&apos;re ready to help you too.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex justify-center">
            <Button href="/start-your-claim" variant="primary">
              Start your case
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
