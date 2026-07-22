/* app/page.tsx */

type IconProps = {
  className?: string;
};

function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3 4 6v5c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function GlobeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9" />
      <path d="M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-2.9L6.4 20l1.1-6.2-4.6-4.4 6.3-.9L12 2.8Z" />
    </svg>
  );
}

function ListIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="M4 6h.01" />
      <path d="M4 12h.01" />
      <path d="M4 18h.01" />
    </svg>
  );
}

function BoltIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

function ChevronIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PackageIllustration() {
  return (
    <div className="relative flex h-[290px] items-center justify-center">
      <div className="absolute h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative rotate-[-6deg]">
        <div className="h-44 w-44 rounded-[28px] border border-orange-200 bg-gradient-to-br from-orange-100 via-orange-300 to-orange-500 p-6 shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
          <div className="mx-auto h-8 w-20 rounded-b-lg bg-orange-100/80" />

          <div className="mt-8 space-y-3">
            <div className="h-3 w-20 rounded-full bg-yellow-100/80" />
            <div className="h-3 w-24 rounded-full bg-yellow-100/70" />
            <div className="h-3 w-16 rounded-full bg-yellow-100/60" />
          </div>

          <div className="mt-5 text-right text-lg font-black text-blue-900">
            Correios
          </div>
        </div>
      </div>
    </div>
  );
}

