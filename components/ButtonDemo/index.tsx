'use client'

import { useRouter } from 'next/navigation'

type ButtonDemoProps = {
  onClick?: () => void
}

const ButtonDemo = ({ onClick }: ButtonDemoProps) => {
  const router = useRouter()

  const handleScheduleDemo = () => {
    router.push('/agendamiento')
  }

  const handleClick = () => {
    handleScheduleDemo()
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      type='button'
      className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-md px-4 py-2 text-center dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus:ring-primary-800 transition-all duration-300 ease-in-out'
      onClick={handleClick}
    >
      Solicitar una demo
    </button>
  )
}

export default ButtonDemo
