import Link from "next/link";
import {
  EXECUTOR_EARNINGS,
  MAIN_SITE_URL,
  PLATFORM_METRICS,
  REGISTER_URLS,
  STATUS_LEVELS,
} from "@/lib/start/config";
import { DualPathGrid } from "./ui/PathCard";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

const METRIC_CARDS = [
  {
    value: `${PLATFORM_METRICS.viewsMin}–${PLATFORM_METRICS.viewsMax}`,
    unit: "просмотров",
    label: `статуса в WhatsApp и мессенджерах`,
    accent: true,
  },
  {
    value: `~${PLATFORM_METRICS.clicksTypical}`,
    unit: "перехода",
    label: "на бизнес в среднем с размещения",
    accent: true,
  },
  {
    value: `до ${PLATFORM_METRICS.pricePerTask}`,
    unit: "₽",
    label: "стоимость одного задания",
    accent: false,
  },
] as const;

export function MetricsBlock() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionTitle>Цифры, не обещания</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-lg text-[var(--text-muted)]">
        Рекомендация от живого человека даёт больше доверия и внимания, чем
        обычный таргет
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {METRIC_CARDS.map((card) => (
          <HoverCard
            key={card.label}
            accent={card.accent}
            className="p-6 text-center sm:p-8"
          >
            <p className="text-4xl font-bold text-[var(--acid)] sm:text-5xl">
              {card.value}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white">
              {card.unit}
            </p>
            <p className="mt-3 text-[var(--text-muted)]">{card.label}</p>
          </HoverCard>
        ))}
      </div>

      <DualPathGrid>
        <HoverCard accent className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white">Для бизнеса</h3>
          <p className="mt-3 text-[var(--text-muted)]">
            10 размещений за 2500 ₽ →{" "}
            <span className="text-white">
              1000–2000 просмотров и ~30 переходов
            </span>{" "}
            от реальных людей. Просмотры и переходы — в личном кабинете.
          </p>
          <Link
            href={REGISTER_URLS.business}
            className="mt-6 inline-flex rounded-xl bg-[var(--acid)] px-6 py-3 font-semibold text-black transition-colors hover:bg-[var(--acid-hover)]"
          >
            Получить клиентов
          </Link>
        </HoverCard>

        <HoverCard accent className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white">Для исполнителей</h3>
          <p className="mt-3 text-3xl font-bold text-[var(--acid)]">
            ~{EXECUTOR_EARNINGS.noviceDaily.toLocaleString("ru-RU")} ₽/день
          </p>
          <p className="mt-1 text-[var(--text-muted)]">
            на старте → {EXECUTOR_EARNINGS.topLabel} ₽ с ростом уровня
          </p>
          <p className="mt-3 text-sm text-white">
            Выкладываете статусы в мессенджерах и соцсетях — получаете оплату
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {STATUS_LEVELS.map((level) => (
              <span
                key={level.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-white"
              >
                <span>{level.emoji}</span>
                {level.earnings}
              </span>
            ))}
          </div>
          <Link
            href={REGISTER_URLS.executor}
            className="mt-6 inline-flex rounded-xl bg-[var(--acid)] px-6 py-3 font-semibold text-black transition-colors hover:bg-[var(--acid-hover)]"
          >
            Начать зарабатывать
          </Link>
        </HoverCard>
      </DualPathGrid>

      <p className="mt-8 text-center text-sm text-[var(--text-muted)]">
        Подробности, оферта и кабинет — на{" "}
        <a
          href={MAIN_SITE_URL}
          className="text-[var(--acid)] underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          lid-gen.pro
        </a>
      </p>
    </Section>
  );
}
