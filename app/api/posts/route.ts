import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost, initDb } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  await initDb();
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }
  const data = await request.json();
  const post = await createPost(data);
  return NextResponse.json(post);
}