import Link from "next/link";
import { MAIN_SITE_URL, REGISTER_URLS } from "@/lib/start/config";

export function LogoHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href={MAIN_SITE_URL}
          className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
        >
          <span className="text-[var(--acid)]">Lid</span>
          <span className="text-white">Gen</span>
        </Link>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href={REGISTER_URLS.business}
            className="rounded-lg border border-[var(--border-strong)] px-2.5 py-2 text-xs font-medium text-white transition-colors hover:border-[var(--acid-muted)] sm:px-3 sm:text-sm"
          >
            <span className="sm:hidden">Бизнес</span>
            <span className="hidden sm:inline">Для бизнеса</span>
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="cta-shine rounded-lg bg-[var(--acid)] px-2.5 py-2 text-xs font-semibold text-black transition-colors hover:bg-[var(--acid-hover)] sm:px-3 sm:text-sm"
          >
            Заработать
          </Link>
        </div>
      </div>
    </header>
  );
}
