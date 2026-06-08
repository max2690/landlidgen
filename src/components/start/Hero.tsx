import Image from "next/image";
import { PathCard, DualPathGrid } from "./ui/PathCard";
import { LANDING_IMAGES } from "@/lib/start/images";
import {
  BUSINESS_PATH,
  EXECUTOR_PATH,
  HERO_DESCRIPTION,
  HERO_HEADLINES,
  HERO_HOOK,
  type HeadlineVariant,
} from "@/lib/start/config";

type HeroProps = {
  headlineVariant: HeadlineVariant;
};

export function Hero({ headlineVariant }: HeroProps) {
  const visual = LANDING_IMAGES.livePeopleHero;

  return (
    <section className="relative isolate overflow-hidden">
      <div
        data-parallax="0.35"
        className="absolute inset-x-0 top-0 h-[420px] sm:h-[min(52vh,560px)]"
      >
        <Image
          src={visual.src!}
          alt={visual.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-0 flex-col items-center justify-center py-10 text-center sm:min-h-[min(52vh,560px)] sm:py-14">
          <h1 className="animate-fade-up max-w-4xl text-[1.65rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-[3.25rem]">
            {HERO_HEADLINES[headlineVariant]}
          </h1>

          <p className="animate-fade-up animation-delay-100 mt-4 text-base font-semibold text-[var(--acid)] sm:mt-5 sm:text-2xl">
            {HERO_HOOK}
          </p>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
            {HERO_DESCRIPTION}
          </p>
        </div>

        <div className="relative pb-8 sm:pb-14">
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
        </div>
      </div>
    </section>
  );
}
