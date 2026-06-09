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
    <div className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-1.5 sm:gap-3 sm:px-6 sm:py-2">
        <p className="min-w-0 flex-1 truncate text-[0.7rem] font-medium text-white/90 sm:text-sm">
          {STICKY_BANNERS[variant]}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <Link
            href={REGISTER_URLS.business}
            className="hidden rounded-md bg-[var(--acid)] px-2 py-1 text-[0.65rem] font-semibold text-black sm:inline-block sm:px-2.5 sm:py-1.5 sm:text-xs"
          >
            Бизнес
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="rounded-md border border-[var(--border-strong)] px-2 py-1 text-[0.65rem] font-semibold text-white sm:px-2.5 sm:py-1.5 sm:text-xs"
          >
            Заработать
          </Link>
        </div>
      </div>
    </div>
  );
}
