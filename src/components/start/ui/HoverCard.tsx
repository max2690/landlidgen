import type { HTMLAttributes, ReactNode } from "react";

type HoverCardProps = HTMLAttributes<HTMLDivElement> & {
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
  ...props
}: HoverCardProps) {
  return (
    <Tag
      {...props}
      className={`card-hover rounded-2xl border bg-[var(--bg-card)] ${
        accent
          ? "border-[var(--acid)]/30 hover:border-[var(--acid)]/50 hover:shadow-[0_0_40px_var(--glow)]"
          : "border-[var(--border)] hover:border-[var(--acid-muted)]"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
