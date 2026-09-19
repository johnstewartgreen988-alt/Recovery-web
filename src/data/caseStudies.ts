export type CaseStudy = {
  slug: string;
  category: string;
  headline: string;
  summary: string;
  /** Real photo path, or null to show a placeholder gradient instead. */
  image: string | null;
  href: string;
  /** Whether this shows in the homepage "Recent recoveries" grid. */
  featured: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cryptocurrency-scam",
    category: "Cryptocurrency Scam",
    headline: "$418,000 recovered for a cryptocurrency scam victim",
    summary:
      "Brad was introduced to a fake trading platform by someone posing as a professional broker on Instagram. We helped him recover $418,000 of the $550,000 he lost.",
    image: "/investment.jpg",
    href: "/resources/success-stories/cryptocurrency-scam",
    featured: true,
  },
  {
    slug: "romance-scam-recovery",
    category: "Romance Scam",
    headline: "$43,000 recovered for a romance scam victim",
    summary:
      "Christine was targeted on Instagram by someone posing as an online fitness personality. We helped her recover $43,000 of the $50,000 she lost.",
    image: "/romance.jpg",
    href: "/resources/success-stories/romance-scam-recovery",
    featured: true,
  },
  {
    slug: "job-task-scam",
    category: "Job / Task Scam",
    headline: "$14,600 recovered for a job/task scam victim",
    summary:
      "Tyler was offered a work-from-home 'product boosting' role through a messaging app, then asked to pay refundable deposits to unlock his earnings. We helped him recover $14,600 of the $18,200 he lost.",
    image: "/job.jpg",
    href: "/resources/success-stories/job-task-scam",
    featured: true,
  },
  {
    slug: "investment-scam",
    category: "Investment Scam",
    headline: "$86,500 recovered for an investment scam victim",
    summary:
      "Elena was invited into a private trading group promising guided crypto signals from a 'senior analyst.' We helped her recover the full $86,500 she lost.",
    image: "/investment-scam.jpg",
    href: "/resources/success-stories/investment-scam",
    featured: false,
  },
];
