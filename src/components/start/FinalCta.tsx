import { BUSINESS_PATH, EXECUTOR_PATH } from "@/lib/start/config";
import { PathCard, DualPathGrid } from "./ui/PathCard";
import { Section } from "./ui/Section";

export function FinalCta() {
  return (
    <Section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Две стороны одной платформы
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--text-muted)] sm:text-xl">
          Бизнес получает клиентов через рекомендации. Люди зарабатывают на
          размещениях. Регистрация — меньше минуты.
        </p>

        <DualPathGrid className="mt-10">
          <PathCard
            variant="business"
            badge={BUSINESS_PATH.badge}
            title="Запустить задание"
            subtitle="Первое задание — от 2500 ₽. Без абонентки."
            bullets={[
              "10 размещений = 2500 ₽",
              "Оплата только за результат",
              "Запуск сразу после регистрации",
            ]}
            cta={BUSINESS_PATH.cta}
            highlighted
          />
          <PathCard
            variant="executor"
            badge={EXECUTOR_PATH.badge}
            title="Начать зарабатывать"
            subtitle="~1000 ₽ в день на старте. Статусы в соцсетях."
            bullets={[
              "Выкладываете статусы — получаете деньги",
              "С ростом уровня — от 100 000 ₽ и выше",
              "Без вложений, свободный график",
            ]}
            cta={EXECUTOR_PATH.cta}
            highlighted
          />
        </DualPathGrid>
      </div>
    </Section>
  );
}
