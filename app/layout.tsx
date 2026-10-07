import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { booking, siteConfig } from "./site-config";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description
};

export const viewport: Viewport = {
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script src={booking.scriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
