function FilterControls({ filter, setFilter }) {
    const buttons = ["all", "active", "completed"]

    return (
        <div className="flex gap-2">
        {buttons.map((btn) => (
            <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-3 py-1 rounded ${
                filter === btn
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </button>
        ))}
        </div>
    )
}
export default FilterControls