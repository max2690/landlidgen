import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";

type CtaButtonsProps = {
  size?: "default" | "large";
  className?: string;
};

export function CtaButtons({ size = "default", className = "" }: CtaButtonsProps) {
  const isLarge = size === "large";

  return (
    <div
      className={`flex w-full flex-col gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <Link
        href={REGISTER_URLS.business}
        className={`group inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] font-semibold text-black transition-all duration-200 hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] active:scale-[0.98] sm:w-auto ${
          isLarge ? "px-8 py-5 text-lg sm:min-w-[280px]" : "px-6 py-4 text-base sm:min-w-[240px]"
        }`}
      >
        <span className="mr-2">🟩</span>
        Получить клиентов
      </Link>
      <Link
        href={REGISTER_URLS.executor}
        className={`inline-flex w-full items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] font-semibold text-white transition-all duration-200 hover:border-[var(--acid-muted)] hover:bg-[var(--bg-card)] active:scale-[0.98] sm:w-auto ${
          isLarge ? "px-8 py-5 text-lg sm:min-w-[280px]" : "px-6 py-4 text-base sm:min-w-[240px]"
        }`}
      >
        <span className="mr-2">⬛</span>
        Начать зарабатывать
      </Link>
    </div>
  );
}
