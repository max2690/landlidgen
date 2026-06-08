import { LANDING_IMAGES } from "@/lib/start/images";
import { DualPathGrid } from "./ui/PathCard";
import { ImageSlot } from "./ui/ImageSlot";
import { Section, SectionTitle } from "./ui/Section";

export function VisualProofBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Как это выглядит</SectionTitle>
      <p className="-mt-6 mb-10 text-center text-lg text-[var(--text-muted)]">
        Не абстракция — реальный кабинет и реальные статусы в соцсетях
      </p>

      <DualPathGrid className="mb-8">
        <div>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--acid)]">
            Для бизнеса
          </p>
          <ImageSlot
            slot={LANDING_IMAGES.cabinetTask}
            aspect="phone"
            priority
          />
          <p className="mt-4 text-center text-sm text-[var(--text-muted)]">
            Создаёте задание → видите каждое размещение и статистику
          </p>
        </div>

        <div>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-white/70">
            Для исполнителей
          </p>
          <ImageSlot slot={LANDING_IMAGES.socialStatus} aspect="phone" />
          <p className="mt-4 text-center text-sm text-[var(--text-muted)]">
            Выкладываете статус у себя — получаете оплату
          </p>
        </div>
      </DualPathGrid>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Статистика
          </p>
          <ImageSlot slot={LANDING_IMAGES.cabinetStats} aspect="wide" />
        </div>
        <div>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Задания
          </p>
          <ImageSlot slot={LANDING_IMAGES.taskFeed} aspect="wide" />
        </div>
        <div>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Уровни
          </p>
          <ImageSlot slot={LANDING_IMAGES.levelCards} aspect="wide" />
        </div>
      </div>
    </Section>
  );
}
