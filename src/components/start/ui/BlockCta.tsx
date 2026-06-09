import Link from "next/link";
import { CTA, REGISTER_URLS } from "@/lib/start/config";

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
  const primary = `${base} cta-shine bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)]`;
  const outline = `${base} cta-outline-shine border border-[var(--border-strong)] bg-black text-white hover:border-[var(--acid-muted)]`;

  if (variant === "how-it-works") {
    return (
      <div className={`text-center ${className}`}>
        <a
          href="#how-it-works"
          className={primary}
        >
          {CTA.businessHow}
        </a>
      </div>
    );
  }

  if (variant === "business") {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={REGISTER_URLS.business}
          className={`${primary} sm:min-w-[300px]`}
        >
          {CTA.business}
        </Link>
      </div>
    );
  }

  if (variant === "executor") {
    return (
      <div className={`text-center ${className}`}>
        <Link
          href={REGISTER_URLS.executor}
          className={`${primary} sm:min-w-[300px]`}
        >
          {CTA.executor}
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
          className={`${primary} sm:min-w-[280px]`}
        >
          {CTA.businessLaunch}
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
        className={`${primary} sm:min-w-[260px]`}
      >
        {CTA.business}
      </Link>
      <Link
        href={REGISTER_URLS.executor}
        className={`${outline} sm:min-w-[260px]`}
      >
        {CTA.executor}
      </Link>
    </div>
  );
}
