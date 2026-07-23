import type { MetadataRoute } from "next";
import { statusList } from "@/data/status-correios";
import { getAllPosts } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://correiosrastreio.com.br"; // confirmar domínio correto

  const staticPages = ["", "/blog", "/sobre", "/contato", "/privacidade", "/termos"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? ("daily" as const) : ("monthly" as const),
    priority: p === "" ? 1 : 0.7,
  }));

  const statusPages = statusList.map((s) => ({
    url: `${base}/status/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts(true); // só publicados
    blogPages = posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // se o banco falhar no build, o sitemap não quebra — só sai sem os posts
  }

  return [...staticPages, ...statusPages, ...blogPages];
}