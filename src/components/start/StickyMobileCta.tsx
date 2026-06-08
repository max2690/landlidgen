"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { REGISTER_URLS } from "@/lib/start/config";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-black/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Link
          href={REGISTER_URLS.business}
          className="flex flex-1 items-center justify-center rounded-xl bg-[var(--acid)] py-3.5 text-sm font-semibold text-black"
        >
          Клиенты
        </Link>
        <Link
          href={REGISTER_URLS.executor}
          className="flex flex-1 items-center justify-center rounded-xl border border-[var(--border-strong)] py-3.5 text-sm font-semibold text-white"
        >
          Заработать
        </Link>
      </div>
    </div>
  );
}
