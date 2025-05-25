'use client'

import Image from 'next/image'
import ImgIntro from '@/images/home_desktop.png'
// import { motion } from 'motion/react'

const Intro = () => {
  return (
    <div className='overflow-hidden lg:overflow-visible py-8 px-4 sm:py-24' id='intro'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto grid max-w-none grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pt-4 lg:pr-8'>
            <div className='lg:max-w-lg'>
              <h2 className='mt-2 text-4xl leading-12 font-bold tracking-tight text-pretty text-gray-900 line-height-4 dark:text-white'>
                Que hacemos
              </h2>
              <h3 className='mt-6 mb-5 text-xl/8 font-medium text-gray-600 dark:text-gray-400'>
                A través de un análisis detallado de tus criterios específicos, Bidwise filtra y
                presenta las oportunidades más relevantes, asegurando que no pierdas ninguna opción
                valiosa en el competitivo mundo de las licitaciones.
              </h3>
            </div>
          </div>
          <div
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }}
            className='relative w-full h-full'
          >
            <Image
              src={ImgIntro}
              alt='Product screenshot'
              className='w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0'
              width='2432'
              height='1442'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
