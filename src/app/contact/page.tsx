import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us | Regainr",
  description: "Get in touch with the Regainr team.",
});

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.4.7 4.7 1.9 6.6L3 29l7.1-2.3a12.5 12.5 0 005.9 1.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3z"
        fill="#25D366"
      />
      <path
        d="M11.9 9.9c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4.1 6.3 5.6 3.1 1.2 3.8 1 4.4 1 .7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5-.4-.2-2.1-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.1-2-2.5-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2.1-.5 0-.7-.1-.2-.8-2.1-1.1-2.8z"
        fill="#fff"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6zM4 6l8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CONTACT_METHODS = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    detail: "Chat with us instantly",
    href: "https://wa.me/17633479682",
  },
  {
    icon: EmailIcon,
    title: "Email",
    detail: "hello@regaineradvisory.com",
    href: "mailto:hello@regaineradvisory.com",
  },
];

const inputClasses =
  "w-full rounded-xl border border-line-100 bg-mist-50 px-4 py-3 text-sm text-brand-900 placeholder:text-ink-500/60 focus:border-brand-900 focus:bg-white focus:outline-none";

export default function ContactPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Contact Us</span>
        </nav>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              Get in touch
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              Have a question, or already working with us? Reach out
              through whichever channel is easiest.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/contact-us.jpg"
              alt="A Regainr team member greeting a client with a handshake"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[320px_1fr]">
          <Reveal className="flex flex-col gap-3">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-shadow hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900">
                  <method.icon />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-900">
                    {method.title}
                  </span>
                  <span className="block text-xs text-ink-500">
                    {method.detail}
                  </span>
                </span>
              </a>
            ))}

            <div className="mt-2 rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(11,11,13,0.05)]">
              <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                Registered address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                1201 Corporate Drive, Suite 400
                <br />
                Wilmington, DE 19801
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
          <form
            action="/api/contact"
            method="POST"
            className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(11,11,13,0.08)] sm:p-10"
          >
            <h2 className="font-display text-xl font-medium text-brand-900">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              We&apos;ll get back to you within one business day.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-brand-900"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-brand-900"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-brand-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-accent-500 py-3 pr-3 pl-6 text-[15px] font-semibold tracking-tight whitespace-nowrap text-brand-950 transition-colors duration-150 hover:bg-accent-400"
            >
              Send message
            </button>
          </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
