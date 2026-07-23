import { cookies } from 'next/headers';

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set('admin_session', process.env.ADMIN_SECRET!, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get('admin_session')?.value === process.env.ADMIN_SECRET;
}