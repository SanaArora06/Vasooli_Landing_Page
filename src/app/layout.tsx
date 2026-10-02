import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StartGuide } from "@/components/start-guide";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasooli — reimbursement support inside Polifyx",
  description:
    "Vasooli is a proposed pilot inside Polifyx by Insurance Samadhan. It helps families organise healthcare documents, prepare reimbursement submissions and understand settlement deductions. Competition concept.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-ink">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1 scroll-mt-48">
          {children}
        </main>
        <SiteFooter />
        <StartGuide />
        <MobileCta />
      </body>
    </html>
  );
}
