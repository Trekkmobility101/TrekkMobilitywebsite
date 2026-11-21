import type { Metadata, Viewport } from "next";
import "@src/styles/fonts.css";
import "@src/styles/globals.css";
import { type ReactNode } from "react";
import { I18nProvider } from "@src/contexts/I18nContext";
import { Toaster } from "@src/components/ui/sonner";
import DefaultLayout from "@src/layouts/DefaultLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://trekkmobility.com"),
  title: "Trekk Mobility — The Mobility Operating System Built for Africa and Beyond",
  description:
    "Trekk Mobility powers the next generation of shared and rental mobility in Africa and beyond with rider apps, operator dashboards, IoT integration, and automated payments.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Trekk Mobility",
    "African Mobility",
    "Scooter Sharing",
    "EV Fleet Management",
    "IoT Telematics",
    "Fleet Economics",
    "Smart Cities Africa and Beyond",
  ],
  authors: [{ name: "Trekk Mobility Team", url: "https://trekkmobility.com" }],
  openGraph: {
    title: "Trekk Mobility — Mobility Operating System Built for Africa and Beyond",
    description:
      "Powering vehicle sharing, digital rentals, fleet management, ride-hailing, IoT, and analytics across African cities.",
    url: "https://trekkmobility.com",
    siteName: "Trekk Mobility",
    images: [
      {
        url: "/images/logo-main.png",
        width: 1200,
        height: 630,
        alt: "Trekk Mobility Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12D18E",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans antialiased">
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <I18nProvider>
          <DefaultLayout>{children}</DefaultLayout>
          <Toaster position="bottom-right" richColors />
        </I18nProvider>
      </body>
    </html>
  );
}
