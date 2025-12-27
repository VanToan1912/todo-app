import TaskItem from './TaskItem';

export default function TaskList() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Today <span className="text-blue-500 ml-2">5</span></h1>
      </div>

      {/* Add New Task */}
      <button className="w-full text-left flex items-center gap-3 px-4 py-3 mb-6 text-blue-600 hover:bg-gray-100 rounded">
        + Add New Task
      </button>

      {/* Tasks */}
      <ul className="space-y-4">
        <TaskItem title="Research content ideas" />
        <TaskItem title="Create a database of guest authors" />
        <TaskItem
          title="Renew driver's license"
          date="22-03-22"
          subtasks="1 Subtasks"
          tag="Personal"
          tagColor="red"
        />
        <TaskItem
          title="Consult accountant"
          list="List 1"
          subtasks="3 Subtasks"
          listColor="yellow"
        />
        <TaskItem title="Print business card" />
      </ul>
    </div>
  );
}