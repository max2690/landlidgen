import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

const AD_CONS = [
  "Дорого",
  "Много шума",
  "Низкое доверие",
  "Растущая стоимость клиента",
] as const;

const LIDGEN_PROS = [
  "100–200 просмотров статуса в WhatsApp",
  "~3 перехода на бизнес в среднем",
  "Антифрод, QR-код — без ботов",
  "До 250 ₽ — живой сарафан, не баннер",
] as const;

export function ComparisonBlock() {
  return (
    <Section>
      <SectionTitle>Почему рекомендации работают лучше рекламы</SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        <HoverCard className="border-red-500/20 p-8 hover:border-red-500/40">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
            Обычная реклама
          </h3>
          <ul className="space-y-4">
            {AD_CONS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-[var(--text-muted)]">
                <span>❌</span>
                {item}
              </li>
            ))}
          </ul>
        </HoverCard>

        <HoverCard accent className="p-8">
          <h3 className="mb-6 text-xl font-bold text-[var(--acid)] sm:text-2xl">
            LidGen
          </h3>
          <ul className="space-y-4">
            {LIDGEN_PROS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-white">
                <span>✅</span>
                {item}
              </li>
            ))}
          </ul>
        </HoverCard>
      </div>

      <div className="mt-10 text-center">
        <Link
          href={REGISTER_URLS.business}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] sm:w-auto sm:min-w-[300px]"
        >
          Перейти на LidGen вместо рекламы
        </Link>
      </div>
    </Section>
  );
}
