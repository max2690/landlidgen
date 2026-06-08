import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";

export function MidCtaBand() {
  return (
    <div className="border-y border-[var(--acid)]/20 bg-[var(--acid)]/5 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Готовы попробовать?
        </h2>
        <p className="mt-3 text-lg text-[var(--text-muted)]">
          Регистрация бесплатна. Первое задание — от 2500 ₽. Исполнителям — от
          ~1000 ₽ в день.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={REGISTER_URLS.business}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)]"
          >
            Получить клиентов
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="inline-flex items-center justify-center rounded-xl border border-[var(--border-strong)] bg-black px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)]"
          >
            Начать зарабатывать
          </Link>
        </div>
      </div>
    </div>
  );
}
