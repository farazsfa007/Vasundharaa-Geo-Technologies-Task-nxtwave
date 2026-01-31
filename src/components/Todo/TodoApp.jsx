import { useState } from "react"
import TodoItem from "./TodoItem"
import FilterControls from "./FilterControls"
import useLocalStorage from "../../hooks/useLocalStorage"

function TodoApp() {
    const [tasks, setTasks] = useLocalStorage("tasks", [])
    const [filter, setFilter] = useState("all")
    const [text, setText] = useState("")
    const [priority, setPriority] = useState("Medium")

    const addTask = (e) => {
        e.preventDefault()
        if (!text.trim()) return

        setTasks([
        ...tasks,
        {
            id: Date.now(),
            text,
            completed: false,
            priority,
        },
        ])
        setText("")
        setPriority("Medium")
    }

    const toggleComplete = (id) => {
        setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        )
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed
        if (filter === "completed") return task.completed
        return true
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">📝 Todo App</h2>

        {/* Add Task */}
        <form onSubmit={addTask} className="flex gap-2 mb-4">
            <input
            className="border p-2 flex-1 rounded"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <select
            className="border p-2 rounded"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            </select>

            <button className="bg-blue-600 text-white px-4 rounded">
            Add
            </button>
        </form>

        <FilterControls filter={filter} setFilter={setFilter} />

        <ul className="space-y-2 mt-4">
            {filteredTasks.map((task) => (
            <TodoItem
                key={task.id}
                task={task}
                onToggle={toggleComplete}
                onDelete={deleteTask}
            />
            ))}
        </ul>
        </div>
    )
}

export default TodoApp
