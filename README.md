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

```bash
npm install
npm run dev

http://localhost:5173

# Frontend Assignment Submission

This repository contains the implementation of five distinct frontend tasks, focusing on UI/UX, state management, and data persistence.

## 🚀 Features Implemented

### Task 1 – Todo App
A comprehensive task management tool with persistence.
* **CRUD Operations:** Add, delete, and mark tasks as complete.
* **Prioritization:** Assign priority levels (**Low** / **Medium** / **High**).
* **Filtering:** View tasks by status (**All** / **Active** / **Completed**).
* **Persistence:** Uses `LocalStorage` to save data across sessions.

### Task 2 – Form Handling & Password Toggle
A robust form with real-time validation and user-friendly controls.
* **Controlled Inputs:** Manages state for Name, Email, ID, and Password.
* **Validation:**
    * Inline validation with immediate error messages.
    * Email format validation using **Regex**.
* **UX Enhancements:** Show/Hide password toggle.
* **Submission:** Displays submitted data and resets the form upon success.

### Task 3 – Dynamic Multi-Input Progress Bar
An interactive visualization of numeric data.
* **Multiple Inputs:** Accepts multiple numeric values (0–100).
* **Visual Feedback:**
    * Main progress bar representing the **average value**.
    * Individual sub-progress bars for each input.
    * Animated progress fill and color changes based on percentage.
* **Data Integrity:** Input value clamping to ensure valid ranges.

### Task 4 – Advanced Countdown Timer
A precise timer with state preservation.
* **Controls:** Start, Pause, Resume, and Reset functionality.
* **Configuration:** Custom countdown time (Default: 10s).
* **Precision:** Millisecond-level accuracy.
* **Status Indicators:** Visual display of *Running*, *Paused*, or *Completed* states.
* **Persistence:** Maintains timer state across page refreshes (handled via end timestamps).
* **Safety:** Prevents multiple timer instances from running simultaneously.
* **Completion:** Displays "Time’s up!" message when finished.

### Task 5 – Live Search with Highlighting
A real-time search utility.
* **Search Logic:** Case-insensitive matching.
* **Visuals:** Highlights matching text, including multiple occurrences within a string.
* **Feedback:** Shows dynamic result counts and a "No matches found" state.

---

## 🛠️ Assumptions & Design Decisions

* **Styling:** **Tailwind CSS** is used throughout for fast, consistent, and utility-first styling.
* **Persistence strategy:** `LocalStorage` is utilized to mimic backend persistence, ensuring data remains available after reloading the page.
* **Timer Accuracy:** To handle page refreshes correctly, the timer logic calculates the remaining time based on an **end timestamp** rather than simple intervals.
* **Scope:** The application is strictly UI/Frontend-focused as per the assignment requirements.

---

## ⚠️ Limitations

* **No Backend:** There is no server-side database integration.
* **Security:** No authentication or authorization implementation.
* **Purpose:** This application is designed specifically for **demo and evaluation purposes only**.