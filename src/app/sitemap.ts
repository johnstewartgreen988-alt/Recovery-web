import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SCAM_TYPES } from "@/data/scamTypes";
import { ARTICLES } from "@/data/articles";
import { CASE_STUDIES } from "@/data/caseStudies";

const STATIC_ROUTES = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/fees", priority: 0.7 },
  { path: "/group-action", priority: 0.6 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/resources/articles", priority: 0.6 },
  { path: "/resources/client-guides", priority: 0.5 },
  { path: "/resources/success-stories", priority: 0.7 },
  { path: "/start-your-claim", priority: 0.9 },
  { path: "/team", priority: 0.5 },
  { path: "/why-choose-regainr", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookie-notice", priority: 0.3 },
  { path: "/complaints", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const scamEntries = SCAM_TYPES.map((scam) => ({
    url: `${SITE_URL}/scams/${scam.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleEntries = ARTICLES.map((article) => ({
    url: `${SITE_URL}/resources/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyEntries = CASE_STUDIES.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...scamEntries, ...articleEntries, ...caseStudyEntries];
}
