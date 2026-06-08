import { AUDIENCE_ITEMS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { Section, SectionTitle } from "./ui/Section";

export function AudienceBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Кому подходит LidGen</SectionTitle>

      <RevealGrid
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        stagger={60}
        variant="fade-up"
      >
        {AUDIENCE_ITEMS.map((item) => (
          <HoverCard
            key={item.name}
            className="flex flex-col items-center gap-2 rounded-xl p-4 text-center"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-sm font-semibold text-white">{item.name}</p>
          </HoverCard>
        ))}
      </RevealGrid>
    </Section>
  );
}
