# Vasundharaa Geo Technologies – React Developer Intern Assignment

This project is a single-page React application built as part of the React Developer Intern assignment.

---

## Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **LocalStorage API**

---

## Project Structure

src/
├── components/
│ ├── Todo/
│ │ ├── TodoApp.jsx
│ │ ├── TodoItem.jsx
│ │ └── FilterControls.jsx
│ ├── Forms/
│ │ └── UserForm.jsx
│ ├── Progress/
│ │ └── MultiProgressBar.jsx
│ ├── Timer/
│ │ └── CountdownTimer.jsx
│ └── Search/
│ └── SearchList.jsx
├── hooks/
│ └── useLocalStorage.js
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Setup Instructions

### Prerequisites
- npm or yarn

### Steps to Run Locally

```npm install

```npm run dev

http://localhost:5173

---


## 🚀 Features Implemented

### ✅ Task 1 – Todo App
- Add, delete, and mark tasks as complete
- Task prioritization (**Low / Medium / High**)
- Filter tasks (**All / Active / Completed**)
- Persistent storage using **LocalStorage**

---

### 📝 Task 2 – Form Handling & Password Toggle
- Controlled form inputs (**Name, Email, ID, Password**)
- Inline validation with error messages
- Email validation using **Regex**
- Show / Hide password toggle
- Display submitted form data
- Form reset after successful submission

---

### 📊 Task 3 – Dynamic Multi-Input Progress Bar
- Multiple numeric inputs (**0–100**)
- Main progress bar representing average value
- Individual sub progress bars
- Input value clamping
- Animated progress fill
- Color change based on percentage

---

### ⏱️ Task 4 – Advanced Countdown Timer
- Configurable countdown time (**default: 10 seconds**)
- **Start, Pause, Resume, and Reset** controls
- Millisecond precision timer
- Timer status display (**Running, Paused, Completed**)
- **“Time’s up!”** message on completion
- Persistent timer state across page refresh
- Prevention of multiple timers

---

### 🔍 Task 5 – Live Search with Highlighting
- Case-insensitive search
- Highlight matching text (including multiple matches)
- Dynamic result count
- **“No matches found”** message

---

## 🧠 Assumptions & Design Decisions
- **Tailwind CSS** is used for fast and consistent styling
- **LocalStorage** is used for persistence instead of a backend
- The application is UI-focused as per assignment scope
- Timer persistence is handled using end timestamps for accuracy

---

## ⚠️ Limitations
- No backend or database integration
- No authentication or authorization
- Designed for demo and evaluation purposes only
