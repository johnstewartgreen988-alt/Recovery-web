import Image from "next/image";
import Link from "next/link";

const LINK_COLUMNS = [
  {
    heading: "How We Help",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Our Fees", href: "/fees" },
      { label: "Start Your Case", href: "/start-your-claim" },
    ],
  },
  {
    heading: "Scam Types",
    links: [
      { label: "Investment Scam", href: "/scams/investment-scam" },
      { label: "Romance Scam", href: "/scams/romance-scam" },
      { label: "Job / Task Scam", href: "/scams/job-task-scam" },
      { label: "All Scam Types", href: "/how-it-works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "Articles", href: "/resources/articles" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQs", href: "/#faq" },
      { label: "Client Guides", href: "/resources/client-guides" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookie Notice", href: "#" },
  { label: "Complaints", href: "#" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/logo-mark-light.png"
              alt="Regainr"
              width={2380}
              height={706}
              className="h-9 w-auto sm:h-10"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Independent fraud and scam recovery specialists, helping
              people build the strongest possible case to pursue what they
              lost.
            </p>
            <a
              href="tel:+15550100142"
              className="text-sm font-semibold text-white/80 hover:text-white"
            >
              +1 (555) 010-0142
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {LINK_COLUMNS.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-md text-xs leading-relaxed text-white/40">
            Regainr is a private fraud and scam recovery consultancy with
            an in-house legal team supporting every case. We are not a
            bank or government agency.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              &copy; {year} Regainr. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/40 underline-offset-2 hover:text-white/70 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
