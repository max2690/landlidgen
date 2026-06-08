import type { Metadata } from "next";
import { FAQ_ITEMS } from "./config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidgen.ru";

export const startMetadata: Metadata = {
  title: "LidGen — клиенты через рекомендации реальных людей",
  description:
    "Платформа пользовательских рекомендаций. Компании создают задания, люди размещают рекомендации в соцсетях. Оплата только за результат. Регистрация бесплатна.",
  keywords: [
    "рекомендации",
    "привлечение клиентов",
    "реклама",
    "соцсети",
    "LidGen",
    "платформа заданий",
    "маркетинг",
  ],
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${SITE_URL}/start`,
    siteName: "LidGen",
    title: "LidGen — клиенты через рекомендации реальных людей",
    description:
      "Люди доверяют людям, не рекламе. Получайте рекомендации от обычных пользователей и платите только за выполненные размещения.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LidGen — клиенты через рекомендации",
    description:
      "Платформа пользовательских рекомендаций. Регистрация бесплатна, первое задание от 2500 ₽.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function getStartJsonLd() {
  const siteUrl = SITE_URL;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LidGen",
      url: siteUrl,
      description:
        "Платформа пользовательских рекомендаций для бизнеса и исполнителей",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "LidGen",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "RUB",
        description: "Бесплатная регистрация, оплата от 250 ₽ за размещение",
      },
      description:
        "Компании создают задания. Пользователи размещают рекомендации в соцсетях. Оплата только за результат.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "LidGen — клиенты через рекомендации",
      url: `${siteUrl}/start`,
      description:
        "Получайте клиентов через рекомендации реальных людей вместо дорогой рекламы",
      isPartOf: {
        "@type": "WebSite",
        name: "LidGen",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
