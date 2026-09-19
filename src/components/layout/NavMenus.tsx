import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { SCAM_TYPES } from "@/data/scamTypes";

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

function ProcessIcon() {
  return (
    <IconBase>
      <circle cx="5" cy="6" r="1.2" fill="currentColor" />
      <path d="M10 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="5" cy="12" r="1.2" fill="currentColor" />
      <path d="M10 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="5" cy="18" r="1.2" fill="currentColor" />
      <path d="M10 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </IconBase>
  );
}

function FeesIcon() {
  return (
    <IconBase>
      <path
        d="M20 12L12 20 4 12V4h8l8 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
    </IconBase>
  );
}

function BuildingIcon() {
  return (
    <IconBase>
      <path
        d="M4 21V4a1 1 0 011-1h6a1 1 0 011 1v17M12 21V9a1 1 0 011-1h6a1 1 0 011 1v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 7h.01M8 11h.01M8 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function TeamIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function ShieldIcon() {
  return (
    <IconBase>
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L14.5 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function StoriesIcon() {
  return (
    <IconBase>
      <path
        d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function FaqIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.5 9a2.5 2.5 0 114 2c-.8.6-1.5 1-1.5 2.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </IconBase>
  );
}

function ArticleIcon() {
  return (
    <IconBase>
      <path
        d="M6 3h9l3 3v15H6V3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 11h6M9 15h6M9 8h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </IconBase>
  );
}

function GuideIcon() {
  return (
    <IconBase>
      <path
        d="M12 6c-1.5-1-3.5-1.5-5.5-1.5S3 5 3 5v14s1.5-.5 3.5-.5S10.5 19.5 12 20m0-14c1.5-1 3.5-1.5 5.5-1.5S21 5 21 5v14s-1.5-.5-3.5-.5S13.5 19.5 12 20m0-14v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

export type SimpleNavItem = {
  title: string;
  description: string;
  href: string;
  icon: () => ReactElement;
};

export const HOW_WE_HELP_ITEMS: SimpleNavItem[] = [
  {
    title: "Our Process",
    description: "How we handle your case, from start to finish",
    href: "/how-it-works",
    icon: ProcessIcon,
  },
  {
    title: "Our Fees",
    description: "What it costs to work with us",
    href: "/fees",
    icon: FeesIcon,
  },
];

export const ABOUT_ITEMS: SimpleNavItem[] = [
  {
    title: "About Us",
    description: "Who we are and why Regainr exists",
    href: "/about",
    icon: BuildingIcon,
  },
  {
    title: "Our Team",
    description: "Meet the people behind your case",
    href: "/team",
    icon: TeamIcon,
  },
  {
    title: "Why Choose Regainr",
    description: "What makes us different",
    href: "/why-choose-regainr",
    icon: ShieldIcon,
  },
];

export const RESOURCES_ITEMS: SimpleNavItem[] = [
  {
    title: "Success Stories",
    description: "Read our recovery case studies",
    href: "/resources/success-stories",
    icon: StoriesIcon,
  },
  {
    title: "FAQs",
    description: "Quick answers to common questions",
    href: "/#faq",
    icon: FaqIcon,
  },
  {
    title: "Articles",
    description: "News and insights from our team",
    href: "/resources/articles",
    icon: ArticleIcon,
  },
  {
    title: "Client Guides",
    description: "Help and guidance for existing clients",
    href: "/resources/client-guides",
    icon: GuideIcon,
  },
];

function DropdownRow({ item }: { item: SimpleNavItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-mist-100"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-100 p-2 text-brand-900">
        <item.icon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-brand-900">{item.title}</span>
        <span className="block text-xs text-ink-500">{item.description}</span>
      </span>
      <span className="shrink-0 text-ink-500">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function SimpleDropdown({ items }: { items: SimpleNavItem[] }) {
  return (
    <div className="w-80 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(11,11,13,0.14)]">
      {items.map((item) => (
        <DropdownRow key={item.title} item={item} />
      ))}
    </div>
  );
}

export function ScamTypesDropdown() {
  return (
    <div className="flex w-[560px] gap-2 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(11,11,13,0.14)] lg:w-[640px]">
      <Link
        href="/how-it-works"
        className="flex w-44 shrink-0 flex-col justify-between rounded-xl bg-brand-950 p-5 transition-colors hover:bg-brand-900"
      >
        <div>
          <p className="font-display text-base font-medium text-white">
            Explore all specialisations
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/60">
            We are experts in a range of fraud types, explore all here.
          </p>
        </div>
        <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-brand-950">
          <ArrowIcon />
        </span>
      </Link>

      <div className="grid flex-1 grid-cols-2 gap-1">
        {SCAM_TYPES.map((scam) => (
          <Link
            key={scam.slug}
            href={`/scams/${scam.slug}`}
            className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-mist-100"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-100 p-1.5 text-brand-900">
              <scam.icon className="h-full w-full" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-brand-900">{scam.title}</span>
              <span className="block text-xs leading-snug text-ink-500">{scam.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
