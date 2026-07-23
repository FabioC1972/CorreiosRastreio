import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://correiorastreio.com.br"),

  title: {
    default: "Correios Rastreio | Rastreie sua encomenda",
    template: "%s | Correios Rastreio",
  },

  description:
    "Rastreie encomendas dos Correios, compras internacionais e importações gratuitamente.",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Correios Rastreio",
    title: "Correios Rastreio",
    description: "Rastreie sua encomenda em segundos.",
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2463",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-[var(--font-inter)] antialiased">
        <ServiceWorkerRegister />

        <Header />

        <main>{children}</main>

        <Footer />

        {/* Vercel Analytics */}
        <Analytics />

        {/* Core Web Vitals */}
        <SpeedInsights />
      </body>
    </html>
  );
}