import Image from "next/image";
import { PathCard, DualPathGrid } from "./ui/PathCard";
import { LANDING_IMAGES } from "@/lib/start/images";
import {
  ACCENT_PHRASE,
  BUSINESS_PATH,
  EXECUTOR_PATH,
  HERO_HEADLINES,
  HERO_TRUST_POINTS,
  HERO_VARIANTS,
  type HeadlineVariant,
} from "@/lib/start/config";

type HeroProps = {
  headlineVariant: HeadlineVariant;
};

export function Hero({ headlineVariant }: HeroProps) {
  const visual = LANDING_IMAGES.livePeopleHero;
  const copy = HERO_VARIANTS[headlineVariant];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 overflow-hidden">
          <div data-parallax="0.18" className="absolute inset-0">
            <Image
              src={visual.src!}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-[var(--background)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-0 flex-col items-center justify-center py-10 text-center sm:min-h-[min(52vh,560px)] sm:py-14">
          <h1 className="animate-fade-up max-w-4xl text-[1.65rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-[3.25rem]">
            {HERO_HEADLINES[headlineVariant]}
          </h1>

          <p className="animate-fade-up animation-delay-100 mt-4 max-w-3xl text-base font-semibold leading-snug text-[var(--acid)] sm:mt-5 sm:text-xl lg:text-2xl">
            {copy.hook}
          </p>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="relative pb-6 sm:pb-10">
          <DualPathGrid className="mt-2">
            <PathCard
              variant="business"
              id={BUSINESS_PATH.id}
              badge={BUSINESS_PATH.badge}
              title={BUSINESS_PATH.title}
              subtitle={BUSINESS_PATH.subtitle}
              bullets={BUSINESS_PATH.bullets}
              cta={BUSINESS_PATH.cta}
              highlighted
            />
            <PathCard
              variant="executor"
              id={EXECUTOR_PATH.id}
              badge={EXECUTOR_PATH.badge}
              title={EXECUTOR_PATH.title}
              subtitle={EXECUTOR_PATH.subtitle}
              bullets={EXECUTOR_PATH.bullets}
              cta={EXECUTOR_PATH.cta}
              footerNote={EXECUTOR_PATH.incomeNote}
              highlighted
            />
          </DualPathGrid>

          <ul className="animate-fade-up animation-delay-300 mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-white/85 sm:justify-center"
              >
                <span className="shrink-0 text-[var(--acid)]">✔</span>
                {point}
              </li>
            ))}
          </ul>

          <p className="animate-fade-up animation-delay-300 mt-5 text-center text-sm font-semibold text-[var(--acid)] sm:text-base">
            {ACCENT_PHRASE}
          </p>
        </div>
      </div>
    </section>
  );
}
