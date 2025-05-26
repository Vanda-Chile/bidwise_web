'use client'

import ButtonDemo from '@/components/ButtonDemo'

const CallToAction = () => {
  return (
    <div
      className='flex flex-col py-20 items-center justify-center w-full h-full p-4 bg-gray-50 dark:bg-gray-800'
      id='call-to-action'
    >
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center w-full h-full'>
        <h2 className='text-4xl font-bold text-center text-gray-800 dark:text-white'>
          ¿Ya te decidiste?
        </h2>
        <p className='mt-2 mb-4 text-center text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
          Agenda una demostración gratuita y <br /> descubre todas las funcionalidades de Bidwise.
        </p>
        <ButtonDemo />
      </div>
    </div>
  )
}

export default CallToAction
