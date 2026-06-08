import { BENEFITS, EXECUTOR_BENEFITS } from "@/lib/start/config";
import { DualPathGrid } from "./ui/PathCard";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

function BenefitsColumn({
  title,
  badge,
  items,
  accent,
}: {
  title: string;
  badge: string;
  items: readonly string[];
  accent: boolean;
}) {
  return (
    <HoverCard accent={accent} className="p-6 sm:p-8">
      <span
        className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          accent
            ? "bg-[var(--acid)]/15 text-[var(--acid)]"
            : "bg-white/5 text-[var(--text-muted)]"
        }`}
      >
        {badge}
      </span>
      <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">{title}</h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={accent ? "text-[var(--acid)]" : "text-white/60"}>
              ✔
            </span>
            <span className="font-medium text-white">{item}</span>
          </li>
        ))}
      </ul>
    </HoverCard>
  );
}

export function BenefitsBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Что получаете вы</SectionTitle>

      <DualPathGrid>
        <BenefitsColumn
          title="Бизнес"
          badge="Для бизнеса"
          items={BENEFITS}
          accent
        />
        <BenefitsColumn
          title="Исполнитель"
          badge="Для исполнителей"
          items={EXECUTOR_BENEFITS}
          accent
        />
      </DualPathGrid>
    </Section>
  );
}
