import { articles } from "@/data/articles";
import { getPostBySlug } from "@/lib/db";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function getArticleData(slug: string) {
  const dbPost = await getPostBySlug(slug);
  if (dbPost && dbPost.published) {
    return {
      title: dbPost.title,
      date: formatDate(dbPost.created_at),
      category: dbPost.category,
      content: dbPost.content,
      coverImage: dbPost.cover_image,
    };
  }

  const staticArticle = articles.find((a) => a.slug === slug);
  if (staticArticle) {
    return {
      title: staticArticle.title,
      date: staticArticle.date,
      category: staticArticle.category,
      content: staticArticle.content || staticArticle.excerpt,
      coverImage: null,
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticleData(slug);
  if (!data) return {};
  return { title: data.title };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getArticleData(slug);
  if (!data) notFound();

  return (
    <article className="container-site py-16 max-w-3xl">
      <p className="font-bold uppercase tracking-widest text-accent-600">{data.category}</p>
      <h1 className="section-title mt-3">{data.title}</h1>
      <p className="mt-2 text-sm text-slate-500">{data.date}</p>

      {data.coverImage && (
        <img src={data.coverImage} alt={data.title} className="mt-8 w-full rounded-2xl" />
      )}

      <div className="prose prose-slate mt-8 max-w-none">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </article>
  );
}