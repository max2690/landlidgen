import { AUDIENCE_ITEMS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

export function AudienceBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Кому подходит LidGen</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-[var(--text-muted)]">
        Локальный бизнес и онлайн — везде, где важны рекомендации знакомых
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE_ITEMS.map((item) => (
          <HoverCard
            key={item.name}
            className="flex items-start gap-4 rounded-xl p-5"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {item.result}
              </p>
            </div>
          </HoverCard>
        ))}
      </div>
    </Section>
  );
}
