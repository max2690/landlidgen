import { STATS_BAR } from "@/lib/start/config";
import { CountUp } from "./ui/CountUp";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";

export function StatsBar() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-4 sm:py-6">
      <RevealGrid
        className="mx-auto grid max-w-6xl grid-cols-2 gap-2.5 px-4 sm:grid-cols-4 sm:gap-4 sm:px-6"
        stagger={90}
        variant="flip-up"
      >
        {STATS_BAR.map((stat) => (
          <HoverCard
            key={stat.label}
            accent={stat.accent}
            className="rounded-xl p-3 text-center sm:p-5"
          >
            <p className="text-xl font-bold leading-none text-[var(--acid)] sm:text-3xl">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-1.5 text-[0.65rem] leading-tight text-[var(--text-muted)] sm:text-sm">
              {stat.label}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>
    </div>
  );
}
