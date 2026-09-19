import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ARTICLES } from "@/data/articles";

export const metadata = {
  title: "Articles | Regainr",
  description:
    "Insights and guidance to help you recognize scams, protect yourself, and know what to do if it's already happened.",
};

export default function ArticlesPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Articles</span>
        </nav>

        <Reveal className="mt-8 max-w-2xl">
          <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
            Articles
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Insights and guidance to help you recognize scams, protect
            yourself, and know exactly what to do if it&apos;s already
            happened.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={Math.min(i * 80, 240)}>
              <Link
                href={`/resources/articles/${article.slug}`}
                className="group flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)] sm:p-8"
              >
                {article.image && (
                  <div className="relative -mx-6 -mt-6 aspect-[16/9] overflow-hidden rounded-t-2xl sm:-mx-8 sm:-mt-8">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <span className="inline-block w-fit rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
                  {article.category}
                </span>
                <h2 className="font-display text-xl leading-snug font-medium text-brand-900 group-hover:text-accent-600">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-500">
                  {article.dek}
                </p>
                <p className="mt-2 text-xs text-ink-500">
                  {article.publishedDate} · {article.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
