import type { ReactNode } from "react";

function iconWrapper(path: ReactNode) {
  return function Icon({ className = "" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {path}
      </svg>
    );
  };
}

export const SCAM_TYPES = [
  {
    slug: "investment-scam",
    title: "Investment Scam",
    description:
      "Fake trading platforms and schemes promising returns that are too good to be true.",
    icon: iconWrapper(
      <path
        d="M5 21l5-6 4 3 6-9M20 9v5M20 9h-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    slug: "romance-scam",
    title: "Romance Scam",
    description: "A fabricated online relationship used to build trust before asking for money.",
    icon: iconWrapper(
      <path
        d="M12 20s-7-4.35-9.3-8.7C1.2 8.2 2.8 5 6 5c1.8 0 3.2 1 4 2.3M12 20s7-4.35 9.3-8.7C22.8 8.2 21.2 5 18 5c-1.5 0-2.7.7-3.5 1.7L13 9l1.5 2-3 3 1.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    slug: "job-task-scam",
    title: "Job / Task Scam",
    description: "Messages offering paid work from home that ask you to pay in before you're paid out.",
    icon: iconWrapper(
      <path
        d="M4 8h16v11H4V8zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M9 13l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    slug: "safe-account-scam",
    title: "Safe Account Scam",
    description: "A caller posing as your bank convinces you to move money to a 'safe' account.",
    icon: iconWrapper(
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L14.5 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    slug: "impersonation-scam",
    title: "Impersonation Scam",
    description: "Fraudsters posing as a trusted authority to pressure you into paying immediately.",
    icon: iconWrapper(
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-3.5 3.5-6 8-6s8 2.5 8 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    slug: "purchase-scam",
    title: "Purchase Scam",
    description: "Paying for goods, vehicles or bookings online that never end up arriving.",
    icon: iconWrapper(
      <path
        d="M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
];
