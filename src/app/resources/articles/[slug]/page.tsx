import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ARTICLES } from "@/data/articles";
import { pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return {};

  return pageMetadata({
    title: `${article.title} | Regainr`,
    description: article.dek,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) notFound();

  const moreArticles = ARTICLES.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/resources/articles" className="hover:text-brand-900">
            Articles
          </Link>
          <span>/</span>
          <span className="text-brand-900">{article.title}</span>
        </nav>

        <Reveal className="mx-auto mt-8 max-w-2xl">
          <span className="inline-block rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
            {article.category}
          </span>
          <h1 className="font-display mt-4 text-[32px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[40px]">
            {article.title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            {article.dek}
          </p>
          <p className="mt-4 text-sm text-ink-500">
            {article.publishedDate} · {article.readTime}
          </p>
        </Reveal>

        {article.image && (
          <Reveal delay={100} className="relative mx-auto mt-8 aspect-[16/9] max-w-2xl overflow-hidden rounded-[28px]">
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 672px, 100vw"
              className="object-cover"
            />
          </Reveal>
        )}

        <Reveal delay={150} className="mx-auto mt-12 max-w-2xl space-y-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="font-display text-xl font-medium text-brand-900">
                  {section.heading}
                </h2>
              )}
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {section.body}
              </p>
            </section>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-[28px] bg-brand-950 p-8 sm:p-10">
          <p className="font-display text-xl font-medium text-white">
            Think this might apply to you?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            A free eligibility check takes a couple of minutes, and we&apos;ll
            tell you honestly whether there&apos;s a case worth pursuing.
          </p>
          <div className="mt-5">
            <Button href="/start-your-claim" variant="primary">
              Check eligibility
            </Button>
          </div>
        </Reveal>

        {moreArticles.length > 0 && (
          <div className="mt-20 border-t border-line-100 pt-14">
            <Reveal>
              <h2 className="font-display text-[26px] leading-[1.1] font-normal tracking-tight text-brand-900 sm:text-[32px]">
                More articles
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {moreArticles.map((item, i) => (
                <Reveal key={item.slug} delay={i * 80}>
                  <Link
                    href={`/resources/articles/${item.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]"
                  >
                    <span className="inline-block w-fit rounded-full bg-mist-100 px-3 py-1 text-xs font-bold tracking-wide text-brand-900 uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg leading-snug font-medium text-brand-900 group-hover:text-accent-600">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">
                      {item.dek}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
