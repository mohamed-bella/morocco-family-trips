import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Header from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { BRAND, SITE_URL, organizationJsonLd } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF5EA",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BRAND,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
