import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "timer_state"

function CountdownTimer() {
    const [inputTime, setInputTime] = useState(10)
    const [timeLeft, setTimeLeft] = useState(0)
    const [status, setStatus] = useState("Idle")
    const intervalRef = useRef(null)
    const endTimeRef = useRef(null)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (!saved) return

        if (saved.status === "Running") {
        const remaining = saved.endTime - Date.now()
        if (remaining > 0) {
            setTimeLeft(remaining)
            setStatus("Running")
            endTimeRef.current = saved.endTime
            startInterval()
        } else {
            setStatus("Completed")
            setTimeLeft(0)
        }
        }

        if (saved.status === "Paused") {
        setTimeLeft(saved.timeLeft)
        setStatus("Paused")
        }
    }, [])

    function startInterval() {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
        const remaining = endTimeRef.current - Date.now()

        if (remaining <= 0) {
        clearInterval(intervalRef.current)
        setTimeLeft(0)
        setStatus("Completed")
        localStorage.removeItem(STORAGE_KEY)
        } else {
        setTimeLeft(remaining)
        }
    }, 10)
    }


    const startTimer = () => {
        const endTime = Date.now() + inputTime * 1000
        endTimeRef.current = endTime
        setTimeLeft(inputTime * 1000)
        setStatus("Running")

        localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
            status: "Running",
            endTime,
        })
        )

        startInterval()
    }

    const pauseTimer = () => {
        clearInterval(intervalRef.current)
        setStatus("Paused")

        localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
            status: "Paused",
            timeLeft,
        })
        )
    }

    const resumeTimer = () => {
        const endTime = Date.now() + timeLeft
        endTimeRef.current = endTime
        setStatus("Running")

        localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
            status: "Running",
            endTime,
        })
        )

        startInterval()
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current)
        setStatus("Idle")
        setTimeLeft(0)
        localStorage.removeItem(STORAGE_KEY)
    }

    /* ---------- Cleanup ---------- */
    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">⏱ Countdown Timer</h2>

        <input
            type="number"
            min="1"
            disabled={status === "Running"}
            value={inputTime}
            onChange={(e) => setInputTime(Number(e.target.value))}
            className="border p-2 rounded mb-4 w-full"
        />

        <p className="text-lg mb-2">
            Time Left: <b>{(timeLeft / 1000).toFixed(2)}s</b>
        </p>
        <p className="mb-4">Status: <b>{status}</b></p>

        {status === "Completed" && (
            <p className="text-red-600 font-bold mb-4">
            ⏰ Time’s up!
            </p>
        )}

        {/* Controls */}
        <div className="flex gap-2 flex-wrap">
            {status !== "Completed" && status !== "Running" && (
            <button
                onClick={startTimer}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Start
            </button>
            )}

            {status === "Running" && (
            <button
                onClick={pauseTimer}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
                Pause
            </button>
            )}

            {status === "Paused" && (
            <button
                onClick={resumeTimer}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Resume
            </button>
            )}

            {(status === "Paused" || status === "Running") && (
            <button
                onClick={resetTimer}
                className="bg-gray-600 text-white px-4 py-2 rounded"
            >
                Reset
            </button>
            )}
        </div>
        </div>
    )
}

export default CountdownTimer