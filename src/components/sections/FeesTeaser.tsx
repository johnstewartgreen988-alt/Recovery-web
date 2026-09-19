import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeesTeaser() {
  return (
    <section className="bg-mist-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-[4/5]">
            <Image
              src="/final.jpg"
              alt="Two colleagues reviewing a case together on a laptop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <p className="font-display text-[26px] leading-snug font-normal text-brand-900 sm:text-[32px]">
              We work on a simple no-recovery, no-fee basis, so you only
              pay if we actually recover money on your behalf.
            </p>
            <p className="text-sm text-ink-500">
              A percentage-based fee, agreed upfront, with nothing to pay
              unless we succeed.
            </p>
            <div>
              <Button href="/fees" variant="secondary">
                Our fees
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
