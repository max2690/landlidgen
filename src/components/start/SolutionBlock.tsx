import { PLATFORM_STEPS } from "@/lib/start/config";
import { Section, SectionTitle } from "./ui/Section";

export function SolutionBlock() {
  return (
    <Section id="how-it-works">
      <SectionTitle>Как рекомендация попадает в Stories</SectionTitle>

      <div className="relative">
        {/* Desktop: центральная линия */}
        <div
          className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-px bg-gradient-to-b from-[var(--acid)]/60 via-[var(--acid)]/20 to-transparent lg:block"
          aria-hidden
        />

        {/* Mobile: левая линия */}
        <div
          className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-gradient-to-b from-[var(--acid)]/60 via-[var(--acid)]/25 to-transparent lg:hidden"
          aria-hidden
        />

        <ol className="space-y-3 lg:space-y-0">
          {PLATFORM_STEPS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <li
                key={item.step}
                data-reveal="fade-up"
                data-reveal-delay={index * 70}
                className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:py-3"
              >
                <div
                  className={`pl-10 lg:pl-0 ${isEven ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}`}
                >
                  <span
                    className="absolute left-2.5 top-5 z-10 h-3 w-3 rounded-full bg-[var(--acid)] shadow-[0_0_10px_rgba(0,225,180,0.45)] lg:hidden"
                    aria-hidden
                  />

                  <div
                    className={`card-hover flex w-full items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 sm:gap-4 sm:p-5 lg:inline-flex lg:max-w-md ${
                      isEven ? "lg:ml-auto" : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--acid)]/15 text-sm font-bold text-[var(--acid)] sm:h-10 sm:w-10">
                      {item.step}
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--text-muted)] sm:text-xs">
                        {item.short}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-white sm:text-base">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

                <span
                  className="absolute left-1/2 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--acid)] shadow-[0_0_12px_rgba(0,225,180,0.5)] lg:block"
                  aria-hidden
                />
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
