import Image from "next/image";
import Link from "next/link";
import { ANTIFRAUD_FEATURES, REGISTER_URLS } from "@/lib/start/config";
import { LANDING_IMAGES } from "@/lib/start/images";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

export function AntifraudBlock() {
  const visual = LANDING_IMAGES.livePeopleHero;

  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Никаких ботов — только живые люди</SectionTitle>
      <p className="-mt-6 mb-8 text-center text-lg text-[var(--text-muted)] sm:text-xl">
        Рекомендация от друга, не баннер от бота. Уникальный QR-код и антифрод
        на каждом размещении.
      </p>

      <div className="card-hover group relative mb-10 overflow-hidden rounded-2xl border border-[var(--acid)]/25 shadow-[0_0_40px_rgba(191,255,0,0.06)]">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={visual.src!}
            alt={visual.alt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ANTIFRAUD_FEATURES.map((feature) => (
          <HoverCard
            key={feature.title}
            accent={feature.accent}
            className="p-5 sm:p-6"
          >
            <span className="mb-3 block text-2xl">{feature.icon}</span>
            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
              {feature.text}
            </p>
          </HoverCard>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={REGISTER_URLS.business}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--acid)] px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-[var(--acid-hover)] hover:shadow-[0_0_32px_rgba(191,255,0,0.35)] sm:w-auto sm:min-w-[300px]"
        >
          Получить живые рекомендации
        </Link>
      </div>
    </Section>
  );
}
