import TodoApp from "./components/Todo/TodoApp"
import UserForm from "./components/Forms/UserForm"
import MultiProgressBar from "./components/Progress/MultiProgressBar"
import CountdownTimer from "./components/Timer/CountdownTimer"
import SearchList from "./components/Search/SearchList"

export default function App() {
  return (
    <div className="min-h-screen p-6 space-y-10 bg-gray-100">
      <TodoApp />
      <UserForm />
      <MultiProgressBar />
      <CountdownTimer />
      <SearchList />
    </div>
  )
}
