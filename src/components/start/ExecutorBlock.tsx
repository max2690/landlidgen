import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";
import { Section, SectionTitle } from "./ui/Section";

export function ExecutorBlock() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle>Хотите зарабатывать?</SectionTitle>

        <p className="-mt-6 mb-8 text-lg text-[var(--text-muted)] sm:text-xl">
          Берите задания компаний.
          <br />
          Размещайте рекомендации.
          <br />
          Получайте оплату.
        </p>

        <Link
          href={REGISTER_URLS.executor}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-8 py-5 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)] hover:bg-[var(--bg-elevated)] active:scale-[0.98] sm:w-auto sm:min-w-[280px]"
        >
          Начать зарабатывать
        </Link>
      </div>
    </Section>
  );
}
