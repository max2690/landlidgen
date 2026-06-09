import {
  LOCAL_BUSINESS_CARDS,
  LOCAL_BUSINESS_CLOSER,
  LOCAL_BUSINESS_LEAD,
} from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { HighlightStatement, RevealLead, Section, SectionTitle } from "./ui/Section";

export function LocalBusinessBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Зачем ресторану во Владивостоке показы в Москве?</SectionTitle>
      <RevealLead className="-mt-4 mb-8 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-10">
        {LOCAL_BUSINESS_LEAD}
      </RevealLead>

      <RevealGrid
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        stagger={80}
        variant="fade-up"
      >
        {LOCAL_BUSINESS_CARDS.map((item) => (
          <HoverCard key={item.title} accent={item.accent} className="p-5 sm:p-6">
            <span className="mb-3 block text-2xl">{item.icon}</span>
            <h3 className="font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {item.text}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>

      <HighlightStatement>{LOCAL_BUSINESS_CLOSER}</HighlightStatement>
    </Section>
  );
}
