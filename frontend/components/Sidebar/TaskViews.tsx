export default function TaskViews() {
  return (
    <nav className="flex-1 px-4">
      <h2 className="uppercase text-xs font-semibold text-gray-500 mb-2">Tasks</h2>
      <ul className="space-y-1">
        <li>
          <a href="#" className="flex items-center justify-between px-3 py-2 bg-gray-200 rounded">
            <span className="flex items-center gap-2">Upcoming</span>
            <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-xs">12</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded hover:bg-gray-200">
            <span className="flex items-center gap-2">Today</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">5</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded">Calendar</a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded">Sticky Wall</a>
        </li>
      </ul>
    </nav>
  );
}