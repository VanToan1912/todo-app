export default function ListsSection() {
    return (
      <section className="px-4 mt-6">
        <h2 className="uppercase text-xs font-semibold text-gray-500 mb-2">Lists</h2>
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 hover:bg-gray-200 rounded">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Personal
              </span>
              <span className="text-gray-500 text-sm">3</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 hover:bg-gray-200 rounded">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Work
              </span>
              <span className="text-gray-500 text-sm">6</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 hover:bg-gray-200 rounded">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                List 1
              </span>
              <span className="text-gray-500 text-sm">3</span>
            </a>
          </li>
          <li>
            <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-gray-200 rounded">
              + Add New List
            </button>
          </li>
        </ul>
      </section>
    );
  }