import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import TaskList from '@/components/Dashboard/page';

export default async function DashboardPage() {
  const token = (await cookies()).get('access_token');

  // Not logged in → redirect
  if (!token) {
    redirect('/login');
  }

  return <TaskList />;
}
