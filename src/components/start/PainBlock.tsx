import { PAIN_CARDS, PAIN_CLOSER } from "@/lib/start/config";
import { BlockCta } from "./ui/BlockCta";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import {
  HighlightStatement,
  Section,
  SectionTitle,
} from "./ui/Section";

export function PainBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Знакомо?</SectionTitle>

      <RevealGrid
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        stagger={80}
        variant="flip-up"
      >
        {PAIN_CARDS.map((card) => (
          <HoverCard key={card} className="p-5 text-center">
            <span className="mb-2 block text-xl">❌</span>
            <p className="font-medium text-white">{card}</p>
          </HoverCard>
        ))}
      </RevealGrid>

      <HighlightStatement>{PAIN_CLOSER}</HighlightStatement>

      <BlockCta variant="how-it-works" className="mt-8" />
    </Section>
  );
}
