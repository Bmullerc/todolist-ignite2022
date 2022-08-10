import { PlusCircle } from "phosphor-react";

interface InputProps {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: () => void
}

export function Input({inputValue, setInputValue, handleAddTask}: InputProps) {
  return(
    <div className="-mt-8 flex w-full flex-1 justify-center items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          placeholder="Adicione uma nova Tarefa"
          className="h-[54px] rounded-lg w-full px-4 bg-gray-500 text-gray-300 focus:text-gray-100 focus:outline-theme-purple-dark border-none focus:ring-0 transition-colors duration-100 ease-in"
        />

        <button
          className="flex gap-1 justify-center items-center bg-theme-blue-dark text-gray-100 py-4 px-4 font-bold text-sm rounded-lg w-24 active:bg-theme-blue hover:bg-theme-blue transition-colors duration-100 ease-in"
          onClick={handleAddTask}
        >
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </div>
  )
}