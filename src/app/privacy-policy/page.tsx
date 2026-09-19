import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy | Regainr",
  description: "How Regainr collects, uses, and protects your personal information.",
});

const SECTIONS = [
  {
    heading: "Overview",
    body: "This Privacy Policy explains how Regainr (“we”, “us”, “our”) collects, uses, and protects the personal information you share with us when you use this website or engage our services.",
  },
  {
    heading: "Information we collect",
    body: "When you use our eligibility check, contact form, or otherwise get in touch, we may collect: your name, email address, and phone number; details about the scam or situation you describe to us, including amounts, dates, and any documents or messages you choose to share; and basic technical information such as your browser type and IP address, collected automatically as part of standard web server logs.",
  },
  {
    heading: "How we use your information",
    body: "We use the information you provide to assess whether we can realistically help with your case, to contact you about your eligibility check or an active case, and to build and pursue your case, including escalating it with the relevant bank, platform, or authority where you've engaged us to do so. We don't use your information for unrelated marketing without your consent.",
  },
  {
    heading: "How we share your information",
    body: "We do not sell your personal information. We may share relevant details of your case with banks, payment platforms, or authorities as part of pursuing a recovery on your behalf, and only to the extent necessary for that purpose. We may also share information where required by law.",
  },
  {
    heading: "Data retention",
    body: "We retain personal information for as long as necessary to assess or pursue your case, and for a reasonable period afterward in case further action is needed. You can ask us to delete information we hold about you at any time, subject to any legal or case-related reasons we may need to keep it.",
  },
  {
    heading: "Your rights",
    body: "Depending on where you're located, you may have the right to access, correct, or request deletion of the personal information we hold about you. To exercise any of these rights, contact us at hello@regainr.com.",
  },
  {
    heading: "Security",
    body: "We take reasonable technical and organizational measures to protect the information you share with us. No method of transmission or storage is completely secure, and we can't guarantee absolute security.",
  },
  {
    heading: "Children's privacy",
    body: "Our services are intended for adults. We do not knowingly collect personal information from children.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time. The date at the top of this page reflects the most recent revision.",
  },
  {
    heading: "Contact us",
    body: "If you have questions about this policy or how your information is handled, contact us at hello@regainr.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="September 19, 2026"
      intro="Your privacy matters to us. This page explains, in plain language, what information we collect and how we use it."
      sections={SECTIONS}
    />
  );
}
