'use client';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  async function handleDelete() {
    if (!confirm('Excluir este post?')) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    router.refresh();
  }
  return <button onClick={handleDelete}>excluir</button>;
}