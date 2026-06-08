"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/start/config";
import { Section, SectionTitle } from "./ui/Section";

export function FaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]" narrow>
      <SectionTitle>Частые вопросы</SectionTitle>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="card-hover overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--acid-muted)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--bg-elevated)]"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-white">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-[var(--acid)] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
