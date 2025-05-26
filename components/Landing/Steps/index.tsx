'use client'

import Image from 'next/image'
import ImgStep1 from '@/images/step-1.png'
import ImgStep2 from '@/images/step-2.png'
import ImgStep3 from '@/images/step-3.png'

const steps = [
  {
    title: 'Crea tus reglas',
    description:
      'Conéctate a Mercado Público y crea tus reglas de búsqueda. Filtra por tipo de licitación, región, monto y más.',
    image: ImgStep1
  },
  {
    title: 'Analiza y filtra oportunidades',
    description:
      'Bidwise utiliza IA para analizar y filtrar las oportunidades más relevantes para ti. Recibe alertas y notificaciones en tiempo real.',
    image: ImgStep2
  },
  {
    title: 'Participa y gana más licitaciones',
    description:
      'Con la información y análisis de Bidwise, participa en las licitaciones que realmente importan y aumenta tus posibilidades de ganar.',
    image: ImgStep3
  }
]

const Steps = () => {
  return (
    <div className='py-20 px-4 w-full max-w-screen-xl mx-auto' id='como-funciona'>
      <div className='flex flex-col gap-8 items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold dark:text-white'>¿Cómo funciona?</h2>
          <p className='mt-4 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
            En simples pasos podrás usar nuestra plataforma.
          </p>
        </div>
      </div>
      <div className='overflow-hidden lg:overflow-visible py-8 sm:py-24'>
        <div className='container max-w-7xl flex flex-col items-center justify-center mx-auto '>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`gap-8 mb-10 rounded-lg flex flex-col items-center h-auto ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className='flex flex-col gap-2 w-full lg:w-120'>
                <h4 className='uppercase tracking-widest font-bold text-primary-700 dark:text-primary-600'>
                  Paso {index + 1}
                </h4>
                <h3 className='text-3xl font-semibold dark:text-white'>{step.title}</h3>
                <p className='mt-2 text-gray-600 font-medium text-xl/8 dark:text-gray-400'>
                  {step.description}
                </p>
              </div>
              <Image src={step.image} alt='Avatar' className='mb-4 rounded-lg' width={600} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps
