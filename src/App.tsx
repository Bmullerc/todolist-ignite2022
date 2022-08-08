import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Header />
      <TodoList />
    </div>
  )
}
