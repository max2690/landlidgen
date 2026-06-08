import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";
import { RevealLead, Section } from "./ui/Section";

export function FinalCta() {
  return (
    <Section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          data-reveal="blur-up"
          className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Запустите рекомендации уже сегодня
        </h2>
        <RevealLead className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
          Бизнес получает дополнительный охват и доверие. Исполнители получают
          оплату за размещения. Регистрация бесплатна и занимает меньше минуты.
        </RevealLead>

        <div
          data-reveal="scale-up"
          data-reveal-delay={200}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href={REGISTER_URLS.business}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-5 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] sm:min-w-[280px]"
          >
            Получить клиентов
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="inline-flex items-center justify-center rounded-xl border border-[var(--border-strong)] px-8 py-5 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)] sm:min-w-[280px]"
          >
            Начать зарабатывать
          </Link>
        </div>
      </div>
    </Section>
  );
}
