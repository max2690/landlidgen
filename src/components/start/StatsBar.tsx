import { STATS_BAR } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";

export function StatsBar() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:gap-4 sm:px-6">
        {STATS_BAR.map((stat) => (
          <HoverCard
            key={stat.label}
            accent={stat.accent}
            className="rounded-xl p-4 text-center sm:p-5"
          >
            <p className="text-2xl font-bold text-[var(--acid)] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
              {stat.label}
            </p>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
