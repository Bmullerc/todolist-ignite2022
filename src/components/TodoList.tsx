import { useEffect, useState } from "react";
import { NoTodos } from "./NoTodos";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { TasksText } from "./TasksText";

export interface TodoProps {
  id: number
  name: string
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
      if (todo.id === id) todo.complete = !todo.complete
    })
    setTodos(newTodos)
  }

  return (
    <main className="flex flex-col justify-center items-center m-auto max-w-3xl pb-28">
      <Input inputValue={inputValue} setInputValue={setInputValue} handleAddTask={handleAddTask} />

      <div className="w-full mt-16">

        <TasksText todos={todos} />

        <div className="flex mt-6 flex-col gap-3 ">
          {
            (todos.length > 0)
              ? todos.map(todo => <Todo todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />)
              : <NoTodos />
          }
        </div>
      </div>
    </main>
  )
}
