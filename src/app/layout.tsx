import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lidgen.ru",
  ),
  title: {
    default: "LidGen",
    template: "%s | LidGen",
  },
  description: "Платформа пользовательских рекомендаций",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
