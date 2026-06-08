import { AD_CONS, LIDGEN_PROS } from "@/lib/start/config";
import { BlockCta } from "./ui/BlockCta";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

export function ComparisonBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>
        Почему рекомендации работают лучше обычной рекламы
      </SectionTitle>

      <div className="grid gap-5 lg:grid-cols-2">
        <HoverCard
          data-reveal="fade-right"
          className="border-red-500/20 p-6 sm:p-8"
        >
          <h3 className="mb-5 text-xl font-bold text-white">Обычная реклама</h3>
          <ul className="space-y-3">
            {AD_CONS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[var(--text-muted)]"
              >
                <span>❌</span>
                {item}
              </li>
            ))}
          </ul>
        </HoverCard>

        <HoverCard data-reveal="fade-left" accent className="p-6 sm:p-8">
          <h3 className="mb-5 text-xl font-bold text-[var(--acid)]">LidGen</h3>
          <ul className="space-y-3">
            {LIDGEN_PROS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white">
                <span>✅</span>
                {item}
              </li>
            ))}
          </ul>
        </HoverCard>
      </div>

      <BlockCta variant="launch" className="mt-8" />
    </Section>
  );
}
