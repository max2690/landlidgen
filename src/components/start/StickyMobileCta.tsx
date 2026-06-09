"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { REGISTER_URLS } from "@/lib/start/config";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[var(--background)]/95 px-3 pt-2 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Link
          href={REGISTER_URLS.business}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-xl bg-[var(--acid)] text-sm font-semibold text-black active:scale-[0.98]"
        >
          Клиенты
        </Link>
        <Link
          href={REGISTER_URLS.executor}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-xl border border-[var(--border-strong)] text-sm font-semibold text-white active:scale-[0.98]"
        >
          Заработать
        </Link>
      </div>
    </div>
  );
}
