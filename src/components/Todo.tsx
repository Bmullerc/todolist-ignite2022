import { Trash } from "phosphor-react";
import { TodoProps } from "./TodoList";

interface SingleTodoProps {
  todo: TodoProps
  handleToggleTodo: (id: number) => void
  handleDeleteTodo: (id: number) => void
}

export function Todo({todo, handleToggleTodo, handleDeleteTodo}: SingleTodoProps) {
  return (
    <div
      key={todo.id}
      className="flex px-2 py-4 items-start justify-between text-left text-sm text-gray-100 bg-gray-500 h-[72px] rounded-lg"
    >
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => handleToggleTodo(todo.id)}
        className="hover:border-theme-blue-dark bg-gray-500 border-2 border-theme-blue h-5 w-5 checked:text-theme-purple-dark rounded-full ml-4 mr-4 mt-1 focus:ring-offset-0 outline-theme-purple-dark checked:hover:text-theme-purple transition-colors duration-100 ease-in"
      />
      {!todo.complete ? todo.name : <span className="line-through text-gray-300">{todo.name}</span>}

      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="mr-4 ml-8 mt-1"
      >
        <Trash size={20} className="text-gray-300 hover:text-theme-danger transition-colors duration-100 ease-in" />
      </button>
    </div>
  )
}