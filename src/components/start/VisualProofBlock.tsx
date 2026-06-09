import { LANDING_IMAGES } from "@/lib/start/images";
import { ImageSlot } from "./ui/ImageSlot";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

const PROOF_ITEMS = [
  {
    slot: LANDING_IMAGES.cabinetTask,
    label: "Карточка задания",
    group: "Для бизнеса",
  },
  {
    slot: LANDING_IMAGES.cabinetStats,
    label: "Статистика размещений",
    group: "Для бизнеса",
  },
  {
    slot: LANDING_IMAGES.taskFeed,
    label: "Лента заданий",
    group: "Для исполнителей",
  },
  {
    slot: LANDING_IMAGES.levelCards,
    label: "Уровни аккаунта",
    group: "Для исполнителей",
  },
] as const;

export function VisualProofBlock() {
  return (
    <Section className="border-t border-[var(--border)]">
      <SectionTitle>Как это выглядит внутри</SectionTitle>
      <RevealLead className="-mt-4 mb-6 text-center text-[var(--text-muted)] sm:-mt-6 sm:mb-8">
        Интерфейс платформы: задания, статистика переходов, уровни исполнителей.
      </RevealLead>

      <RevealGrid
        className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-2"
        stagger={90}
        variant="fade-up"
      >
        {PROOF_ITEMS.map((item) => (
          <div key={item.label} className="flex min-w-0 flex-col">
            <p className="mb-2 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--text-muted)] sm:text-xs">
              <span
                className={
                  item.group === "Для бизнеса"
                    ? "text-[var(--acid)]"
                    : "text-[var(--accent-soft)]"
                }
              >
                {item.group}
              </span>
            </p>
            <ImageSlot
              slot={item.slot}
              aspect="wide"
              fit="cover"
              priority={item.label === "Карточка задания"}
            />
            <p className="mt-2 text-center text-xs text-white/80 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </RevealGrid>
    </Section>
  );
}
