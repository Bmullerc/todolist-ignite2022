import { ClipboardText } from "phosphor-react";

export function NoTodos() {
  return (
    <div className="text-gray-300 flex flex-col items-center border-t-2 border-gray-400 py-16">
      <ClipboardText size={56} weight="light" className="text-gray-400 mb-4" />
      <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}