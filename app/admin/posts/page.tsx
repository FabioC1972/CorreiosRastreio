import { getAllPosts } from '@/lib/db';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

export default async function AdminPostsPage() {
  const posts = await getAllPosts();
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Posts</h1>
        <Link href="/admin/posts/new">+ Novo post</Link>
      </div>
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ margin: '12px 0', display: 'flex', gap: 12, alignItems: 'center' }}>
            <span>{p.title}</span>
            <span style={{ color: p.published ? 'green' : 'gray' }}>
              {p.published ? 'publicado' : 'rascunho'}
            </span>
            <Link href={`/admin/posts/${p.id}/edit`}>editar</Link>
            <DeleteButton id={p.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}