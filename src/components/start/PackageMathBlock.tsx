import {
  CTA,
  MARKET_COMPARE,
  PACKAGE_MATH,
  PACKAGE_MATH_DISCLAIMER,
  PACKAGE_MATH_LEAD,
  REGISTER_URLS,
} from "@/lib/start/config";
import Link from "next/link";
import { CountUp } from "./ui/CountUp";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

const RESULT_CARDS = [
  {
    value: `~${PACKAGE_MATH.viewsTotal.toLocaleString("ru-RU")}`,
    label: "просмотров с пакета",
    hint: `${PACKAGE_MATH.placements} × ~${PACKAGE_MATH.viewsPerPlacement} на размещение`,
  },
  {
    value: `~${PACKAGE_MATH.clicksTotal}`,
    label: "переходов в статистике",
    hint: `~${PACKAGE_MATH.clicksPerPlacement} на размещение в среднем`,
  },
  {
    value: `~${PACKAGE_MATH.costPerClick} ₽`,
    label: "за переход",
    hint: `${PACKAGE_MATH.price.toLocaleString("ru-RU")} ₽ ÷ ${PACKAGE_MATH.clicksTotal} переходов`,
  },
] as const;

export function PackageMathBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Что даёт стартовый пакет</SectionTitle>
      <RevealLead className="-mt-4 mb-6 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-8">
        {PACKAGE_MATH_LEAD}
      </RevealLead>

      <RevealGrid
        className="mb-6 grid gap-3 sm:grid-cols-3"
        stagger={100}
        variant="glow-in"
      >
        {RESULT_CARDS.map((card) => (
          <HoverCard key={card.label} accent className="p-5 text-center sm:p-6">
            <p className="text-3xl font-bold text-[var(--acid)] sm:text-4xl">
              <CountUp value={card.value} />
            </p>
            <p className="mt-2 font-medium text-white">{card.label}</p>
            <p className="mt-2 text-xs text-[var(--text-muted)]">{card.hint}</p>
          </HoverCard>
        ))}
      </RevealGrid>

      <div className="grid gap-4 lg:grid-cols-3">
        <HoverCard
          data-reveal="fade-up"
          className="border-red-500/20 p-5 sm:p-6"
        >
          <h3 className="font-bold text-white">Яндекс Директ</h3>
          <p className="mt-3 text-2xl font-bold text-red-400/90">
            {MARKET_COMPARE.directCpc}
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">типичный CPC</p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            {MARKET_COMPARE.directNote}. Списания идут за клики по баннеру — без
            круга знакомых автора.
          </p>
        </HoverCard>

        <HoverCard data-reveal="fade-up" data-reveal-delay={80} accent className="p-5 sm:p-6">
          <h3 className="font-bold text-[var(--acid)]">LidGen</h3>
          <p className="mt-3 text-2xl font-bold text-white">
            ~{PACKAGE_MATH.costPerClick} ₽
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">за переход с пакета</p>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            {MARKET_COMPARE.lidgenNote}. Оплата за размещение — переходы в
            статистике кабинета.
          </p>
        </HoverCard>

        <HoverCard
          data-reveal="fade-up"
          data-reveal-delay={160}
          className="p-5 sm:p-6"
        >
          <h3 className="font-bold text-white">{MARKET_COMPARE.cheaperChannels}</h3>
          <p className="mt-3 text-lg font-semibold text-[var(--accent-soft)]">
            Дешевле по клику ≠ лучше
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            {MARKET_COMPARE.cheaperNote}. LidGen — про рекомендацию в круге
            знакомых, не про самый дешёвый клик.
          </p>
        </HoverCard>
      </div>

      <p
        data-reveal="fade-up"
        data-reveal-delay={200}
        className="mt-6 text-center text-xs text-[var(--text-muted)] sm:text-sm"
      >
        {PACKAGE_MATH_DISCLAIMER}
      </p>

      <div data-reveal="fade-up" data-reveal-delay={280} className="mt-8 text-center">
        <Link
          href={REGISTER_URLS.business}
          className="cta-shine inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-3.5 text-base font-semibold text-[#0b0b0f] transition-all hover:bg-[var(--acid-hover)] sm:w-auto sm:min-w-[300px] sm:text-lg"
        >
          {CTA.business}
        </Link>
      </div>
    </Section>
  );
}
