import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ScrollTopButton } from "@/components/layout/scroll-top-button";
import { SignatureSplash } from "@/components/layout/signature-splash";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/content/site";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} className={inter.variable}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(sessionStorage.getItem("ba-imza-giris")==="1")document.documentElement.dataset.giris="goruldu"}catch(e){}',
          }}
        />
        <SignatureSplash />
        <a href="#icerik" className="skip-link">
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollTopButton />
      </body>
    </html>
  );
}
