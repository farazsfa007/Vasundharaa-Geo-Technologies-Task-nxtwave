import { useState } from "react"

const NAMES = [
    "Vasundharaa",
    "Rahul Sharma",
    "Anita Singh",
    "Rohit Verma",
    "Sonal Gupta",
    "Amit Kumar",
    "Neha Agarwal",
    "Suresh Patel",
    ]

    function SearchList() {
    const [query, setQuery] = useState("")

    const filteredNames = NAMES.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    )

    const highlightText = (text, highlight) => {
        if (!highlight.trim()) return text

        const parts = text.split(
        new RegExp(`(${highlight})`, "gi")
        )

        return (
        <span>
            {parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <b key={i} className="text-blue-600">
                {part}
                </b>
            ) : (
                part
            )
            )}
        </span>
        )
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">🔍 Live Search</h2>

        <input
            type="text"
            placeholder="Search names..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 w-full rounded mb-4"
        />

        <p className="mb-2 text-sm">
            Matches: <b>{filteredNames.length}</b>
        </p>

        {filteredNames.length === 0 ? (
            <p className="text-red-500">No matches found</p>
        ) : (
            <ul className="space-y-2">
            {filteredNames.map((name, index) => (
                <li key={index} className="border p-2 rounded">
                {highlightText(name, query)}
                </li>
            ))}
            </ul>
        )}
        </div>
    )
}
export default SearchList