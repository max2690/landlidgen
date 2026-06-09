import {
  ACQUAINTANCE_CIRCLE_CLOSER,
  ACQUAINTANCE_CIRCLE_ITEMS,
  ACQUAINTANCE_CIRCLE_LEAD,
} from "@/lib/start/config";
import { RevealGrid } from "./ui/RevealGrid";
import { HighlightStatement, RevealLead, Section, SectionTitle } from "./ui/Section";

export function AcquaintanceCircleBlock() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionTitle>Каждый исполнитель — это отдельный круг знакомых</SectionTitle>
      <RevealLead className="-mt-4 mb-6 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-8">
        {ACQUAINTANCE_CIRCLE_LEAD}
      </RevealLead>

      <RevealGrid
        className="mx-auto max-w-2xl space-y-3"
        stagger={70}
        variant="fade-up"
      >
        {ACQUAINTANCE_CIRCLE_ITEMS.map((item) => (
          <div
            key={item}
            className="card-hover flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 sm:p-5"
          >
            <span className="shrink-0 text-[var(--acid)]">✔</span>
            <p className="font-medium text-white">{item}</p>
          </div>
        ))}
      </RevealGrid>

      <HighlightStatement>{ACQUAINTANCE_CIRCLE_CLOSER}</HighlightStatement>
    </Section>
  );
}
