import { getPostById } from '@/lib/db';
import PostForm from '../../PostForm';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(Number(id));
  if (!post) return <p>Post não encontrado</p>;

  return (
    <PostForm
      postId={post.id}
      initial={{
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt ?? '',
        content: post.content,
        cover_image: post.cover_image,
        category: post.category,
        published: post.published,
      }}
    />
  );
}