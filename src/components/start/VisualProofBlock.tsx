import { LANDING_IMAGES } from "@/lib/start/images";
import { ImageSlot } from "./ui/ImageSlot";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

export function VisualProofBlock() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionTitle>Как это выглядит внутри</SectionTitle>
      <RevealLead className="-mt-4 mb-6 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-8">
        Не теория — личный кабинет, задания, статистика и уровни.
      </RevealLead>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div data-reveal="fade-up">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--acid)] sm:mb-4 sm:text-sm">
            Для бизнеса
          </p>
          <RevealGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" stagger={100}>
            <ImageSlot slot={LANDING_IMAGES.cabinetTask} aspect="phone" priority />
            <ImageSlot slot={LANDING_IMAGES.cabinetStats} aspect="wide" />
          </RevealGrid>
          <p className="mt-2 text-center text-xs text-[var(--text-muted)] sm:mt-3 sm:text-sm">
            Карточка задания и статистика размещений
          </p>
        </div>

        <div data-reveal="fade-up" data-reveal-delay={120}>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-white/80 sm:mb-4 sm:text-sm">
            Для исполнителей
          </p>
          <RevealGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" stagger={100}>
            <ImageSlot slot={LANDING_IMAGES.taskFeed} aspect="wide" />
            <ImageSlot slot={LANDING_IMAGES.levelCards} aspect="wide" />
          </RevealGrid>
          <p className="mt-2 text-center text-xs text-[var(--text-muted)] sm:mt-3 sm:text-sm">
            Лента заданий и уровни аккаунта
          </p>
        </div>
      </div>
    </Section>
  );
}
