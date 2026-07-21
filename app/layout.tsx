import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
export const metadata: Metadata = { metadataBase: new URL("https://correiorastreio.com.br"), title: { default: "Correio Rastreio | Rastreie sua encomenda", template: "%s | Correio Rastreio" }, description: "Rastreie encomendas dos Correios, compras internacionais e importações gratuitamente.", openGraph: { type: "website", locale: "pt_BR", siteName: "Correio Rastreio", title: "Correio Rastreio", description: "Rastreie sua encomenda em segundos." }, manifest: "/manifest.json", icons: { icon: "/icon.svg" } };
export const viewport: Viewport = { themeColor: "#0A2463", width: "device-width", initialScale: 1 };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className="font-[var(--font-inter)] antialiased"><ServiceWorkerRegister/><Header/><main>{children}</main><Footer/></body></html>; }
