'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type Props = {
  postId?: number;
  initial?: { title: string; slug: string; excerpt: string; content: string; cover_image: string | null; category: string; published: boolean };
};

export default function PostForm({ postId, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? '');
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [coverImage, setCoverImage] = useState(initial?.cover_image ?? '');
  const [category, setCategory] = useState(initial?.category ?? 'Blog');
  const [published, setPublished] = useState(initial?.published ?? true);
  const [uploading, setUploading] = useState(false);

  function autoSlug(value: string) {
    setTitle(value);
    if (!postId) {
      setSlug(value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    setCoverImage(data.url);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = { title, slug, excerpt, content, cover_image: coverImage || null, category, published };
    const url = postId ? `/api/posts/${postId}` : '/api/posts';
    const method = postId ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    router.push('/admin/posts');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
      <input placeholder="Título" value={title} onChange={(e) => autoSlug(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }} required />
      <input placeholder="slug" value={slug} onChange={(e) => setSlug(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }} required />
      <textarea placeholder="Resumo curto" value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }} rows={2} />

      <select value={category} onChange={(e) => setCategory(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}>
        <option value="Rastreamento">Rastreamento</option>
        <option value="Importação">Importação</option>
        <option value="Envios">Envios</option>
        <option value="Ajuda">Ajuda</option>
        <option value="Blog">Blog (geral)</option>
      </select>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploading && <p>Enviando imagem...</p>}
      {coverImage && <img src={coverImage} alt="capa" style={{ maxWidth: 200, display: 'block', margin: '8px 0' }} />}

      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <textarea placeholder="Conteúdo em markdown" value={content} onChange={(e) => setContent(e.target.value)}
          style={{ flex: 1, padding: 8, minHeight: 400, fontFamily: 'monospace' }} required />
        <div style={{ flex: 1, border: '1px solid #ccc', padding: 12, overflow: 'auto' }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      <label style={{ display: 'block', margin: '12px 0' }}>
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /> Publicado
      </label>

      <button type="submit" style={{ padding: '8px 24px' }}>{postId ? 'Salvar' : 'Criar post'}</button>
    </form>
  );
}