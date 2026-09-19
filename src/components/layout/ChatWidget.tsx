function ChatBubbleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16v11H8l-4 4V5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SmallCloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const CHAT_WIDGET_ID = "chat-widget-toggle";
const NUDGE_DISMISS_ID = "chat-nudge-dismiss";

/**
 * Pure CSS/HTML open-close (no JavaScript) — a hidden checkbox + <label>
 * drives visibility via peer-checked, so this can't silently fail to open
 * on a device where client JS doesn't hydrate.
 *
 * The "need help" nudge below is revealed on scroll via a CSS
 * animation-timeline (see .chat-nudge in globals.css), not a React scroll
 * listener, for the same reliability reason — it previously used a
 * useEffect scroll handler and silently never appeared on mobile because
 * that device's hydration doesn't reliably run. Its dismiss (X) is a
 * second checkbox/label pair, same pattern as the panel toggle.
 */
export function ChatWidget() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <input type="checkbox" id={CHAT_WIDGET_ID} className="peer/panel sr-only" />
      <input type="checkbox" id={NUDGE_DISMISS_ID} className="peer/dismiss sr-only" />

      <div className="chat-nudge flex max-w-[210px] items-start gap-2 rounded-2xl bg-white py-3 pr-3 pl-4 shadow-[0_16px_40px_rgba(11,11,13,0.18)] peer-checked/panel:hidden peer-checked/dismiss:hidden">
        <label
          htmlFor={CHAT_WIDGET_ID}
          className="flex-1 cursor-pointer text-sm font-medium text-brand-900"
        >
          Need help? Talk to us.
        </label>
        <label
          htmlFor={NUDGE_DISMISS_ID}
          aria-label="Dismiss"
          className="mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center text-ink-400 hover:text-ink-700"
        >
          <SmallCloseIcon />
        </label>
      </div>

      <div className="hidden w-64 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(11,11,13,0.18)] peer-checked/panel:block">
        <a
          href="https://wa.me/17633479682"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-mist-100"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100">
            <WhatsAppIcon />
          </span>
          <span>
            <span className="block text-sm font-semibold text-brand-900">
              WhatsApp
            </span>
            <span className="block text-xs text-ink-500">Chat with us instantly</span>
          </span>
        </a>
        <a
          href="mailto:hello@regainr.com"
          className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-mist-100"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900">
            <EmailIcon />
          </span>
          <span>
            <span className="block text-sm font-semibold text-brand-900">
              Email
            </span>
            <span className="block text-xs text-ink-500">Send us a message</span>
          </span>
        </a>
      </div>

      <label
        htmlFor={CHAT_WIDGET_ID}
        aria-label="Open contact options"
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-950 text-white shadow-[0_8px_24px_rgba(11,11,13,0.3)] transition-transform duration-200 hover:scale-105 peer-checked/panel:[&_.chat-icon]:hidden peer-checked/panel:[&_.close-icon]:block peer-checked/panel:[&_.notif-dot]:hidden"
      >
        <span className="chat-icon">
          <ChatBubbleIcon />
        </span>
        <span className="close-icon hidden">
          <CloseIcon />
        </span>
        <span className="notif-dot absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent-500 ring-2 ring-mist-50" />
      </label>
    </div>
  );
}
