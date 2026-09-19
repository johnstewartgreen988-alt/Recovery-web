import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaqBlock } from "@/components/ui/FaqBlock";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Team | Regainr",
  description:
    "Meet the specialists behind Regainr — investigation, appeals, and legal teams working on every case.",
});

const FAQS = [
  {
    question: "Will the same person handle my case throughout?",
    answer:
      "Yes. You're assigned a dedicated point of contact within our investigation team for the duration of your case, rather than being passed between departments.",
  },
  {
    question: "Can I speak to my investigator directly?",
    answer:
      "Yes. You're welcome to reach out to your point of contact directly at any point, by email, phone, or WhatsApp.",
  },
  {
    question: "Who decides whether my case goes to appeals or legal?",
    answer:
      "Our investigation team makes that call based on how your case develops. If a bank or platform pushes back on an initial request, the appeals team steps in, and our legal team is brought in for formal complaints or regulatory referrals.",
  },
  {
    question: "Do I get to choose which team member works my case?",
    answer:
      "Cases are matched to the specialist best suited to the type of scam and its complexity, rather than by client choice. Whoever is assigned, you'll always have one clear point of contact.",
  },
];

const TEAMS = [
  {
    title: "Management Team",
    description:
      "Our management team sets the standard every case is measured against. They oversee our investigation and appeals specialists, making sure you get honest advice, clear communication, and the best possible chance of recovering your money.",
    members: [
      { name: "Daniel Pierce", role: "Managing Director" },
      { name: "Sophia Bennett", role: "Head of Operations" },
    ],
  },
  {
    title: "Fraud Investigation Team",
    description:
      "Our experienced fraud investigators guide you through every step of recovering your money. They give you a clear, honest read on your chances of success, and the steady support to see it through.",
    members: [
      { name: "Stuart Kalinsky", role: "Lead Fraud Investigator" },
      { name: "Aisha Rahman", role: "Senior Investigator" },
    ],
  },
  {
    title: "Appeals & Escalations Team",
    description:
      "Our appeals team steps in when a bank or platform pushes back, challenging the decision and taking it further. They know exactly how and when to escalate, and won't settle for a first 'no' when there's still a case to be made.",
    members: [{ name: "Grace Lindqvist", role: "Head of Appeals & Escalations" }],
  },
  {
    title: "Legal Team",
    description:
      "Our experienced attorneys bring the legal weight behind every escalation, from formal complaints to regulatory referrals. They build each case on solid legal ground, giving you the strongest possible chance of a fair outcome.",
    members: [{ name: "Marcus Feldman", role: "Legal Counsel" }],
  },
];

function InitialAvatar({ name }: { name: string }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mist-100 text-sm font-semibold text-brand-900">
      {name.startsWith("[") ? "—" : name.charAt(0)}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-mist-50">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-12">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-900">Our Team</span>
        </nav>

        <Reveal className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h1 className="font-display text-[34px] leading-[1.15] font-normal tracking-tight text-brand-900 sm:text-[44px]">
              The people behind your case
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Every case is handled by a team of specialists working
              together, from initial investigation through to escalation, if
              it&apos;s needed.
            </p>
          </div>
          <div>
            <Button href="/start-your-claim" variant="secondary">
              Check your eligibility
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {TEAMS.map((team, i) => (
            <Reveal key={team.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(11,11,13,0.05)] sm:p-8">
                <h2 className="font-display text-xl font-medium text-brand-900">
                  {team.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {team.description}
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  {team.members.map((member, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <InitialAvatar name={member.name} />
                      <div>
                        <p className="text-sm font-semibold text-brand-900">
                          {member.name}
                        </p>
                        <p className="text-xs text-ink-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <FaqBlock items={FAQS} />
      </div>
    </div>
  );
}
