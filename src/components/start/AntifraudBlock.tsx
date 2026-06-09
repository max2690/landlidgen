import { ANTIFRAUD_FEATURES, ANTIFRAUD_LEAD } from "@/lib/start/config";
import { LANDING_IMAGES } from "@/lib/start/images";
import Image from "next/image";
import { BlockCta } from "./ui/BlockCta";
import { HoverCard } from "./ui/HoverCard";
import { RevealGrid } from "./ui/RevealGrid";
import { Section } from "./ui/Section";

export function AntifraudBlock() {
  const visual = LANDING_IMAGES.mainHero;

  return (
    <Section className="border-t border-[var(--border)]">
      <div
        data-reveal="scale-up"
        className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--acid)]/25"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={visual.src!}
            alt=""
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <h2
            data-reveal="blur-up"
            className="text-balance text-center text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Живые аккаунты. Проверка до оплаты.
          </h2>

          <p
            data-reveal="fade-up"
            data-reveal-delay={100}
            className="mx-auto mt-4 max-w-2xl text-balance text-center text-sm text-white/85 sm:mt-5 sm:text-lg"
          >
            {ANTIFRAUD_LEAD}
          </p>

          <RevealGrid
            className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            stagger={90}
            variant="fade-up"
          >
            {ANTIFRAUD_FEATURES.map((feature) => (
              <HoverCard
                key={feature.title}
                accent={feature.accent}
                className="border-white/10 bg-black/45 p-4 backdrop-blur-md sm:p-5"
              >
                <span className="mb-2 block text-2xl">{feature.icon}</span>
                <h3 className="font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {feature.text}
                </p>
              </HoverCard>
            ))}
          </RevealGrid>
        </div>
      </div>

      <BlockCta variant="business" className="mt-8" />
    </Section>
  );
}
