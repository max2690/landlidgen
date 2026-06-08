import { ANTIFRAUD_FEATURES } from "@/lib/start/config";
import { LANDING_IMAGES } from "@/lib/start/images";
import Image from "next/image";
import { BlockCta } from "./ui/BlockCta";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { RevealLead, Section, SectionTitle } from "./ui/Section";

export function AntifraudBlock() {
  const visual = LANDING_IMAGES.mainHero;

  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Никаких ботов — только живые люди</SectionTitle>
      <RevealLead className="-mt-6 mb-8 text-center text-lg text-[var(--text-muted)]">
        Каждое размещение проходит проверку. Уникальный QR-код и антифрод
        помогают отсекать накрутку.
      </RevealLead>

      <div
        data-reveal="scale-up"
        data-reveal-delay={100}
        className="card-hover group relative mb-8 overflow-hidden rounded-2xl border border-[var(--acid)]/25"
      >
        <div className="relative aspect-[4/3] w-full sm:aspect-[21/9]">
          <Image
            src={visual.src!}
            alt={visual.alt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>
      </div>

      <RevealGrid
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        stagger={90}
        variant="scale-up"
      >
        {ANTIFRAUD_FEATURES.map((feature) => (
          <HoverCard
            key={feature.title}
            accent={feature.accent}
            className="p-5"
          >
            <span className="mb-2 block text-2xl">{feature.icon}</span>
            <h3 className="font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              {feature.text}
            </p>
          </HoverCard>
        ))}
      </RevealGrid>

      <BlockCta variant="business" className="mt-8" />
    </Section>
  );
}
