import type { ReactNode } from "react";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  as?: "div" | "article";
};

export function HoverCard({
  children,
  className = "",
  accent = false,
  as: Tag = "div",
}: HoverCardProps) {
  return (
    <Tag
      className={`card-hover rounded-2xl border bg-[var(--bg-card)] ${
        accent
          ? "border-[var(--acid)]/30 hover:border-[var(--acid)]/50 hover:shadow-[0_0_40px_rgba(191,255,0,0.1)]"
          : "border-[var(--border)] hover:border-[var(--acid-muted)]"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
