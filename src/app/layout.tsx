import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flatpoint",
  description:
    "FLATPOINT — это управляющая компания, специализирующаяся на посуточной аренде домов в Подмосковье и квартир в Москве. Наша миссия — предоставить вам комфортное жильё, где каждая деталь продумана с любовью и заботой. Уже много лет мы создаем атмосферу уюта, чтобы Вы могли полноценно насладиться отдыхом. Мы тщательно подбираем каждый объект размещения, чтобы обеспечить высокие стандарты качества.",
};

const inter = Inter({ subsets: ["latin", "cyrillic"] }); // Inter для всего сайта
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat", // Используем CSS переменную для Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable}`}>
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-clean-space`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
