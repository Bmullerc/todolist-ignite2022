import { useEffect, useState } from "react";
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";

interface TodoProps {
  id: number,
  name: string,
  complete: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [inputValue, setInputValue] = useState('')

  const LOCAL_STORAGE_KEY = '@todoignite2022.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTask() {
    if (inputValue === '') return
    setTodos(prevTodos => {
      return [{
        id: Date.now(),
        name: inputValue,
        complete: false,
      }, ...prevTodos]
    })
    setInputValue('')
  }

  function handleDeleteTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  function handleToggleTodo(id: number) {
    const newTodos = [...todos]
    newTodos.filter(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }

  return (
    <main className="flex flex-col justify-center items-center m-auto max-w-3xl pb-28">

      <div className="-mt-8 flex w-full flex-1 justify-center items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder="Adicione uma nova Tarefa"
          className="h-[54px] rounded-lg w-full px-4 bg-gray-500 text-gray-300 focus:text-gray-100 focus:outline-theme-purple-dark border-none focus:ring-0"
        />

        <button
          className="flex gap-1 justify-center items-center bg-theme-blue-dark text-gray-100 py-4 px-4 font-bold text-sm rounded-lg w-24 active:bg-theme-blue hover:bg-theme-blue"
          onClick={handleAddTask}
        >
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </div>

      <div className="w-full mt-16">
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

        <div className="flex mt-6 flex-col gap-3 ">
          {
            (todos.length > 0) ? todos.map(todo => {
              return (
                <div
                  key={todo.id}
                  className="flex px-2 py-4 items-start justify-between text-left text-sm text-gray-100 bg-gray-500 h-[72px] rounded-lg"
                >
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="hover:border-theme-blue-dark bg-gray-500 border-2 border-theme-blue h-5 w-5 checked:text-theme-purple-dark rounded-full ml-4 mr-4 mt-1 focus:ring-offset-0 outline-theme-purple-dark checked:hover:text-theme-purple"
                  />
                  {!todo.complete ? todo.name : <span className="line-through text-gray-300">{todo.name}</span>}

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="mr-4 ml-8 mt-1"
                  >
                    <Trash size={20} className="text-gray-300 hover:text-theme-danger" />
                  </button>
                </div>
              )
            })
              :
              <div className="text-gray-300 flex flex-col items-center border-t-2 border-gray-400 py-16">
                <ClipboardText size={56} weight="light" className="text-gray-400 mb-4"/>
                <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
          }
        </div>
      </div>
    </main>
  )
}
