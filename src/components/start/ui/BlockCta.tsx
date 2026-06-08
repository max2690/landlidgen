import Link from "next/link";
import { REGISTER_URLS } from "@/lib/start/config";

type BlockCtaProps = {
  variant?: "dual" | "business" | "executor" | "how-it-works" | "launch";
  className?: string;
};

export function BlockCta({
  variant = "dual",
  className = "",
}: BlockCtaProps) {
  const base =
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-all active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4 sm:text-lg";

  if (variant === "how-it-works") {
    return (
      <div className={`text-center ${className}`}>
        <a
          href="#how-it-works"
          className={`${base} bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)]`}
        >
          Посмотреть как работает
        </a>
      </div>
    );
  }

  if (variant === "business") {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={REGISTER_URLS.business}
          className={`${base} bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] sm:min-w-[300px]`}
        >
          Получить живые рекомендации
        </Link>
      </div>
    );
  }

  if (variant === "executor") {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={REGISTER_URLS.executor}
          className={`${base} bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] sm:min-w-[300px]`}
        >
          Начать зарабатывать
        </Link>
      </div>
    );
  }

  if (variant === "launch") {
    return (
      <div
        className={`flex flex-col items-center gap-3 sm:flex-row sm:justify-center ${className}`}
      >
        <Link
          href={REGISTER_URLS.business}
          className={`${base} bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)] sm:min-w-[280px]`}
        >
          Запустить первое задание
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center gap-3 sm:flex-row sm:justify-center ${className}`}
    >
      <Link
        href={REGISTER_URLS.business}
        className={`${base} bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)] sm:min-w-[260px]`}
      >
        Получить клиентов
      </Link>
      <Link
        href={REGISTER_URLS.executor}
        className={`${base} border border-[var(--border-strong)] bg-black text-white hover:border-[var(--acid-muted)] sm:min-w-[260px]`}
      >
        Начать зарабатывать
      </Link>
    </div>
  );
}
