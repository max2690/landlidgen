import {
  TRANSPARENCY_ITEMS,
  TRANSPARENCY_LEAD,
  TRANSPARENCY_TITLE,
} from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

export function TransparencyTrustBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>{TRANSPARENCY_TITLE}</SectionTitle>
      <RevealLead className="-mt-4 mb-8 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-10">
        {TRANSPARENCY_LEAD}
      </RevealLead>

      <RevealGrid
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        stagger={60}
        variant="scale-up"
      >
        {TRANSPARENCY_ITEMS.map((item) => (
          <HoverCard key={item} accent className="p-4 text-center sm:p-5">
            <span className="mb-2 block text-lg text-[var(--acid)]">✔</span>
            <p className="text-xs font-medium leading-snug text-white sm:text-sm">
              {item}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>

      <p
        data-reveal="fade-up"
        data-reveal-delay={200}
        className="mt-8 text-center text-sm text-[var(--text-muted)] sm:text-base"
      >
        Никаких чёрных ящиков. Вся статистика — в кабинете.
      </p>
    </Section>
  );
}
