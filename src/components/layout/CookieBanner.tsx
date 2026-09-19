import Link from "next/link";
import { dismissCookieBanner } from "@/lib/actions";

/**
 * Dismiss is a real HTML form submission to a Server Action, not client
 * JS/React state — Next.js progressively enhances this to work even if
 * hydration never runs on a device, since it's a plain POST under the hood.
 * Persistence is a real HTTP cookie read server-side in the root layout
 * (not localStorage), so "Got it" sticks across page loads and visits.
 * This does mean every route renders dynamically instead of statically,
 * since the layout now depends on a per-request cookie.
 */
export function CookieBanner({ dismissed }: { dismissed: boolean }) {
  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 sm:px-6">
      <div className="flex w-full max-w-3xl flex-col items-start gap-4 rounded-2xl bg-brand-950 p-5 shadow-[0_16px_40px_rgba(11,11,13,0.25)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm leading-relaxed text-white/80">
          This site doesn&apos;t use tracking cookies. See our{" "}
          <Link
            href="/cookie-notice"
            className="font-semibold text-white underline underline-offset-2 hover:text-white/80"
          >
            Cookie Notice
          </Link>{" "}
          for details.
        </p>
        <form action={dismissCookieBanner}>
          <button
            type="submit"
            className="w-full shrink-0 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400 sm:w-auto"
          >
            Got it
          </button>
        </form>
      </div>
    </div>
  );
}
