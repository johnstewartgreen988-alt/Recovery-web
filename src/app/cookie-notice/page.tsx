import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/cookie-notice",
  title: "Cookie Notice | Regainr",
  description: "How Regainr uses cookies and local storage on this website.",
});

const SECTIONS = [
  {
    heading: "What are cookies",
    body: "Cookies are small text files placed on your device by websites you visit. They're commonly used to make sites work properly, remember preferences, or track usage.",
  },
  {
    heading: "How we use cookies and local storage",
    body: "This website does not currently use tracking or advertising cookies. We use a small amount of local browser storage to remember simple preferences, such as whether you've dismissed a pop-up message. This information stays on your own device and is not shared with us or any third party.",
  },
  {
    heading: "Third-party links",
    body: "Pages on this site may link to third-party services, like WhatsApp, which have their own cookie and privacy practices outside of our control.",
  },
  {
    heading: "Managing cookies",
    body: "Most browsers let you control or clear cookies and site data through their settings. Since we don't currently use tracking cookies, there's nothing specific from Regainr to opt out of, but you're welcome to manage your browser's settings as you prefer.",
  },
  {
    heading: "Changes to this notice",
    body: "If our use of cookies changes in the future, for example if we add analytics, we'll update this page to reflect that.",
  },
];

export default function CookieNoticePage() {
  return (
    <LegalPageLayout
      title="Cookie Notice"
      lastUpdated="September 19, 2026"
      intro="This notice explains how cookies and similar technologies are used on this website."
      sections={SECTIONS}
    />
  );
}
