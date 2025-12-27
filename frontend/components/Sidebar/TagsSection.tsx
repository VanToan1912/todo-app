export default function TagsSection() {
    return (
      <section className="px-4 mt-6">
        <h2 className="uppercase text-xs font-semibold text-gray-500 mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Tag 1</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Tag 2</span>
          <button className="px-3 py-1 text-blue-600">+ Add Tag</button>
        </div>
      </section>
    );
  }