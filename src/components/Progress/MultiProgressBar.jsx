import { useState } from "react"

function MultiProgressBar() {
    const [values, setValues] = useState([30, 50, 70])

    const handleChange = (index, value) => {
        let val = Number(value)
        if (val < 0) val = 0
        if (val > 100) val = 100

        const updated = [...values]
        updated[index] = val
        setValues(updated)
    }

    const average =
        values.reduce((sum, v) => sum + v, 0) / values.length

    const getColor = (value) => {
        if (value < 40) return "bg-red-500"
        if (value > 70) return "bg-green-500"
        return "bg-yellow-500"
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">📊 Progress Bar</h2>

        <div className="space-y-2 mb-4">
            {values.map((value, index) => (
            <input
                key={index}
                type="number"
                value={value}
                onChange={(e) =>
                handleChange(index, e.target.value)
                }
                className="border p-2 w-full rounded"
            />
            ))}
        </div>

        <div className="h-6 bg-gray-200 rounded overflow-hidden mb-4">
            <div
            className={`h-full transition-all duration-500 ${getColor(
                average
            )}`}
            style={{ width: `${average}%` }}
            />
        </div>

        <p className="text-sm mb-4">
            Average: <b>{Math.round(average)}%</b>
        </p>

        <div className="space-y-2">
            {values.map((value, index) => (
            <div key={index}>
                <div className="h-4 bg-gray-200 rounded overflow-hidden">
                <div
                    className={`h-full transition-all duration-500 ${getColor(
                    value
                    )}`}
                    style={{ width: `${value}%` }}
                />
                </div>
                <p className="text-xs">{value}%</p>
            </div>
            ))}
        </div>
        </div>
    )
}

export default MultiProgressBar