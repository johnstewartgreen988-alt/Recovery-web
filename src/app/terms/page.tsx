import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions | Regainr",
  description: "The terms that govern your use of the Regainr website and our recovery services.",
});

const SECTIONS = [
  {
    heading: "Acceptance of terms",
    body: "By using this website or engaging Regainr's services, you agree to these Terms & Conditions. If you don't agree, please don't use our services.",
  },
  {
    heading: "Our services",
    body: "Regainr is a private fraud and scam recovery consultancy. We help assess, investigate, and pursue the recovery of money lost to scams on behalf of clients who engage us. We are not a bank, law firm, or government agency.",
  },
  {
    heading: "No guaranteed outcome",
    body: "Every case is different, and we cannot guarantee that any money will be recovered. We only take on cases we believe have a realistic chance of success, and we'll always give you an honest assessment before any work begins.",
  },
  {
    heading: "Fees",
    body: "We work on a no-recovery, no-fee basis. If we do not recover any money on your behalf, you owe us nothing for the case work itself. If we do, our fee is a percentage of the amount recovered, agreed with you in writing before work begins. Full details are available on our Fees page.",
  },
  {
    heading: "Your responsibilities",
    body: "You agree to provide accurate and complete information about your case, and to let us know promptly if anything changes. Providing false or misleading information may affect our ability to help you.",
  },
  {
    heading: "Not legal or financial advice",
    body: "General information provided on this website is for informational purposes only and does not constitute legal or financial advice. Where our in-house legal team is directly engaged on your case, the specific terms of that engagement will be set out separately.",
  },
  {
    heading: "Limitation of liability",
    body: "To the fullest extent permitted by law, Regainr is not liable for indirect, incidental, or consequential losses arising from your use of this website or our services.",
  },
  {
    heading: "Termination",
    body: "Either party may end an engagement at any time, subject to any terms agreed at the start of your case.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of the State of Delaware, USA.",
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of our services after changes take effect means you accept the updated terms.",
  },
  {
    heading: "Contact us",
    body: "Questions about these terms can be sent to hello@regaineradvisory.com.",
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="September 19, 2026"
      intro="These terms govern your use of this website and any services you engage us for. Please read them carefully."
      sections={SECTIONS}
    />
  );
}
