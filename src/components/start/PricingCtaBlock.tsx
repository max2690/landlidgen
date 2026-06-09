import Link from "next/link";
import { CTA, PRICING_POINTS, REGISTER_URLS } from "@/lib/start/config";
import { CountUp } from "./ui/CountUp";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { Section, SectionTitle } from "./ui/Section";

export function PricingCtaBlock() {
  return (
    <Section>
      <SectionTitle>Условия для старта</SectionTitle>

      <RevealGrid
        className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        stagger={80}
        variant="flip-up"
      >
        {PRICING_POINTS.map((point) => (
          <HoverCard key={point.label} accent className="rounded-xl p-4 text-center sm:p-5">
            <p className="text-2xl font-bold text-white sm:text-3xl">
              <CountUp value={point.value} />
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{point.label}</p>
          </HoverCard>
        ))}
      </RevealGrid>

      <div
        data-reveal="fade-up"
        className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <Link
          href={REGISTER_URLS.business}
          className="cta-shine inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] sm:w-auto sm:min-w-[280px]"
        >
          {CTA.businessRegister}
        </Link>
        <Link
          href={REGISTER_URLS.executor}
          className="cta-outline-shine inline-flex w-full items-center justify-center rounded-xl border border-[var(--border-strong)] px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)] sm:w-auto sm:min-w-[280px]"
        >
          {CTA.executor}
        </Link>
      </div>
    </Section>
  );
}
