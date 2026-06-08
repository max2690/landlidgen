import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

const PRICING_POINTS = [
  { value: "0 ₽", label: "Регистрация" },
  { value: "2500 ₽", label: "10 размещений — старт" },
  { value: "до 250 ₽", label: "За одно размещение" },
  { value: "0 ₽", label: "Абонентская плата" },
] as const;

export function PricingCtaBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Сколько это стоит?</SectionTitle>
      <p className="-mt-6 mb-8 text-center text-lg text-[var(--text-muted)]">
        Понятно с первого взгляда. Платите только за размещения.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PRICING_POINTS.map((point) => (
          <HoverCard key={point.label} accent className="rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-white sm:text-3xl">{point.value}</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{point.label}</p>
          </HoverCard>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href={REGISTER_URLS.business}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-5 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] sm:w-auto sm:min-w-[280px]"
        >
          🟩 Запустить за 2500 ₽
        </Link>
        <Link
          href={REGISTER_URLS.executor}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border-strong)] px-8 py-5 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)] sm:w-auto sm:min-w-[280px]"
        >
          ⬛ Начать зарабатывать
        </Link>
      </div>
    </Section>
  );
}
