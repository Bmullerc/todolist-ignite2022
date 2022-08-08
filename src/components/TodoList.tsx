import { useState, useRef } from "react";
import { PlusCircle } from "phosphor-react";

interface Todo {
  id: number,
  name: string,
  complete: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<any[]>([])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleAddTask() {
    const taskName = inputRef.current?.value
    if (taskName === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: Date.now(),
        name: taskName,
        complete: false,
      }]
    })
    setInputValue('')
  }

  return (
    <main className="flex flex-col justify-center items-center m-auto gap-12 max-w-3xl">

      <div className="-mt-8 flex w-full flex-1 justify-center items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          ref={inputRef}
          placeholder="Adicione uma nova Tarefa"
          className="h-[54px] rounded-lg w-full px-4 bg-gray-500 text-gray-300 outline-none active:outline-2 focus:text-gray-100 focus:outline-theme-purple-dark"
        />

        <button
          className="flex gap-1 justify-center items-center bg-theme-blue-dark text-gray-100 py-4 px-4 font-bold text-sm rounded-lg w-24 active:bg-theme-blue hover:bg-theme-blue"
          onClick={handleAddTask}
        >
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </div>

      <div className="w-full">
        <div className="flex w-full justify-between text-gray-100 border-b-2">
          <p>Tarefas Criadas <span>5</span></p>
          <p>Concluídas <span>0</span></p>
        </div>

        {
          todos.map(todo => {
            return <div className="text-gray-100" key={todo.id}>{todo.name}</div>
          })
        }
      </div>


    </main>
  )
}
