import {
  ACCENT_PHRASE,
  TRUST_TRAFFIC_BENEFITS,
  TRUST_TRAFFIC_LEAD,
} from "@/lib/start/config";
import { BlockCta } from "./ui/BlockCta";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { HighlightStatement, RevealLead, Section, SectionTitle } from "./ui/Section";

export function TrustTrafficBlock() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionTitle>Почему рекомендации работают лучше рекламы</SectionTitle>
      <RevealLead className="-mt-4 mb-8 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-10">
        {TRUST_TRAFFIC_LEAD}
      </RevealLead>

      <RevealGrid
        className="grid gap-3 sm:grid-cols-2"
        stagger={80}
        variant="fade-up"
      >
        {TRUST_TRAFFIC_BENEFITS.map((item) => (
          <HoverCard
            key={item.title}
            accent={item.accent}
            className="p-5 sm:p-6"
          >
            <span className="mb-3 block text-2xl sm:text-3xl">{item.icon}</span>
            <h3 className="text-base font-bold text-white sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              {item.text}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>

      <HighlightStatement>{ACCENT_PHRASE}</HighlightStatement>

      <BlockCta variant="business" className="mt-8" />
    </Section>
  );
}
