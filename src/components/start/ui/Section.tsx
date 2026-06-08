import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({ id, children, className = "", narrow = false }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
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
      className={`mb-10 text-center text-3xl font-bold tracking-tight text-white sm:mb-12 sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function HighlightStatement({ children }: { children: ReactNode }) {
  return (
    <p className="mt-10 text-center text-2xl font-bold text-[var(--acid)] sm:text-3xl lg:text-4xl">
      {children}
    </p>
  );
}
