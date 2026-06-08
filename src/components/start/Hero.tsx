import Image from "next/image";
import { Section } from "./ui/Section";
import { PathCard, DualPathGrid } from "./ui/PathCard";
import { LANDING_IMAGES } from "@/lib/start/images";
import {
  BUSINESS_PATH,
  EXECUTOR_PATH,
  HERO_HEADLINES,
  type HeadlineVariant,
} from "@/lib/start/config";

const TRUST_POINTS = [
  "Антифрод и QR-код — без ботов",
  "100–200 просмотров статуса в WhatsApp",
  "Регистрация занимает меньше минуты",
] as const;

type HeroProps = {
  headlineVariant: HeadlineVariant;
};

export function Hero({ headlineVariant }: HeroProps) {
  const visual = LANDING_IMAGES.mainHero;

  return (
    <Section className="pb-12 pt-8 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="animate-fade-up text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO_HEADLINES[headlineVariant]}
          </h1>

          <p className="animate-fade-up animation-delay-100 mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
            LidGen — платформа, где{" "}
            <span className="text-white">компании получают клиентов</span> через
            рекомендации реальных людей, а{" "}
            <span className="text-white">исполнители зарабатывают</span> на
            размещениях в соцсетях.
          </p>
        </div>

        <div className="animate-fade-up animation-delay-200 card-hover group relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-[var(--border)]">
          <div className="relative aspect-[21/9] w-full sm:aspect-[2.4/1]">
            <Image
              src={visual.src!}
              alt={visual.alt}
              fill
              priority
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        <p className="animate-fade-up animation-delay-300 mt-10 text-center text-sm font-medium uppercase tracking-widest text-[var(--text-muted)]">
          Выберите свой путь
        </p>

        <DualPathGrid className="animate-fade-up animation-delay-300 mt-4">
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
            highlighted
          />
        </DualPathGrid>

        <ul className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] sm:text-base"
            >
              <span className="text-[var(--acid)]">✔</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
