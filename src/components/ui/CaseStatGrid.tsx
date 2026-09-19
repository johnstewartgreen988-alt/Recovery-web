type Stat = {
  label: string;
  value: string;
};

export function CaseStatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="min-w-0 rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(11,11,13,0.05)] sm:p-5"
        >
          <p className="text-[11px] font-semibold tracking-wide text-ink-500 uppercase">
            {stat.label}
          </p>
          <p className="font-display mt-1.5 text-lg font-medium break-words text-brand-900 sm:text-xl lg:text-2xl">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
