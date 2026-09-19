import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  body: string;
  list?: string[];
};

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-3xl px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">{title}</span>
        </nav>

        <Reveal className="mt-8">
          <h1 className="font-display text-[32px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[40px]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          {intro && (
            <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
              {intro}
            </p>
          )}
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 200)}>
              <section>
                <h2 className="font-display text-xl font-medium text-brand-900">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  {section.body}
                </p>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, j) => (
                      <li
                        key={j}
                        className="rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-[0_4px_20px_rgba(11,11,13,0.05)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
