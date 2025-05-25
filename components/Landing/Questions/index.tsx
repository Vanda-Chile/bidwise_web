'use client'

import { useState } from 'react'
import 'flowbite'
import { ChevronDownIcon } from 'flowbite-react'

const questions = [
  {
    id: 1,
    question: '¿Bidwise funciona con todas las licitaciones públicas?',
    answer:
      'Sí, Bidwise está diseñado para funcionar con la mayoría de las plataformas de licitaciones públicas. Nuestro sistema se conecta a diversas fuentes oficiales para centralizar las oportunidades en un solo lugar, lo que te permite ahorrar tiempo y no perder ninguna licitación relevante para tu negocio.'
  },
  {
    id: 2,
    question: '¿Requiere integración técnica?',
    answer:
      'No necesariamente. Bidwise es una plataforma lista para usar desde el primer momento. Sin embargo, si tu empresa necesita una integración con sistemas internos (como CRM o ERP), ofrecemos opciones de integración técnica personalizadas a través de nuestra API.'
  },
  {
    id: 3,
    question: '¿Qué diferencia a Bidwise de otras soluciones?',
    answer:
      'Bidwise no solo centraliza licitaciones, también utiliza inteligencia artificial para filtrar oportunidades relevantes según tu perfil, automatiza alertas personalizadas, y proporciona herramientas para mejorar tus tasas de éxito. A diferencia de otras soluciones, Bidwise se enfoca en hacer el proceso más eficiente, inteligente y orientado a resultados.'
  }
]

const Questions = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className='py-20 px-4 w-full mx-auto' id='preguntas'>
      <div className='flex flex-col gap-8 items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold dark:text-white'>Preguntas frecuentes</h2>
          <p className='mt-4 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
            Aquí encontrarás respuestas a las preguntas más comunes sobre Bidwise.
          </p>
        </div>
        <div id='accordion-collapse' className='w-full max-w-2xl'>
          {questions.map((item) => (
            <div key={item.id} className='cursor-pointer'>
              <h2 id={`accordion-collapse-heading-${item.id}`}>
                <button
                  type='button'
                  className='flex flex-col w-full mb-2 p-5 font-medium rtl:text-right border border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer rounded-lg'
                  aria-expanded={openId === item.id}
                  aria-controls={`accordion-collapse-body-${item.id}`}
                  onClick={() => handleToggle(item.id)}
                >
                  <span className='flex items-center justify-between text-lg text-left w-full'>
                    {item.question}
                    <ChevronDownIcon
                      className={`w-8 h-8 ml-2 transition-transform duration-300 text-primary-700 dark:text-white ${
                        openId === item.id ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                  <div
                    id={`accordion-collapse-body-${item.id}`}
                    className={`${openId === item.id ? '' : 'hidden'}`}
                    aria-labelledby={`accordion-collapse-heading-${item.id}`}
                  >
                    <div>
                      <p className='mb-2 text-left text-gray-500 dark:text-gray-400'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Questions
