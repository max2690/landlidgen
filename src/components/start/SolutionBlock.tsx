import { BUSINESS_STEPS, EXECUTOR_STEPS } from "@/lib/start/config";
import { DualPathGrid } from "./ui/PathCard";
import { HoverCard } from "./ui/HoverCard";
import { Section, SectionTitle } from "./ui/Section";

type StepIconType =
  | (typeof BUSINESS_STEPS)[number]["icon"]
  | (typeof EXECUTOR_STEPS)[number]["icon"];

function StepIcon({ type }: { type: StepIconType }) {
  const className = "h-6 w-6 text-[var(--acid)]";

  switch (type) {
    case "task":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.9.337 2.662.89M12 18.75V21m0-2.25h4.5m-4.5 0h-4.5" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "share":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0 12.814a2.25 2.25 0 100-2.186m0 2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314" />
        </svg>
      );
    case "eye":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "payment":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      );
  }
}

function StepsColumn({
  title,
  badge,
  steps,
  accent,
}: {
  title: string;
  badge: string;
  steps: typeof BUSINESS_STEPS | typeof EXECUTOR_STEPS;
  accent: boolean;
}) {
  return (
    <HoverCard accent={accent} className="p-6 sm:p-8">
      <span
        className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          accent
            ? "bg-[var(--acid)]/15 text-[var(--acid)]"
            : "bg-white/5 text-[var(--text-muted)]"
        }`}
      >
        {badge}
      </span>
      <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">{title}</h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.step} className="relative">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--acid)]/10">
                <StepIcon type={step.icon} />
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--acid)]">
                  Шаг {step.step}
                </span>
                <p className="mt-1 font-medium text-white">{step.title}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="ml-5 mt-2 h-4 border-l border-dashed border-[var(--border-strong)]" />
            )}
          </div>
        ))}
      </div>
    </HoverCard>
  );
}

export function SolutionBlock() {
  return (
    <Section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <SectionTitle>Как работает LidGen</SectionTitle>

      <p className="-mt-6 mb-10 text-center text-lg text-[var(--text-muted)]">
        Компания создаёт задание → исполнители размещают → бизнес получает
        клиентов, люди — оплату
      </p>

      <DualPathGrid>
        <StepsColumn
          title="Путь бизнеса"
          badge="Для бизнеса"
          steps={BUSINESS_STEPS}
          accent
        />
        <StepsColumn
          title="Путь исполнителя"
          badge="Для исполнителей"
          steps={EXECUTOR_STEPS}
          accent={false}
        />
      </DualPathGrid>
    </Section>
  );
}
