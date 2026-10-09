import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Serif_Display, Onest } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { booking, siteConfig } from "./content";
import "./globals.css";

const display = Noto_Serif_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

const body = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description
};

export const viewport: Viewport = {
  themeColor: "#111111"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        <div className="page">{children}</div>
        <SiteFooter />
        <Script src={booking.scriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
