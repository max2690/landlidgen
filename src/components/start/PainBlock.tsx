import { PAIN_CARDS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { HighlightStatement, Section, SectionTitle } from "./ui/Section";

export function PainBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Знакомо?</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-[var(--text-muted)]">
        Для владельцев бизнеса, которые устали от рекламы.{" "}
        <a href="#executor" className="text-[var(--acid)] underline-offset-2 hover:underline">
          Ищете заработок? →
        </a>
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PAIN_CARDS.map((card) => (
          <HoverCard
            key={card}
            className="p-6 text-center hover:border-red-500/40"
          >
            <span className="mb-3 block text-2xl">❌</span>
            <p className="text-lg font-medium text-white">{card}</p>
          </HoverCard>
        ))}
      </div>

      <HighlightStatement>LidGen работает иначе.</HighlightStatement>
    </Section>
  );
}
