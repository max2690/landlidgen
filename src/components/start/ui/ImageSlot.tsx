import Image from "next/image";
import type { LandingImageSlot } from "@/lib/start/images";

type ImageSlotProps = {
  slot: LandingImageSlot;
  priority?: boolean;
  className?: string;
  aspect?: "phone" | "wide" | "square";
};

const aspectClasses = {
  phone: "aspect-[9/19] w-full max-w-[240px] mx-auto sm:max-w-[320px]",
  wide: "aspect-video w-full",
  square: "aspect-square w-full",
} as const;

const sizeHints = {
  phone: "(max-width: 640px) 280px, 320px",
  wide: "(max-width: 768px) 100vw, 320px",
  square: "(max-width: 768px) 100vw, 320px",
} as const;

export function ImageSlot({
  slot,
  priority = false,
  className = "",
  aspect = "phone",
}: ImageSlotProps) {
  const hasImage = Boolean(slot.src);

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`card-hover relative overflow-hidden rounded-2xl border ${
          hasImage
            ? "border-[var(--border)] bg-black hover:border-[var(--acid-muted)]"
            : "border-dashed border-[var(--acid)]/30 bg-[var(--bg-card)] hover:border-[var(--acid)]/50"
        } ${aspectClasses[aspect]}`}
      >
        {hasImage ? (
          <Image
            src={slot.src!}
            alt={slot.alt}
            fill
            priority={priority}
            className="object-cover object-center"
            sizes={sizeHints[aspect]}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--acid)]/10">
              <svg
                className="h-8 w-8 text-[var(--acid)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.163-5.163a2.25 2.25 0 0 1 3.182 0l5.163 5.163m-3.182-7.5 1.568-1.568a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--acid)]">
              {slot.label}
            </p>
            <p className="mt-3 max-w-xs text-sm text-[var(--text-muted)]">
              {slot.hint}
            </p>
            <p className="mt-4 rounded-lg bg-[var(--bg-elevated)] px-3 py-2 font-mono text-xs text-white/70">
              public/start/{slot.filename}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
