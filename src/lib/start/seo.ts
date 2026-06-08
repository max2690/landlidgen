import type { Metadata } from "next";
import { FAQ_ITEMS } from "./config";
import { LANDING_IMAGES } from "./images";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidgen.ru";
const OG_IMAGE = `${SITE_URL}${LANDING_IMAGES.mainHero.src}`;

const START_TITLE =
  "LidGen — клиенты через рекомендации реальных людей | без ботов";
const START_DESCRIPTION =
  "Платформа пользовательских рекомендаций для бизнеса и исполнителей. Живые люди размещают рекомендации в WhatsApp и соцсетях. Антифрод, QR-код, оплата от 250 ₽ за размещение. Регистрация бесплатна.";

export const startMetadata: Metadata = {
  title: START_TITLE,
  description: START_DESCRIPTION,
  keywords: [
    "LidGen",
    "лидген",
    "привлечение клиентов",
    "рекомендации в соцсетях",
    "реклама в WhatsApp",
    "пользовательские рекомендации",
    "заработок на статусах",
    "антифрод реклама",
    "маркетинг для малого бизнеса",
    "лиды без ботов",
    "платформа заданий",
    "UGC маркетинг",
  ],
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${SITE_URL}/start`,
    siteName: "LidGen",
    title: START_TITLE,
    description: START_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: LANDING_IMAGES.mainHero.width,
        height: LANDING_IMAGES.mainHero.height,
        alt: LANDING_IMAGES.mainHero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: START_TITLE,
    description: START_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  other: {
    "yandex-revisit-after": "3 days",
  },
};

export function getStartJsonLd() {
  const siteUrl = SITE_URL;
  const startUrl = `${siteUrl}/start`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "LidGen",
        description: START_DESCRIPTION,
        inLanguage: "ru-RU",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "LidGen",
        url: siteUrl,
        logo: `${siteUrl}/favicon.ico`,
        sameAs: ["https://lid-gen.pro"],
        description:
          "Платформа пользовательских рекомендаций для бизнеса и исполнителей",
      },
      {
        "@type": "WebPage",
        "@id": `${startUrl}/#webpage`,
        url: startUrl,
        name: START_TITLE,
        description: START_DESCRIPTION,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "ru-RU",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${startUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "LidGen — старт",
            item: startUrl,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#application`,
        name: "LidGen",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "RUB",
          description: "Бесплатная регистрация, оплата от 250 ₽ за размещение",
          url: "/register/business",
        },
        description: START_DESCRIPTION,
        featureList: [
          "Рекомендации в WhatsApp и соцсетях",
          "Антифрод и уникальный QR-код",
          "Оплата только за размещения",
          "Заработок для исполнителей",
        ],
      },
      {
        "@type": "Service",
        "@id": `${startUrl}/#service`,
        name: "Привлечение клиентов через рекомендации LidGen",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "RU",
        serviceType: "Маркетинг и привлечение клиентов",
        description:
          "Компании создают задания, исполнители размещают рекомендации в мессенджерах. Без ботов, с антифрод-проверкой.",
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "RUB",
          description: "Пакет из 10 размещений, до 250 ₽ за размещение",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${startUrl}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
