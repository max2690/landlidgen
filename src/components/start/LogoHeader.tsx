import Link from "next/link";
import { MAIN_SITE_URL, REGISTER_URLS } from "@/lib/start/config";

export function LogoHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={MAIN_SITE_URL} className="text-xl font-bold tracking-tight">
          <span className="text-[var(--acid)]">Lid</span>
          <span className="text-white">Gen</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={REGISTER_URLS.business}
            className="hidden rounded-lg border border-[var(--border-strong)] px-3 py-2 text-sm font-medium text-white transition-colors hover:border-[var(--acid-muted)] sm:inline-block"
          >
            Для бизнеса
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="rounded-lg bg-[var(--acid)] px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-[var(--acid-hover)]"
          >
            Заработать
          </Link>
        </div>
      </div>
    </header>
  );
}
