import { useState } from "react"

function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        id: "",
        password: "",
    })

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [submittedData, setSubmittedData] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const validate = () => {
        let tempErrors = {}

        if (!formData.name.trim()) tempErrors.name = "Name is required"
        if (!formData.id.trim()) tempErrors.id = "ID is required"
        if (!/\S+@\S+\.\S+/.test(formData.email))
        tempErrors.email = "Email is invalid"
        if (!formData.password.trim())
        tempErrors.password = "Password is required"

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

        setSubmittedData(formData)

        setFormData({
        name: "",
        email: "",
        id: "",
        password: "",
        })
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">📄 User Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <input
                className="border p-2 w-full rounded"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            </div>

            <div>
            <input
                className="border p-2 w-full rounded"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            </div>

            <div>
            <input
                className="border p-2 w-full rounded"
                placeholder="ID"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />
            {errors.id && (
                <p className="text-red-500 text-sm">{errors.id}</p>
            )}
            </div>

            <div>
            <div className="flex gap-2">
                <input
                className="border p-2 w-full rounded"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 border rounded"
                >
                {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
            </button>
        </form>

        {submittedData && (
            <div className="mt-6 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Submitted Data:</h3>
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>ID:</b> {submittedData.id}</p>
            <p><b>Password:</b> {submittedData.password}</p>
            </div>
        )}
        </div>
    )
}

export default UserForm