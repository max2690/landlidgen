import Link from "next/link";
import {
  EXECUTOR_EARNINGS,
  REGISTER_URLS,
  STATUS_LEVELS,
} from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

const SOCIAL_PLATFORMS = [
  "WhatsApp",
  "Telegram",
  "ВКонтакте",
  "Одноклассники",
  "Другие соцсети",
] as const;

export function ExecutorEarningsBlock() {
  return (
    <Section
      id="executor"
      className="border-t border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <SectionTitle>Сколько можно заработать</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-lg text-[var(--text-muted)] sm:text-xl">
        Выкладываете статусы в мессенджерах и соцсетях — получаете оплату.
        <span className="mt-2 block text-white">
          Без вложений. Свободный график. Рост дохода с уровнем.
        </span>
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <HoverCard className="p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            На старте
          </p>
          <p className="mt-3 text-5xl font-bold text-white sm:text-6xl">
            ~{EXECUTOR_EARNINGS.noviceDaily.toLocaleString("ru-RU")}
          </p>
          <p className="mt-2 text-xl font-medium text-[var(--acid)]">₽ в день</p>
          <p className="mt-4 text-[var(--text-muted)]">
            Уровень Novice — берёте задания и размещаете у себя
          </p>
        </HoverCard>

        <HoverCard accent className="p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--acid)]">
            С ростом уровня
          </p>
          <p className="mt-3 text-5xl font-bold text-[var(--acid)] sm:text-6xl">
            {EXECUTOR_EARNINGS.topLabel}
          </p>
          <p className="mt-2 text-xl font-medium text-white">₽ и выше</p>
          <p className="mt-4 text-[var(--text-muted)]">
            Top-уровень — потолка нет, чем активнее, тем больше заданий и
            оплата
          </p>
        </HoverCard>
      </div>

      <HoverCard className="p-6 sm:p-8">
        <h3 className="mb-6 text-center text-xl font-bold text-white">
          Рост дохода по уровням
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATUS_LEVELS.map((level) => (
            <HoverCard
              key={level.name}
              className="rounded-xl bg-[var(--bg-elevated)] p-5 text-center"
            >
              <span className="text-2xl">{level.emoji}</span>
              <p className="mt-2 font-bold text-white">{level.name}</p>
              <p className="text-sm text-[var(--text-muted)]">{level.label}</p>
              <p className="mt-3 text-sm font-semibold text-[var(--acid)]">
                {level.earnings}
              </p>
            </HoverCard>
          ))}
        </div>
      </HoverCard>

      <HoverCard className="mt-8 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">Что нужно делать?</h3>
        <p className="mt-2 text-[var(--text-muted)]">
          Выбрать задание → написать рекомендацию своими словами → выложить
          статус в мессенджер или соцсеть → получить оплату после проверки.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SOCIAL_PLATFORMS.map((platform) => (
            <span
              key={platform}
              className="card-hover rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-white hover:border-[var(--acid-muted)]"
            >
              {platform}
            </span>
          ))}
        </div>
      </HoverCard>

      <div className="mt-10 text-center">
        <Link
          href={REGISTER_URLS.executor}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-5 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] active:scale-[0.98] sm:w-auto sm:min-w-[320px]"
        >
          ⬛ Начать зарабатывать
        </Link>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Регистрация бесплатна · без вложений · задания до 250 ₽
        </p>
      </div>
    </Section>
  );
}
