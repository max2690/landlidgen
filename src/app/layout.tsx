import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020817",
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
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
