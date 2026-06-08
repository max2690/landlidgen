import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация",
  robots: { index: false },
};

type RegisterPageProps = {
  searchParams: Promise<{
    role?: string;
  }>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;
  const isExecutor = params.role === "executor";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">
          {isExecutor ? "Регистрация исполнителя" : "Регистрация для бизнеса"}
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          Страница регистрации в разработке. Подключите ваш auth-провайдер или
          форму регистрации к этому маршруту.
        </p>
        <Link
          href="/start"
          className="mt-8 inline-flex rounded-xl bg-[var(--acid)] px-6 py-3 font-semibold text-black transition-colors hover:bg-[var(--acid-hover)]"
        >
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
