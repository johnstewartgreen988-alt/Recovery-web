import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/complaints",
  title: "Complaints | Regainr",
  description: "How to raise a complaint with Regainr and what happens next.",
});

const SECTIONS = [
  {
    heading: "Our commitment",
    body: "We aim to handle every case honestly and professionally. If something hasn't met your expectations, we want to hear about it.",
  },
  {
    heading: "How to make a complaint",
    body: "You can send us a complaint by emailing hello@regaineradvisory.com or using our Contact page. Please include your name, any case reference details, and a clear description of the issue.",
  },
  {
    heading: "What happens next",
    body: "We aim to acknowledge your complaint within one business day. A senior member of our team will review the details and respond with either a resolution or a clear explanation of next steps.",
  },
  {
    heading: "If you're not satisfied",
    body: "If you remain unsatisfied after our response, you're welcome to request that your complaint be reviewed again by a senior member of our management team. You may also seek independent legal advice at any time.",
  },
  {
    heading: "Contact us",
    body: "Send complaints to hello@regaineradvisory.com, and we'll take it from there.",
  },
];

export default function ComplaintsPage() {
  return (
    <LegalPageLayout
      title="Complaints"
      lastUpdated="September 19, 2026"
      intro="If something's gone wrong, let us know. Here's how we handle complaints."
      sections={SECTIONS}
    />
  );
}
