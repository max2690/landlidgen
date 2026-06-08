import { TESTIMONIALS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

export function TestimonialsBlock() {
  return (
    <Section>
      <SectionTitle>Что говорят пользователи</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-[var(--text-muted)]">
        Реальные сценарии — без агентств и накрутки
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <HoverCard key={item.role} className="flex flex-col p-6 sm:p-8">
            <p className="flex-1 text-lg leading-relaxed text-white">
              «{item.quote}»
            </p>
            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <p className="font-semibold text-[var(--acid)]">{item.role}</p>
              <p className="text-sm text-[var(--text-muted)]">{item.type}</p>
            </div>
          </HoverCard>
        ))}
      </div>
    </Section>
  );
}
