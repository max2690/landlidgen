import Link from "next/link";
import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { REGISTER_URLS } from "@/lib/start/config";

type PathCardProps = HTMLAttributes<HTMLDivElement> & {
  variant: "business" | "executor";
  badge: string;
  title: string;
  subtitle: string;
  bullets: readonly string[];
  cta: string;
  id?: string;
  highlighted?: boolean;
  footerNote?: string;
};

export function PathCard({
  variant,
  badge,
  title,
  subtitle,
  bullets,
  cta,
  id,
  highlighted = false,
  footerNote,
  className = "",
  ...props
}: PathCardProps) {
  const href =
    variant === "business" ? REGISTER_URLS.business : REGISTER_URLS.executor;
  const isBusiness = variant === "business";

  return (
    <div
      id={id}
      {...props}
      className={`card-hover flex h-full flex-col rounded-2xl border bg-[var(--bg-card)] p-5 sm:p-8 ${
        isBusiness || highlighted
          ? "border-[var(--acid)]/40 shadow-[0_0_32px_rgba(0,225,180,0.06)] hover:border-[var(--acid)]/60 hover:shadow-[0_0_48px_rgba(0,225,180,0.12)]"
          : "border-[var(--border)] hover:border-[var(--acid-muted)]"
      } ${className}`}
    >
      <span
        className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          isBusiness || highlighted
            ? "bg-[var(--acid)]/15 text-[var(--acid)]"
            : "bg-white/5 text-[var(--text-muted)]"
        }`}
      >
        {badge}
      </span>

      <h3 className="text-xl font-bold text-white sm:text-3xl">{title}</h3>
      <p className="mt-2 text-base text-[var(--text-muted)] sm:text-lg">
        {subtitle}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-white">
            <span
              className={`mt-0.5 shrink-0 ${isBusiness ? "text-[var(--acid)]" : "text-white/60"}`}
            >
              ✔
            </span>
            <span className="text-sm sm:text-base">{bullet}</span>
          </li>
        ))}
      </ul>

      {footerNote ? (
        <p className="mt-6 text-sm text-[var(--text-muted)]">{footerNote}</p>
      ) : null}

      <Link
        href={href}
        className={`${footerNote ? "mt-4" : "mt-6"} inline-flex min-h-[48px] w-full items-center justify-center rounded-xl py-3.5 text-base font-semibold transition-all duration-200 active:scale-[0.98] sm:mt-8 sm:py-4 sm:text-lg ${
          isBusiness || highlighted
            ? "cta-shine bg-[var(--acid)] text-black hover:bg-[var(--acid-hover)]"
            : "cta-outline-shine border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-white hover:border-[var(--acid-muted)] hover:bg-black"
        }`}
      >
        {isBusiness && <span className="mr-2">🟩</span>}
        {!isBusiness && <span className="mr-2">⬛</span>}
        {cta}
      </Link>
    </div>
  );
}

export function DualPathGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-4 lg:grid-cols-2 lg:gap-6 ${className}`}
      data-stagger={180}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const element = child as ReactElement<{
          "data-reveal"?: string;
          "data-reveal-index"?: number;
        }>;

        return cloneElement(element, {
          "data-reveal": "fade-up",
          "data-reveal-index": index,
        });
      })}
    </div>
  );
}
