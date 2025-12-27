interface TaskItemProps {
    title: string;
    date?: string;
    subtasks?: string;
    tag?: string;
    tagColor?: string;
    list?: string;
    listColor?: string;
  }
  
  export default function TaskItem({
    title,
    date,
    subtasks,
    tag,
    tagColor = 'gray',
    list,
    listColor = 'gray',
  }: TaskItemProps) {
    return (
      <li className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 rounded cursor-pointer">
        <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
        <div className="flex-1">
          <p className="text-lg">{title}</p>
          {(date || subtasks || tag || list) && (
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
              {date && <span className="flex items-center gap-1">📅 {date}</span>}
              {subtasks && <span>{subtasks}</span>}
              {tag && <span className={`px-2 py-0.5 rounded text-white bg-${tagColor}-500`}>{tag}</span>}
              {list && <span className={`px-2 py-0.5 rounded text-${listColor}-700 bg-${listColor}-100`}>{list}</span>}
            </div>
          )}
        </div>
        <span>➜</span>
      </li>
    );
  }