import Link from "next/link";
import { CTA, EXECUTOR_BENEFITS, REGISTER_URLS } from "@/lib/start/config";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

export function ExecutorEarningsBlock() {
  return (
    <Section
      id="executor"
      className="border-t border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <SectionTitle>Хотите зарабатывать на рекомендациях?</SectionTitle>
      <RevealLead className="-mt-6 mb-8 text-center text-lg text-[var(--text-muted)]">
        Публикуйте рекомендации у себя в Stories и ленте — ваши подписчики и
        знакомые видят задания, вы получаете оплату после модерации.
      </RevealLead>

      <RevealGrid
        className="grid gap-3 sm:grid-cols-2"
        stagger={90}
        variant="scale-up"
      >
        {EXECUTOR_BENEFITS.map((item) => (
          <HoverCard key={item} className="flex items-start gap-3 p-5">
            <span className="text-[var(--acid)]">✔</span>
            <p className="font-medium text-white">{item}</p>
          </HoverCard>
        ))}
      </RevealGrid>

      <p
        data-reveal="fade-up"
        data-reveal-delay={200}
        className="mt-6 text-center text-[var(--text-muted)]"
      >
        Чем активнее выполняете задания — тем больше открывается возможностей.
      </p>

      <div data-reveal="fade-up" data-reveal-delay={280} className="mt-8 text-center">
        <Link
          href={REGISTER_URLS.executor}
          className="cta-shine inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] sm:w-auto sm:min-w-[300px]"
        >
          {CTA.executor}
        </Link>
      </div>
    </Section>
  );
}
