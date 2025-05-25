'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative isolate px-6 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className='mx-auto max-w-5xl py-32 sm:py-48 lg:py-56'
      >
        <div className='text-center'>
          <h1 className='text-5xl font-bold tracking-tight text-balance text-gray-900 dark:text-white md:text-6xl'>
            Conecta con todas las <span className='text-primary-700'>licitaciones públicas</span> de
            forma inteligente y automatizada
          </h1>
          <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-2xl/8'>
            Bidwise puede ayudarte a encontrar, analizar y ganar más licitaciones del Estado con
            inteligencia artificial.
          </p>
          <div className='mt-10 flex gap-x-2 md:flex-row items-center justify-center md:gap-x-2'>
            <Link
              href='#intro'
              className='rounded-lg bg-primary-700 px-3.5 py-2.5 text-md font-semibold text-white hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 ease-in-out'
            >
              Descubrir cómo
            </Link>
            {/* <Link
              href='#intro'
              className='rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-md font-semibold text-gray-800 hover:bg-gray-100 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 ease-in-out'
            >
              Saber más
            </Link> */}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
