export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content?: string; // texto completo em markdown — preencha quando escrever o artigo
};

export const articles: Article[] = [
  { slug: "objeto-postado-correios", title: "O que significa 'Objeto Postado' nos Correios?", date: "18 de julho de 2026", excerpt: "Entenda essa primeira etapa do rastreamento e saiba quanto tempo costuma levar até a próxima atualização.", category: "Rastreamento", content: "" },
  { slug: "encomenda-fiscalizacao-aduaneira", title: "Encomenda parada na fiscalização aduaneira: o que fazer?", date: "16 de julho de 2026", excerpt: "Veja por que sua importação pode ficar retida, quais atualizações observar e quando é necessário agir.", category: "Importação", content: "" },
  { slug: "codigo-nao-encontrado", title: "Código de rastreio não encontrado: 7 motivos e soluções", date: "14 de julho de 2026", excerpt: "Código inválido, atraso de sistema ou etiqueta recém-criada? Confira as causas mais comuns.", category: "Ajuda", content: "" },
  { slug: "sedex-vs-pac", title: "SEDEX vs PAC: qual escolher para enviar?", date: "12 de julho de 2026", excerpt: "Compare prazo, preço, cobertura e o tipo de envio mais indicado para cada situação.", category: "Envios", content: "" },
  { slug: "rastrear-aliexpress-brasil", title: "Como rastrear compras do AliExpress no Brasil", date: "10 de julho de 2026", excerpt: "Aprenda a acompanhar sua compra desde a China até a entrega no endereço brasileiro.", category: "Importação", content: "" }
];