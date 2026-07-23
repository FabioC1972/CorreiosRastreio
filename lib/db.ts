import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      cover_image TEXT,
      published BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `;
}

export async function getAllPosts(onlyPublished = false) {
  await initDb();
  const rows = onlyPublished
    ? await sql`SELECT * FROM posts WHERE published = true ORDER BY created_at DESC`
    : await sql`SELECT * FROM posts ORDER BY created_at DESC`;
  return rows as unknown as Post[];
}

export async function getPostBySlug(slug: string) {
  const rows = await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`;
  return (rows[0] as unknown as Post) ?? null;
}

export async function getPostById(id: number) {
  const rows = await sql`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
  return (rows[0] as unknown as Post) ?? null;
}

export async function createPost(data: {
  title: string; slug: string; excerpt: string; content: string;
  cover_image: string | null; published: boolean;
}) {
  const rows = await sql`
    INSERT INTO posts (title, slug, excerpt, content, cover_image, published)
    VALUES (${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, ${data.cover_image}, ${data.published})
    RETURNING *
  `;
  return rows[0] as unknown as Post;
}

export async function updatePost(id: number, data: {
  title: string; slug: string; excerpt: string; content: string;
  cover_image: string | null; published: boolean;
}) {
  const rows = await sql`
    UPDATE posts SET title=${data.title}, slug=${data.slug}, excerpt=${data.excerpt},
      content=${data.content}, cover_image=${data.cover_image}, published=${data.published},
      updated_at=NOW()
    WHERE id=${id}
    RETURNING *
  `;
  return rows[0] as unknown as Post;
}

export async function deletePost(id: number) {
  await sql`DELETE FROM posts WHERE id = ${id}`;
}