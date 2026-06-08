import { StickyBanner } from "@/components/start/StickyBanner";
import { LogoHeader } from "@/components/start/LogoHeader";
import { Hero } from "@/components/start/Hero";
import { StatsBar } from "@/components/start/StatsBar";
import { PainBlock } from "@/components/start/PainBlock";
import { SolutionBlock } from "@/components/start/SolutionBlock";
import { AntifraudBlock } from "@/components/start/AntifraudBlock";
import { VisualProofBlock } from "@/components/start/VisualProofBlock";
import { ComparisonBlock } from "@/components/start/ComparisonBlock";
import { PricingCtaBlock } from "@/components/start/PricingCtaBlock";
import { ExecutorEarningsBlock } from "@/components/start/ExecutorEarningsBlock";
import { AudienceBlock } from "@/components/start/AudienceBlock";
import { TestimonialsBlock } from "@/components/start/TestimonialsBlock";
import { FaqBlock } from "@/components/start/FaqBlock";
import { FinalCta } from "@/components/start/FinalCta";
import { SiteFooter } from "@/components/start/SiteFooter";
import { StickyMobileCta } from "@/components/start/StickyMobileCta";
import { ScrollProgress } from "@/components/start/ui/ScrollProgress";
import { ScrollReveal } from "@/components/start/ui/ScrollReveal";
import {
  resolveHeadlineVariant,
  resolveStickyVariant,
} from "@/lib/start/config";
import { getStartJsonLd, startMetadata } from "@/lib/start/seo";

export const metadata = startMetadata;

type StartPageProps = {
  searchParams: Promise<{
    headline?: string;
    sticky?: string;
  }>;
};

export default async function StartPage({ searchParams }: StartPageProps) {
  const params = await searchParams;

  const headlineVariant = resolveHeadlineVariant(
    params.headline,
    process.env.NEXT_PUBLIC_HERO_VARIANT,
  );

  const stickyVariant = resolveStickyVariant(
    params.sticky,
    process.env.NEXT_PUBLIC_STICKY_VARIANT,
  );

  const jsonLd = getStartJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollProgress />
      <ScrollReveal />

      <div className="min-h-screen bg-black pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] text-white md:pb-0">
        <StickyBanner variant={stickyVariant} />
        <LogoHeader />
        <main>
          <Hero headlineVariant={headlineVariant} />
          <StatsBar />
          <PainBlock />
          <SolutionBlock />
          <AntifraudBlock />
          <VisualProofBlock />
          <ComparisonBlock />
          <PricingCtaBlock />
          <ExecutorEarningsBlock />
          <AudienceBlock />
          <TestimonialsBlock />
          <FaqBlock />
          <FinalCta />
        </main>
        <SiteFooter />
        <StickyMobileCta />
      </div>
    </>
  );
}
