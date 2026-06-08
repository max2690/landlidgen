import Link from "next/link";
import {
  REGISTER_URLS,
  type StickyVariant,
  STICKY_BANNERS,
} from "@/lib/start/config";

type StickyBannerProps = {
  variant: StickyVariant;
};

export function StickyBanner({ variant }: StickyBannerProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <p className="text-sm font-medium text-white sm:text-base">
          {STICKY_BANNERS[variant]}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={REGISTER_URLS.business}
            className="hidden rounded-lg bg-[var(--acid)] px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-[var(--acid-hover)] sm:inline-block sm:text-sm"
          >
            Для бизнеса
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="rounded-lg border border-[var(--border-strong)] px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-[var(--acid-muted)] sm:text-sm"
          >
            Заработать
          </Link>
        </div>
      </div>
    </div>
  );
}
