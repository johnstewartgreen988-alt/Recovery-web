"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  ABOUT_ITEMS,
  HOW_WE_HELP_ITEMS,
  RESOURCES_ITEMS,
  ScamTypesDropdown,
  SimpleDropdown,
} from "@/components/layout/NavMenus";
import { MobileMenu, MOBILE_MENU_ID } from "@/components/layout/MobileMenu";

const NAV_ITEMS = [
  { label: "How we help", panel: <SimpleDropdown items={HOW_WE_HELP_ITEMS} /> },
  { label: "Scam types", panel: <ScamTypesDropdown /> },
  { label: "Group Action", href: "/group-action" },
  { label: "About us", panel: <SimpleDropdown items={ABOUT_ITEMS} /> },
  { label: "Resources", panel: <SimpleDropdown items={RESOURCES_ITEMS} /> },
];

function ChevronDownIcon() {
  return (
    <svg width="9" height="5" viewBox="0 0 10 6" fill="none" aria-hidden="true">
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

function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M3 6.5h16M3 11h16M3 15.5h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M5 5l12 12M17 5L5 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`group/menu sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-line-100 bg-mist-50/70 shadow-[0_1px_0_rgba(11,11,13,0.06)] backdrop-blur-md"
          : isHomepage
            ? "border-transparent bg-mist-50"
            : "border-line-100 bg-mist-50"
      }`}
    >
      {/* Drives the mobile menu open/closed via CSS only — no JS required. */}
      <input type="checkbox" id={MOBILE_MENU_ID} className="peer sr-only" />

      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-5 lg:h-[80px] lg:gap-4 lg:px-8">
        <Link href="/" className="flex shrink-0 flex-col items-start gap-0.5">
          <Image
            src="/logo-mark-v2.png"
            alt="Regainr"
            width={2380}
            height={706}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="pl-0.5 text-[8px] font-semibold tracking-[0.1em] text-ink-500 uppercase sm:text-[9px]">
            Fraud Recovery Experts
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) =>
            item.panel ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 py-2 text-sm font-medium whitespace-nowrap text-ink-900 transition-colors hover:text-brand-700"
                >
                  {item.label}
                  <span className="text-ink-500 transition-transform duration-200 group-hover:-rotate-180">
                    <ChevronDownIcon />
                  </span>
                </button>

                <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.panel}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-ink-900 transition-colors hover:text-brand-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:gap-5">
          <div className="hidden lg:block">
            <Button href="/start-your-claim" variant="primary">
              Start your case
            </Button>
          </div>
          <label
            htmlFor={MOBILE_MENU_ID}
            aria-label="Open menu"
            className="-mr-1.5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-brand-900 hover:bg-mist-100 lg:hidden"
          >
            <span className="group-has-[#mobile-menu-toggle:checked]/menu:hidden">
              <MenuIcon />
            </span>
            <span className="hidden group-has-[#mobile-menu-toggle:checked]/menu:block">
              <CloseIcon />
            </span>
          </label>
        </div>
      </div>

      <MobileMenu />
    </header>
  );
}
