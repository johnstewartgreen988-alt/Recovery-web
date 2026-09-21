import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/contact/thank-you",
  title: "Thank You | Regainr",
  description: "We've received your message.",
  noIndex: true,
});

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5l5 5L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactThankYouPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[640px] px-5 pt-16 pb-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-brand-950">
          <CheckIcon />
        </div>

        <h1 className="font-display mt-6 text-[32px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[40px]">
          Message sent
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
          Thanks for reaching out. We&apos;ve received your message and
          we&apos;ll get back to you within one business day.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-900 hover:text-accent-600"
          >
            Back to home
          </Link>
          <Button href="/start-your-claim" variant="secondary">
            Check your eligibility
          </Button>
        </div>
      </div>
    </div>
  );
}
