import { PROBLEM_CARDS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { HighlightStatement, Section, SectionTitle } from "./ui/Section";

export function ProblemBlock() {
  return (
    <Section>
      <SectionTitle>Почему обычная реклама работает всё хуже?</SectionTitle>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEM_CARDS.map((card) => (
          <HoverCard key={card} className="p-6 text-center">
            <p className="text-lg font-medium text-white">{card}</p>
          </HoverCard>
        ))}
      </div>

      <HighlightStatement>Люди по-прежнему доверяют людям</HighlightStatement>
    </Section>
  );
}
