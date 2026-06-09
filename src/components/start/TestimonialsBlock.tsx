import { USE_SCENARIOS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { Section, SectionTitle } from "./ui/Section";

export function TestimonialsBlock() {
  return (
    <Section>
      <SectionTitle>Как это выглядит на практике</SectionTitle>

      <RevealGrid className="grid gap-4 md:grid-cols-3" stagger={120}>
        {USE_SCENARIOS.map((item) => (
          <HoverCard key={item.title} className="p-6">
            <p className="font-semibold text-[var(--acid)]">{item.title}</p>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
              {item.text}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>
    </Section>
  );
}
