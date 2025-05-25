'use client'

// import { LinkIcon, LightBulbIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
// import ImgIntro from '@/images/home_desktop.png'
import ImgStep1 from '@/images/step-1.png'
import ImgStep3 from '@/images/step-3.png'
import ImgStep2 from '@/images/Licitaciones/Detalle.png'

// const steps = [
//   {
//     title: 'Conéctate con Mercado Público',
//     description: '',
//     icon: LinkIcon
//   },
//   {
//     title: 'Filtra y analiza oportunidades con IA',
//     description: '',
//     icon: LightBulbIcon
//   },
//   {
//     title: 'Participa y gana más licitaciones',
//     description: '',
//     icon: CheckBadgeIcon
//   }
// ]

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
    image: ImgStep3
  },
  {
    title: 'Participa y gana más licitaciones',
    description:
      'Con la información y análisis de Bidwise, participa en las licitaciones que realmente importan y aumenta tus posibilidades de ganar.',
    image: ImgStep2
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
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {steps.map((benefit, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center h-60'
          >
            <benefit.icon className='w-14 h-14 text-primary-600 mb-4' />
            <h3 className='text-xl font-semibold dark:text-white'>{benefit.title}</h3>
          </div>
        ))}
      </div> */}
      <div className='overflow-hidden lg:overflow-visible py-8 sm:py-24'>
        {/* <div className='mx-auto max-w-7xl mb-10'>
          <div className='mx-auto max-w-none gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none flex flex-row-reverse sm:flex-row '>
            <div className='relative w-full h-full'>
              <Image
                src={ImgStep1}
                alt='Product screenshot'
                className='w-full max-w-none rounded-xl ring-1'
                width='2432'
                height='1442'
              />
            </div>
            <div className='lg:pt-4 lg:pr-8'>
              <div className='lg:max-w-gilg flex flex-col justify-center h-full'>
                <h4 className='uppercase tracking-widest font-bold text-primary-700 dark:text-primary-600'>
                  Paso 1
                </h4>
                <h2 className='mt-2 text-3xl leading-10 font-bold text-pretty text-gray-900 line-height-2 dark:text-white'>
                  Crea tus reglas
                </h2>
                <h3 className='mt-2 mb-5 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
                  Conéctate a Mercado Público y crea tus reglas de búsqueda. Filtra por tipo de
                  licitación, región, monto y más.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto grid max-w-none grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pt-4 lg:pr-8'>
              <div className='lg:max-w-gilg flex flex-col justify-center h-full'>
                <h4 className='uppercase tracking-widest font-bold text-primary-700 dark:text-primary-600'>
                  Paso 2
                </h4>
                <h2 className='mt-2 text-3xl leading-10 font-bold text-pretty text-gray-900 line-height-2 dark:text-white'>
                  Analiza y filtra oportunidades
                </h2>
                <h3 className='mt-2 mb-5 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
                  Bidwise utiliza IA para analizar y filtrar las oportunidades más relevantes para
                  ti. Recibe alertas y notificaciones en tiempo real.
                </h3>
              </div>
            </div>
            <div className='relative w-full h-full'>
              <Image
                src={ImgStep3}
                alt='Product screenshot'
                className='w-full max-w-none rounded-xl ring-1'
                width='2432'
                height='1442'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto grid max-w-none grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='relative w-full h-full'>
              <Image
                src={ImgStep2}
                alt='Product screenshot'
                className='w-full max-w-none rounded-xl ring-1 shadow-xl'
                width='2432'
                height='1442'
              />
            </div>
            <div className='lg:pt-4 lg:pr-8'>
              <div className='lg:max-w-gilg flex flex-col justify-center h-full'>
                <h4 className='uppercase tracking-widest font-bold text-primary-700 dark:text-primary-600'>
                  Paso 3
                </h4>
                <h2 className='mt-2 text-3xl leading-10 font-bold text-pretty text-gray-900 line-height-2 dark:text-white'>
                  Participa y gana más licitaciones
                </h2>
                <h3 className='mt-2 mb-5 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
                  Con la información y análisis de Bidwise, participa en las licitaciones que
                  realmente importan y aumenta tus posibilidades de ganar.
                </h3>
              </div>
            </div>
          </div>
        </div> */}
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