function AdPlaceholder({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-5 text-center text-slate-500 ${className}`}
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}

const carriers = [
  {
    name: "Correios",
    mark: "📦",
    status: "Disponível",
    available: true,
  },
  {
    name: "Jadlog",
    mark: "◆",
    status: "Em breve",
    available: false,
  },
  {
    name: "FedEx",
    mark: "FedEx",
    status: "Em breve",
    available: false,
  },
  {
    name: "DHL",
    mark: "DHL",
    status: "Em breve",
    available: false,
  },
  {
    name: "UPS",
    mark: "UPS",
    status: "Em breve",
    available: false,
  },
  {
    name: "Loggi",
    mark: "➤",
    status: "Em breve",
    available: false,
  },
  {
    name: "Azul Cargo",
    mark: "Azul",
    status: "Em breve",
    available: false,
  },
  {
    name: "Mercado Envios",
    mark: "ML",
    status: "Em breve",
    available: false,
  },
];

const benefits = [
  {
    title: "Consulta rápida",
    text: "Resultado imediato com dados atualizados.",
    icon: <BoltIcon className="h-6 w-6" />,
    style: "bg-orange-50 text-orange-500",
  },
  {
    title: "Privacidade",
    text: "Seu código não é armazenado em nossos servidores.",
    icon: <ShieldIcon className="h-6 w-6" />,
    style: "bg-blue-50 text-blue-700",
  },
  {
    title: "Timeline organizada",
    text: "Acompanhe cada etapa da sua encomenda.",
    icon: <ListIcon className="h-6 w-6" />,
    style: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Envios internacionais",
    text: "Rastreamento completo para o Brasil e exterior.",
    icon: <GlobeIcon className="h-6 w-6" />,
    style: "bg-blue-50 text-blue-700",
  },
];

const faqs = [
  {
    question: "Como rastrear uma encomenda dos Correios?",
    answer:
      "Digite o código de rastreamento no campo de busca e clique em Rastrear. O código normalmente possui letras e números.",
  },
  {
    question: "Quanto tempo demora a entrega?",
    answer:
      "O prazo depende da modalidade de envio, da origem, do destino e das atualizações operacionais da transportadora.",
  },
  {
    question: "O código de rastreamento não funciona. O que fazer?",
    answer:
      "Confira se o código foi digitado corretamente. Alguns códigos podem levar algumas horas para aparecer depois da postagem.",
  },
  {
    question: "Posso rastrear pacotes internacionais?",
    answer:
      "Sim. Quando a transportadora disponibiliza eventos internacionais, eles podem ser apresentados durante a consulta.",
  },
];

const articles = [
  {
    category: "Dicas",
    title: "Como rastrear encomendas dos Correios passo a passo",
    time: "5 min de leitura",
    image: "📱",
  },
  {
    category: "Internacional",
    title: "Encomenda internacional: como funciona o rastreamento",
    time: "7 min de leitura",
    image: "✈️",
  },
  {
    category: "Guia",
    title: "O que significa cada status do rastreamento?",
    time: "6 min de leitura",
    image: "🔎",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      {/*
        O CABEÇALHO GLOBAL JÁ EXISTE NO layout.tsx.
        NÃO CRIAMOS OUTRO CABEÇALHO NESTE ARQUIVO.
      */}

      {/* RASTREAMENTO RÁPIDO */}
      <section className="border-b border-slate-200 bg-blue-50/70">
        <form
          action="/rastrear"
          method="get"
          className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-3 sm:px-6 md:flex-row lg:px-8"
        >
          <label
            htmlFor="quick-tracking"
            className="flex shrink-0 items-center gap-2 text-sm font-bold text-blue-950"
          >
            <SearchIcon className="h-4 w-4" />
            Rastreamento rápido:
          </label>

          <input
            id="quick-tracking"
            name="codigo"
            type="text"
            placeholder="Digite seu código de rastreamento"
            className="h-11 w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-orange-500 px-8 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 md:w-auto"
          >
            Rastrear
          </button>

          <div className="hidden shrink-0 items-center gap-4 text-xs font-semibold text-blue-950 xl:flex">
            <span className="flex items-center gap-1">
              <ShieldIcon className="h-4 w-4 text-blue-600" />
              Gratuito
            </span>

            <span className="flex items-center gap-1">
              <ShieldIcon className="h-4 w-4 text-blue-600" />
              Seguro
            </span>

            <span className="flex items-center gap-1">
              <ShieldIcon className="h-4 w-4 text-blue-600" />
              Sem cadastro
            </span>
          </div>
        </form>
      </section>

      {/* ADSENSE PRINCIPAL + PARCEIRO FIXO */}
      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_180px] lg:px-8">
        <AdPlaceholder
          title="Anúncio Google"
          description="AdSense 970 × 90"
          className="min-h-[90px]"
        />

        <a
          href="#"
          aria-label="Conhecer parceiro oficial"
          className="flex min-h-[90px] flex-col items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-950 to-blue-700 px-4 text-center text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-xs font-semibold text-blue-200">
            Parceiro oficial
          </p>

          <p className="mt-1 text-base font-black">Espaço Premium</p>

          <span className="mt-2 text-[11px] font-bold text-orange-300">
            Conhecer parceiro →
          </span>
        </a>
      </section>

      {/* HERO */}
      <section
        id="rastrear"
        className="relative overflow-hidden bg-gradient-to-br from-[#06265c] via-[#073c99] to-[#087bd2]"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute right-20 top-0 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_320px] lg:px-8 lg:py-16">
          <div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl">
              Acompanhe sua encomenda em{" "}
              <span className="text-orange-400">tempo real.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Consulte códigos de rastreamento dos Correios e de outras
              transportadoras de forma rápida, gratuita e segura.
            </p>

            <form
              action="/rastrear"
              method="get"
              className="mt-7 rounded-2xl bg-white p-3 shadow-2xl shadow-black/20"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4">
                  <SearchIcon className="h-6 w-6 text-slate-400" />

                  <input
                    name="codigo"
                    type="text"
                    placeholder="Digite seu código de rastreamento"
                    className="h-14 w-full bg-transparent text-base outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-base font-black text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105"
                >
                  Rastrear
                </button>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-x-7 gap-y-2 border-t border-slate-100 pt-3 text-xs font-bold text-blue-950">
                <span>✓ Gratuito</span>
                <span>✓ Sem cadastro</span>
                <span>✓ 100% seguro</span>
              </div>
            </form>
          </div>

          <PackageIllustration />

          <div className="rounded-2xl bg-white p-5 shadow-2xl shadow-black/25">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Exemplo de rastreamento
                </p>

                <p className="mt-1 text-sm font-black text-blue-950">
                  AA123456785BR
                </p>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">
                ✓ Entregue
              </span>
            </div>

            <div className="mt-5 space-y-5">
              {[
                {
                  title: "Objeto entregue ao destinatário",
                  date: "18/07/2026 14:32",
                  city: "Amparo - SP",
                  done: true,
                },
                {
                  title: "Saiu para entrega",
                  date: "18/07/2026 09:10",
                  city: "Amparo - SP",
                  done: true,
                },
                {
                  title: "Em trânsito",
                  date: "17/07/2026 21:48",
                  city: "Campinas - SP",
                  done: false,
                },
                {
                  title: "Postado",
                  date: "16/07/2026 18:05",
                  city: "São Paulo - SP",
                  done: false,
                },
              ].map((event, index) => (
                <div key={event.title} className="relative flex gap-3">
                  {index !== 3 && (
                    <div className="absolute left-[11px] top-6 h-12 w-px bg-slate-200" />
                  )}

                  <div
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white ${
                      event.done ? "bg-emerald-500" : "bg-blue-700"
                    }`}
                  >
                    ✓
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      {event.title}
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      {event.date}
                    </p>

                    <p className="text-[10px] font-semibold text-slate-700">
                      {event.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/rastrear"
              className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-blue-700"
            >
              Ver detalhes completos
              <ChevronIcon className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
            <UsersIcon className="h-8 w-8 text-blue-900" />

            <div>
              <p className="font-black text-blue-950">500 mil+</p>
              <p className="text-xs text-slate-500">Consultas realizadas</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <StarIcon className="h-8 w-8 text-yellow-500" />

            <div>
              <p className="font-black text-blue-950">4,9/5</p>
              <p className="text-xs text-slate-500">
                Avaliação dos usuários
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <GlobeIcon className="h-8 w-8 text-blue-900" />

            <div>
              <p className="font-black text-blue-950">Rastreamento</p>
              <p className="text-xs text-slate-500">
                Nacional e internacional
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ClockIcon className="h-8 w-8 text-blue-900" />

            <div>
              <p className="font-black text-blue-950">Atualizações</p>
              <p className="text-xs text-slate-500">Em tempo real</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIRO PREMIUM 01 */}
      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_150px] lg:px-8">
        <a
          href="#"
          className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-r from-blue-950 to-blue-700 px-6 py-6 text-white shadow-lg sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-6">
            <div className="text-center text-2xl font-black leading-none">
              melhor
              <br />
              envio
            </div>

            <div>
              <h2 className="text-xl font-black sm:text-2xl">
                Economize no frete
              </h2>

              <p className="mt-1 text-blue-100">
                Envie com as melhores transportadoras.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm font-semibold text-yellow-300">
            <span>✓ Até 80% de desconto</span>
            <span>✓ Sem mensalidade</span>
            <span>✓ Integração com e-commerce</span>
          </div>

          <span className="rounded-xl bg-yellow-400 px-5 py-3 text-center text-sm font-black text-blue-950">
            Calcular frete grátis
          </span>
        </a>

        <div className="flex min-h-[100px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 px-4 text-center text-xs font-semibold text-slate-600">
          Parceiro Fixo #1
          <br />
          Melhor Envio
        </div>
      </section>

      {/* TRANSPORTADORAS */}
      <section
        id="transportadoras"
        className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8"
      >
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-blue-950">
              Transportadoras
            </h2>

            <p className="text-sm text-slate-500">
              Integrações disponíveis e em constante expansão.
            </p>
          </div>

          <a
            href="/transportadoras"
            className="hidden items-center gap-1 text-xs font-bold text-blue-700 sm:flex"
          >
            Ver todas
            <ChevronIcon className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {carriers.map((carrier) => (
            <article
              key={carrier.name}
              className="flex min-h-[110px] flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex min-h-10 items-center justify-center text-lg font-black text-blue-900">
                {carrier.mark}
              </div>

              <p className="text-xs font-black text-slate-800">
                {carrier.name}
              </p>

              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                  carrier.available
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {carrier.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ADSENSE 02 */}
      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <AdPlaceholder
          title="Anúncio Google"
          description="AdSense responsivo — entre transportadoras e benefícios"
          className="min-h-[110px]"
        />
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="sobre"
        className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-black tracking-tight text-blue-950">
          Por que rastrear com a gente?
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${benefit.style}`}
              >
                {benefit.icon}
              </div>

              <div>
                <h3 className="text-sm font-black text-blue-950">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {benefit.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ, ARTIGOS E SIDEBAR */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-3 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
        <div className="space-y-6">
          {/* FAQ */}
          <section
            id="faq"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-blue-950">
                Dúvidas sobre o rastreamento?
              </h2>

              <a
                href="/faq"
                className="flex items-center gap-1 text-xs font-bold text-blue-700"
              >
                Ver todas
                <ChevronIcon className="h-3 w-3" />
              </a>
            </div>

            <div className="space-y-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-slate-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-bold text-slate-900">
                    {faq.question}

                    <span className="text-lg text-blue-800 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ADSENSE ANTES DOS ARTIGOS */}
          <AdPlaceholder
            title="Anúncio Google"
            description="AdSense responsivo — antes dos artigos"
            className="min-h-[100px]"
          />

          {/* ARTIGOS */}
          <section id="artigos">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-black text-blue-950">
                Artigos em destaque
              </h2>

              <a
                href="/blog"
                className="flex items-center gap-1 text-xs font-bold text-blue-700"
              >
                Ver todos
                <ChevronIcon className="h-3 w-3" />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href="/blog"
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-100 via-slate-100 to-orange-100 text-5xl">
                    {article.image}
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
                      {article.category}
                    </span>

                    <h3 className="mt-1 text-sm font-black leading-5 text-slate-900">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-500">
                      {article.time}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 3 ADSENSE NO ESPAÇO VAZIO */}
          <section
            aria-label="Publicidade"
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AdPlaceholder
              title="Anúncio Google"
              description="AdSense responsivo #1"
              className="min-h-[250px]"
            />

            <AdPlaceholder
              title="Anúncio Google"
              description="AdSense responsivo #2"
              className="min-h-[250px]"
            />

            <AdPlaceholder
              title="Anúncio Google"
              description="AdSense responsivo #3"
              className="min-h-[250px] sm:col-span-2 xl:col-span-1"
            />
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <AdPlaceholder
            title="Anúncio Google"
            description="AdSense 300 × 250 — sidebar"
            className="min-h-[250px]"
          />

          <a
            href="#"
            className="relative block min-h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-600 p-6 text-white shadow-xl"
          >
            <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-orange-400/30 blur-2xl" />

            <div className="relative">
              <div className="text-3xl font-black">Kangu</div>

              <h3 className="mt-8 text-2xl font-black leading-tight">
                Envie e receba com segurança
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Descontos especiais para pequenos e médios negócios.
              </p>

              <span className="mt-7 inline-block rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-black text-white">
                Conhecer agora
              </span>

              <div className="mt-6 text-right text-5xl">📦</div>
            </div>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5 text-center text-xs font-semibold text-slate-600">
            Parceiro Fixo #2
            <br />
            Kangu / Seguro
          </div>

          <AdPlaceholder
            title="Anúncio Google"
            description="AdSense 300 × 250 — entre FAQ e artigos"
            className="min-h-[250px]"
          />
        </aside>
      </section>

      {/* MARKETPLACES */}
      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                Ofertas selecionadas
              </p>

              <h2 className="text-xl font-black text-blue-950">
                Compre nos maiores marketplaces
              </h2>
            </div>

            <p className="text-xs text-slate-500">
              Links de parceiros e programas de afiliados
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                name: "Mercado Livre",
                icon: "🤝",
                description: "Frete grátis e ofertas",
              },
              {
                name: "Amazon",
                icon: "Amazon",
                description: "Milhões de produtos",
              },
              {
                name: "Shopee",
                icon: "🛍️",
                description: "Cupons e promoções",
              },
              {
                name: "AliExpress",
                icon: "AliExpress",
                description: "Produtos internacionais",
              },
            ].map((partner) => (
              <a
                href="#"
                key={partner.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 items-center justify-center text-xl font-black text-blue-950">
                  {partner.icon}
                </div>

                <p className="mt-2 text-sm font-black text-slate-900">
                  {partner.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {partner.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-orange-600">
                  Ver ofertas
                  <ChevronIcon className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="contato"
        className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-r from-blue-950 to-blue-700 px-6 py-6 text-white shadow-xl lg:flex-row">
          <div className="flex flex-1 items-center gap-4">
            <div className="text-3xl">✉️</div>

            <div>
              <h2 className="font-black">
                Receba novidades e dicas de rastreamento
              </h2>

              <p className="text-xs text-blue-100">
                Assine nossa newsletter e fique por dentro.
              </p>
            </div>
          </div>

          <form className="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="h-12 flex-1 rounded-xl border-0 bg-white px-4 text-sm text-slate-900 outline-none"
            />

            <button
              type="submit"
              className="h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-sm font-black text-white"
            >
              Inscrever
            </button>
          </form>

          <div className="hidden gap-3 text-[10px] text-blue-100 xl:flex">
            <span>✓ Gratuito</span>
            <span>✓ Sem spam</span>
            <span>✓ Cancele quando quiser</span>
          </div>
        </div>
      </section>

      {/* ADSENSE ACIMA DO RODAPÉ */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <AdPlaceholder
          title="Anúncio Google"
          description="AdSense 970 × 90 — acima do rodapé"
          className="min-h-[100px]"
        />
      </section>

      {/* PARCEIROS OFICIAIS */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-black text-blue-950">
            Parceiros oficiais
          </h2>

          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4 lg:grid-cols-7">
            {[
              "📦 Correios",
              "🤝 Mercado Livre",
              "Amazon",
              "🛍️ Shopee",
              "AliExpress",
              "Intelipost",
              "➤ Loggi",
            ].map((partner) => (
              <a
                href="#"
                key={partner}
                className="flex min-h-14 items-center justify-center rounded-xl bg-slate-50 px-3 text-sm font-black text-blue-950 transition hover:bg-blue-50"
              >
                {partner}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600">
            Parceiro Fixo #3 — Newsletter patrocinada
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-100 p-4 text-center text-xs font-semibold text-slate-600">
            Parceiro Fixo #4 — Rodapé / Parceiros
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-blue-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500">
              📦
            </div>

            <div>
              <div className="font-black">
                Correios
                <span className="text-orange-400"> Rastreio</span>
              </div>

              <div className="text-[10px] text-blue-200">
                Seu pacote, em tempo real.
              </div>
            </div>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100">
            <a href="/">Início</a>
            <a href="#transportadoras">Transportadoras</a>
            <a href="#artigos">Blog</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos</a>
          </nav>

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>© 2026 CorreiosRastreio.com.br</span>
          </div>
        </div>
      </footer>
    </main>
  );
}