import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const TEAMS = [
  {
    title: "Management Team",
    description:
      "Our management team sets the standard every case is measured against. They oversee our investigation and appeals specialists, making sure you get honest advice, clear communication, and the best possible chance of recovering your money.",
  },
  {
    title: "Fraud Investigation Team",
    description:
      "Our experienced fraud investigators guide you through every step of recovering your money. They give you a clear, honest read on your chances of success, and the steady support to see it through.",
  },
  {
    title: "Appeals & Escalations Team",
    description:
      "Our appeals team steps in when a bank or platform pushes back, challenging the decision and taking it further. They know exactly how and when to escalate, and won't settle for a first 'no' when there's still a case to be made.",
  },
  {
    title: "Legal Team",
    description:
      "Our experienced attorneys bring the legal weight behind every escalation, from formal complaints to regulatory referrals. They build each case on solid legal ground, giving you the strongest possible chance of a fair outcome.",
  },
];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1v12M1 7h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TeamSection() {
  return (
    <section className="bg-mist-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <h2 className="font-display max-w-md text-[32px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[38px]">
              The people behind your case
            </h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-500">
              Every case is handled by a team of specialists working
              together — from initial investigation through to escalation,
              if it&apos;s needed.
            </p>
            <div>
              <Button href="/team" variant="secondary">
                Meet the team
              </Button>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {TEAMS.map((team, i) => (
              <Reveal key={team.title} delay={i * 100}>
                <details className="group rounded-2xl bg-white px-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(11,11,13,0.1)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg font-medium text-brand-900">
                      {team.title}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist-100 text-brand-900 transition-transform duration-200 group-open:rotate-45">
                      <PlusIcon />
                    </span>
                  </summary>
                  <p className="pb-6 text-sm leading-relaxed text-ink-500">
                    {team.description}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
