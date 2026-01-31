function TodoItem({ task, onToggle, onDelete }) {
    const priorityColors = {
        Low: "bg-green-200",
        Medium: "bg-yellow-200",
        High: "bg-red-200",
    }

    return (
        <li className="flex items-center justify-between p-3 border rounded">
        <div className="flex items-center gap-3">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            />

            <span
            className={`${
                task.completed ? "line-through text-gray-500" : ""
            }`}
            >
            {task.text}
            </span>

            <span
            className={`text-xs px-2 py-1 rounded ${priorityColors[task.priority]}`}
            >
            {task.priority}
            </span>
        </div>

        <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 font-bold"
        >
            ✕
        </button>
        </li>
    )
}

export default TodoItem
