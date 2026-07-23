import { NextRequest, NextResponse } from 'next/server';
import { setAdminSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }
  await setAdminSession();
  return NextResponse.json({ ok: true });
}