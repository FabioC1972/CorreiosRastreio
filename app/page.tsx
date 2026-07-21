import { ArrowPathIcon, DevicePhoneMobileIcon, GlobeAmericasIcon, BoltIcon } from "@heroicons/react/24/outline";
import TrackingSearch from "@/components/TrackingSearch";
import ArticleCard from "@/components/ArticleCard";
import BannerAd from "@/components/BannerAd";
import { articles } from "@/data/articles";
const benefits=[
 {icon:ArrowPathIcon,title:"Rastreio ilimitado e gratuito",text:"Consulte quantos códigos precisar, sem cadastro e sem cobrança."},
 {icon:BoltIcon,title:"Atualizações em tempo real",text:"Estrutura pronta para receber atualizações diretamente das transportadoras."},
 {icon:GlobeAmericasIcon,title:"Nacional e internacional",text:"Acompanhe objetos do Brasil, China, Estados Unidos e outros países."},
 {icon:DevicePhoneMobileIcon,title:"Perfeito em qualquer tela",text:"Experiência rápida e confortável no celular, tablet ou computador."}
];
export default function Home(){return <>
<section className="relative overflow-hidden bg-brand-700 pb-24 pt-20 text-white sm:pt-28"><div className="absolute inset-0 bg-hero-grid bg-[size:24px_24px] opacity-50"/><div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"/><div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl"/><div className="container-site relative text-center"><span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">Consulta rápida, gratuita e segura</span><h1 className="mx-auto mt-6 max-w-4xl font-[var(--font-geist)] text-4xl font-black tracking-tight sm:text-6xl">Rastreie sua encomenda <span className="text-orange-300">em segundos</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">Acompanhe seus pedidos dos Correios, importações e muito mais. Rápido, grátis e sem complicação.</p><div className="mt-10"><TrackingSearch/></div></div></section>
<section className="container-site -mt-10 relative z-10"><BannerAd size="horizontal" position="Topo da página inicial" /></section>
<section className="container-site py-20"><div className="mx-auto max-w-2xl text-center"><p className="font-bold uppercase tracking-widest text-accent-600">Por que usar</p><h2 className="section-title mt-3">Tudo para acompanhar sua entrega</h2><p className="mt-4 text-slate-600">Uma experiência simples, clara e preparada para integrações reais.</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({icon:Icon,title,text})=><div key={title} className="card p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700"><Icon className="h-6 w-6"/></span><h3 className="mt-5 font-bold text-brand-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}</div></section>
<section className="border-y border-slate-200 bg-white py-20"><div className="container-site"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-bold uppercase tracking-widest text-accent-600">Conteúdo útil</p><h2 className="section-title mt-3">Artigos recentes</h2></div><a href="/blog" className="font-bold text-brand-700">Ver todos os artigos →</a></div><div className="mt-10 grid gap-7 md:grid-cols-3">{articles.slice(0,3).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></div></section>
</>}
