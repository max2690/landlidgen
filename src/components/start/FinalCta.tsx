import Link from "next/link";
import { ACCENT_PHRASE, CTA, FINAL_CTA, REGISTER_URLS } from "@/lib/start/config";
import { HighlightStatement, RevealLead, Section } from "./ui/Section";

export function FinalCta() {
  return (
    <Section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-3xl text-center">
        <HighlightStatement>{ACCENT_PHRASE}</HighlightStatement>

        <h2
          data-reveal="blur-up"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl lg:text-5xl"
        >
          {FINAL_CTA.title}
        </h2>
        <RevealLead className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
          {FINAL_CTA.lead}
        </RevealLead>

        <div
          data-reveal="fade-up"
          data-reveal-delay={120}
          className="mt-6 space-y-2 text-sm text-[var(--text-muted)] sm:text-base"
        >
          <p>
            <span className="text-white">Для бизнеса:</span> {FINAL_CTA.businessNote}
          </p>
          <p>
            <span className="text-white">Для исполнителей:</span>{" "}
            {FINAL_CTA.executorNote}
          </p>
        </div>

        <div
          data-reveal="scale-up"
          data-reveal-delay={200}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href={REGISTER_URLS.business}
            className="cta-shine inline-flex items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-5 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] sm:min-w-[280px]"
          >
            {CTA.businessClients}
          </Link>
          <Link
            href={REGISTER_URLS.executor}
            className="cta-outline-shine inline-flex items-center justify-center rounded-xl border border-[var(--border-strong)] px-8 py-5 text-lg font-semibold text-white transition-all hover:border-[var(--acid-muted)] sm:min-w-[280px]"
          >
            {CTA.executor}
          </Link>
        </div>
      </div>
    </Section>
  );
}
