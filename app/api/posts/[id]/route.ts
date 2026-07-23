import { NextRequest, NextResponse } from 'next/server';
import { updatePost, deletePost } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }
  const { id } = await params;
  const data = await request.json();
  const post = await updatePost(Number(id), data);
  return NextResponse.json(post);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }
  const { id } = await params;
  await deletePost(Number(id));
  return NextResponse.json({ ok: true });
}