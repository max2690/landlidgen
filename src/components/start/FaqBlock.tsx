"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/start/config";
import { RevealGrid } from "./ui/RevealGrid";
import { Section, SectionTitle } from "./ui/Section";

export function FaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]" narrow>
      <SectionTitle>Частые вопросы</SectionTitle>

      <RevealGrid className="space-y-3" stagger={70} variant="fade-up">
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
                className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--bg-elevated)] sm:gap-4 sm:px-6 sm:py-5"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-white sm:text-lg">
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
                  <p className="px-4 pb-4 text-sm leading-relaxed text-[var(--text-muted)] sm:px-6 sm:pb-5 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </RevealGrid>
    </Section>
  );
}
