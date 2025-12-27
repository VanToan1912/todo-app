import { cookies } from 'next/headers';

export async function fetchMe() {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) return null;
  return res.json();
}
