import Link from "next/link";
import type { CSSProperties } from "react";

function Message() {
  return (
    <>
      Taking on a limited number of new cases this month —{" "}
      <Link
        href="/start-your-claim"
        className="underline underline-offset-2 hover:text-white"
      >
        check your eligibility.
      </Link>
    </>
  );
}

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-brand-950 py-1.5 text-[11px] text-white/85 sm:py-2.5 sm:text-[13px]">
      {/* Mobile: continuous sliding marquee, single line */}
      <div
        className="animate-marquee flex w-max gap-16 px-4 whitespace-nowrap sm:hidden"
        style={{ "--marquee-duration": "20s" } as CSSProperties}
      >
        <span>
          <Message />
        </span>
        <span>
          <Message />
        </span>
      </div>

      {/* Desktop: static, centered, one line */}
      <div className="hidden items-center justify-center px-4 text-center sm:flex">
        <span>
          <Message />
        </span>
      </div>
    </div>
  );
}
