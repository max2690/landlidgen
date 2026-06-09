import Link from "next/link";
import { FOOTER_TAGLINE, MAIN_SITE_URL, REGISTER_URLS } from "@/lib/start/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xl font-bold">
              <span className="text-[var(--acid)]">Lid</span>Gen
            </p>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              {FOOTER_TAGLINE}
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Начать
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={REGISTER_URLS.business}
                  className="text-[var(--text-muted)] hover:text-[var(--acid)]"
                >
                  Регистрация для бизнеса
                </Link>
              </li>
              <li>
                <Link
                  href={REGISTER_URLS.executor}
                  className="text-[var(--text-muted)] hover:text-[var(--acid)]"
                >
                  Регистрация исполнителя
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Платформа
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={MAIN_SITE_URL}
                  className="text-[var(--text-muted)] hover:text-[var(--acid)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lid-gen.pro
                </a>
              </li>
              <li>
                <a
                  href={`${MAIN_SITE_URL}/offer`}
                  className="text-[var(--text-muted)] hover:text-[var(--acid)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Оферта
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} LidGen · ООО «ЛИДГЕН ПРО»
        </p>
      </div>
    </footer>
  );
}
