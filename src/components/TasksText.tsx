import { TodoProps } from "./TodoList"

interface TaskProps {
  todos: Array<TodoProps>
}

export function TasksText({ todos }: TaskProps) {
  return (
    <div className="flex w-full justify-between text-gray-100">
      <p className="text-sm text-theme-blue font-bold">
        Tarefas criadas
        <span className="text-xs ml-3 bg-gray-400 text-gray-200 py-1 px-2 rounded-xl">{todos.length}</span>
      </p>
      <p className="text-sm text-theme-purple font-bold">
        Concluídas
        <span className="text-xs ml-3 bg-gray-400 text-gray-200 py-1 px-2 rounded-xl">{todos.filter(todo => todo.complete).length} of {todos.length}</span>
      </p>
    </div>
  )
}