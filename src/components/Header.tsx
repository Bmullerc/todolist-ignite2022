import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className='bg-gray-700 h-[200px] flex items-center'>
      <img src={Logo} alt="Todo List Rocket Logo" className='mx-auto h-12'/>
    </header>
  )
}
