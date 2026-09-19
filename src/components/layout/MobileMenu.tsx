import Link from "next/link";
import { SCAM_TYPES } from "@/data/scamTypes";
import {
  ABOUT_ITEMS,
  HOW_WE_HELP_ITEMS,
  RESOURCES_ITEMS,
  type SimpleNavItem,
} from "@/components/layout/NavMenus";
import { Button } from "@/components/ui/Button";

export const MOBILE_MENU_ID = "mobile-menu-toggle";

function ChevronDownIcon() {
  return (
    <svg width="11" height="7" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionGroup({ label, items }: { label: string; items: SimpleNavItem[] }) {
  return (
    <details className="group border-b border-line-100 py-1">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
        {label}
        <span className="text-ink-500 transition-transform duration-200 group-open:rotate-180">
          <ChevronDownIcon />
        </span>
      </summary>
      <div className="flex flex-col gap-0.5 pb-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-ink-700 hover:bg-mist-100"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-100 p-1.5 text-brand-900">
              <item.icon />
            </span>
            {item.title}
          </Link>
        ))}
      </div>
    </details>
  );
}

/**
 * Pure CSS/HTML open-close (no JavaScript): the hamburger/close icon in
 * SiteHeader is a <label htmlFor={MOBILE_MENU_ID}>, and this panel's
 * open/closed height is driven entirely by the checkbox's :checked state
 * via Tailwind's peer-checked variant (grid-template-rows 0fr -> 1fr is a
 * pure-CSS trick for animating from/to auto height). This guarantees the
 * menu works even if client JS fails to hydrate on a given device/browser.
 */
export function MobileMenu() {
  return (
    <div className="absolute inset-x-0 top-full z-[60] hidden grid-rows-[0fr] bg-mist-50 shadow-[0_16px_40px_rgba(11,11,13,0.14)] transition-[grid-template-rows] duration-300 ease-out peer-checked:grid peer-checked:grid-rows-[1fr] lg:hidden">
      <div className="min-h-0 overflow-hidden">
        <nav className="max-h-[70vh] overflow-y-auto px-5 py-3">
          <AccordionGroup label="How we help" items={HOW_WE_HELP_ITEMS} />

          <details className="group border-b border-line-100 py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
              Scam types
              <span className="text-ink-500 transition-transform duration-200 group-open:rotate-180">
                <ChevronDownIcon />
              </span>
            </summary>
            <div className="flex flex-col gap-0.5 pb-3">
              {SCAM_TYPES.map((scam) => (
                <Link
                  key={scam.slug}
                  href={`/scams/${scam.slug}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-ink-700 hover:bg-mist-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-100 p-1.5 text-brand-900">
                    <scam.icon className="h-full w-full" />
                  </span>
                  {scam.title}
                </Link>
              ))}
              <Link
                href="/how-it-works"
                className="mt-1 flex items-center gap-1.5 rounded-lg px-2 py-2.5 text-sm font-semibold text-accent-600 hover:bg-mist-100"
              >
                Explore all specialisations
              </Link>
            </div>
          </details>

          <Link
            href="/group-action"
            className="block border-b border-line-100 py-3 text-base font-semibold text-brand-900"
          >
            Group Action
          </Link>

          <AccordionGroup label="About us" items={ABOUT_ITEMS} />
          <AccordionGroup label="Resources" items={RESOURCES_ITEMS} />
        </nav>

        <div className="border-t border-line-100 px-5 py-5">
          <Button href="/start-your-claim" variant="primary" className="w-full">
            Start your case
          </Button>
        </div>
      </div>
    </div>
  );
}
