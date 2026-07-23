export const seoConfig = {
  defaultTitle: "Correios Rastreio",
  titleTemplate: "%s | Correios Rastreio",
  description:
    "Rastreie encomendas dos Correios e acompanhe entregas de diversas transportadoras em um só lugar.",
  keywords: [
    "correios",
    "rastreio",
    "rastreamento",
    "sedex",
    "pac",
    "transportadoras",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
  },
} as const;