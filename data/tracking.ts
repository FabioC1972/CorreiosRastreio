export type TrackingStatus = {
  date: string;
  time: string;
  status: string;
  location: string;
  detail?: string;
};

export type TrackingResult = {
  code: string;
  currentStatus: "Entregue" | "Em trânsito" | "Aguardando";
  estimatedDelivery?: string;
  events: TrackingStatus[];
};

export const trackingMocks: Record<string, TrackingResult> = {
  AA123456785BR: {
    code: "AA123456785BR",
    currentStatus: "Entregue",
    events: [
      { date: "18/07/2026", time: "14:32", status: "Objeto entregue ao destinatário", location: "Amparo - SP", detail: "Entrega concluída com sucesso." },
      { date: "18/07/2026", time: "09:10", status: "Objeto saiu para entrega ao destinatário", location: "Unidade de Distribuição, Amparo - SP" },
      { date: "17/07/2026", time: "21:48", status: "Objeto em transferência", location: "Centro de Tratamento, Campinas - SP" },
      { date: "16/07/2026", time: "18:05", status: "Objeto postado", location: "Agência dos Correios, São Paulo - SP" }
    ]
  },
  BB987654321BR: {
    code: "BB987654321BR",
    currentStatus: "Em trânsito",
    estimatedDelivery: "22/07/2026",
    events: [
      { date: "20/07/2026", time: "07:42", status: "Objeto em transferência", location: "Centro de Tratamento, Curitiba - PR", detail: "Encaminhado para a unidade de distribuição." },
      { date: "19/07/2026", time: "22:18", status: "Objeto recebido pelos Correios", location: "Unidade Logística, Curitiba - PR" },
      { date: "19/07/2026", time: "10:03", status: "Objeto postado", location: "Agência dos Correios, Florianópolis - SC" }
    ]
  },
  CC111222333BR: {
    code: "CC111222333BR",
    currentStatus: "Aguardando",
    events: [
      { date: "20/07/2026", time: "11:15", status: "Objeto em fiscalização aduaneira", location: "Unidade de Tratamento Internacional, Curitiba - PR", detail: "Aguarde nova atualização no rastreamento." },
      { date: "18/07/2026", time: "03:22", status: "Objeto recebido no Brasil", location: "Curitiba - PR" },
      { date: "12/07/2026", time: "19:40", status: "Objeto encaminhado ao país de destino", location: "Shenzhen, China" }
    ]
  }
};
