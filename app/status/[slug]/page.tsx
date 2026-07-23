import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { statusList } from "@/data/status-correios";
import CTABanner from "@/components/CTABanner";
import BannerAd from "@/components/BannerAd";

export async function generateStaticParams() {
  return statusList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const status = statusList.find((s) => s.slug === slug);
  if (!status) return {};
  return {
    title: `${status.titulo}: o que significa? | Correios Rastreio`,
    description: status.descricaoCurta,
    alternates: { canonical: `/status/${status.slug}` },
    openGraph: { title: status.titulo, description: status.descricaoCurta },
  };
}

const categoriaLabel: Record<string, string> = {
  postagem: "Postagem",
  transito: "Em trânsito",
  entrega: "Entrega",
  problema: "Atenção",
  internacional: "Internacional",
  devolucao: "Devolução",
};

export default async function StatusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const status = statusList.find((s) => s.slug === slug);
  if (!status) return notFound();

  const relacionados = statusList.filter((s) =>
    status.statusRelacionados.includes(s.slug)
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: status.faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500">
        <div className="absolute inset-0 bg-hero-grid bg-[size:20px_20px] opacity-30" />
        <div className="container-site relative py-16">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
            {categoriaLabel[status.categoria] ?? "Status"}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
            {status.titulo}: o que significa?
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            {status.descricaoCurta}
          </p>
        </div>
      </section>

      <section className="container-site py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <div className="card p-7">
              <h2 className="text-xl font-bold text-brand-900">
                O que esse status significa
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {status.explicacao}
              </p>
            </div>

            {(status.tempoMedioSedex || status.tempoMedioPac) && (
              <div className="card p-7">
                <h2 className="flex items-center gap-2 text-xl font-bold text-brand-900">
                  <ClockIcon className="h-5 w-5 text-accent-500" />
                  Quanto tempo esse status costuma durar?
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {status.tempoMedioSedex && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-accent-600">
                        SEDEX
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {status.tempoMedioSedex}
                      </p>
                    </div>
                  )}
                  {status.tempoMedioPac && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-500">
                        PAC
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {status.tempoMedioPac}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="card border-l-4 border-l-accent-500 p-7">
              <h2 className="flex items-center gap-2 text-xl font-bold text-brand-900">
                <ExclamationTriangleIcon className="h-5 w-5 text-accent-500" />
                Quando devo me preocupar?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {status.quandoPreocupar}
              </p>
            </div>

            <div className="card p-7">
              <h2 className="flex items-center gap-2 text-xl font-bold text-brand-900">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                O que fazer agora
              </h2>
              <ul className="mt-4 space-y-3">
                {status.proximosPassos.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {status.faq.length > 0 && (
              <div className="card p-7">
                <h2 className="flex items-center gap-2 text-xl font-bold text-brand-900">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-brand-500" />
                  Perguntas frequentes
                </h2>
                <div className="mt-4 divide-y divide-slate-200">
                  {status.faq.map((f, i) => (
                    <div key={i} className="py-4">
                      <p className="font-bold text-brand-900">{f.pergunta}</p>
                      <p className="mt-2 leading-6 text-slate-600">
                        {f.resposta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relacionados.length > 0 && (
              <div className="card p-7">
                <h2 className="text-xl font-bold text-brand-900">
                  Outros status relacionados
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relacionados.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/status/${r.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-brand-900 transition hover:border-brand-500 hover:bg-brand-50"
                    >
                      {r.titulo}
                      <ArrowRightIcon className="h-4 w-4 text-accent-500 transition group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-7">
            <div className="card p-5">
              <label htmlFor="tracking-code" className="font-bold text-brand-900">
                Rastrear outra encomenda
              </label>
              <input
                id="tracking-code"
                type="text"
                placeholder="Digite o código de rastreio"
                className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:ring-4 focus:ring-blue-100"
              />
              <Link
                href="/"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-accent-600"
              >
                Rastrear agora
              </Link>
            </div>

            <div className="hidden justify-center lg:flex">
              <BannerAd size="vertical" position="Sidebar status" />
            </div>

            <CTABanner
              eyebrow="Seguro futuro"
              title="Seguro para sua encomenda"
              text="Proteja seu pacote contra extravio. Faça uma cotação de seguro."
              button="Fazer cotação"
              href="#"
              variant="orange"
            />
          </aside>
        </div>
      </section>
    </>
  );
}