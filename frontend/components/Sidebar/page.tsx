'use client';

import { useRouter } from 'next/navigation';
import TaskViews from './TaskViews';
import ListsSection from './ListsSection';
import TagsSection from './TagsSection';

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    router.push('/login');
  }

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <button className="text-2xl">☰</button>
        <h1 className="text-xl font-semibold">Menu</h1>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Task Views */}
      <TaskViews />

      {/* Lists */}
      <ListsSection />

      {/* Tags */}
      <TagsSection />

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-200 space-y-2">
        <button className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded">
          Settings
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded flex items-center gap-2 text-red-600"
        >
          <span>🚪</span> Sign out
        </button>
      </div>
    </aside>
  );
}
