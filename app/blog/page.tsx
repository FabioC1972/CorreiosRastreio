import type { Metadata } from "next";
import { articles, type Article } from "@/data/articles";
import { getAllPosts } from "@/lib/db";
import ArticleCard from "@/components/ArticleCard";
import BannerAd from "@/components/BannerAd";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Blog de rastreamento e entregas",
  description: "Dicas sobre Correios, rastreamento, importações, PAC, SEDEX e encomendas.",
  openGraph: { title: "Blog Correios Rastreio", description: "Guias e dicas para acompanhar suas encomendas." }
};

export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function Blog() {
  const dbPosts = await getAllPosts(true);

  const dbArticles: Article[] = dbPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: formatDate(p.created_at),
    excerpt: p.excerpt ?? '',
    category: p.category,
  }));

  const allArticles = [...dbArticles, ...articles];

  return (
    <section className="container-site py-16">
      <div className="max-w-3xl">
        <p className="font-bold uppercase tracking-widest text-accent-600">Central de ajuda</p>
        <h1 className="section-title mt-3">Blog Correios Rastreio</h1>
        <p className="mt-4 text-lg text-slate-600">Informação prática para entender cada status e resolver problemas com suas entregas.</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_230px]">
        <div className="grid gap-7 md:grid-cols-2">
          {allArticles.map((a, i) => (
            <div key={a.slug} className={i === 2 ? "md:col-span-2 grid gap-7 md:grid-cols-2" : ""}>
              {i === 2 && <BannerAd size="square" position="Meio dos artigos" />}
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
        <aside className="space-y-7">
          <div className="card p-5">
            <label htmlFor="blog-search" className="font-bold text-brand-900">Buscar no blog</label>
            <input id="blog-search" type="search" placeholder="Digite um tema..." className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:ring-4 focus:ring-blue-100" />
          </div>
          <div className="hidden justify-center lg:flex">
            <BannerAd size="vertical" position="Sidebar do blog" />
          </div>
          <div className="card p-5">
            <h2 className="font-bold text-brand-900">Categorias</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Rastreamento</li>
              <li>Importação</li>
              <li>Envios</li>
              <li>Ajuda</li>
            </ul>
          </div>
          <CTABanner eyebrow="Seguro futuro" title="Seguro para sua encomenda" text="Proteja seu pacote contra extravio. Faça uma cotação de seguro." button="Fazer cotação" href="#" variant="orange" />
        </aside>
      </div>
    </section>
  );
}