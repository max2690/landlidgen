import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({ id, children, className = "", narrow = false }: SectionProps) {
  return (
    <section id={id} className={`py-10 sm:py-16 ${className}`}>
      <div
        className={`mx-auto px-4 sm:px-6 ${narrow ? "max-w-4xl" : "max-w-6xl"}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      data-reveal="blur-up"
      className={`mb-8 text-balance text-center text-2xl font-bold tracking-tight text-white sm:mb-12 sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function RevealLead({
  children,
  className = "",
  delay = 100,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <p
      data-reveal="fade-up"
      data-reveal-delay={delay}
      className={`text-balance text-sm sm:text-base ${className}`}
    >
      {children}
    </p>
  );
}

export function HighlightStatement({ children }: { children: ReactNode }) {
  return (
    <p
      data-reveal="glow-in"
      data-reveal-delay={200}
      className="mt-8 text-balance text-center text-lg font-bold text-[var(--acid)] sm:mt-10 sm:text-3xl lg:text-4xl"
    >
      {children}
    </p>
  );
}

export function RevealCta({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-reveal="fade-up"
      data-reveal-delay={250}
      className={className}
    >
      {children}
    </div>
  );
}
