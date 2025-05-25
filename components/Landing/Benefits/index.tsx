'use client'

import {
  LinkIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  PuzzlePieceIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'
import { motion } from 'motion/react'

const benefits = [
  {
    title: 'Conexión diaria automática con Mercado Público',
    description:
      'Recibe notificaciones diarias de nuevas licitaciones que se ajustan a tus criterios.',
    icon: LinkIcon
  },
  {
    title: 'Filtrado inteligente con palabras clave y sinónimos',
    description: 'Encuentra licitaciones relevantes utilizando palabras clave y sinónimos.',
    icon: LightBulbIcon
  },
  {
    title: 'Análisis de afinidad y predicción de adjudicación',
    description: 'Utiliza nuestra IA para analizar y predecir el éxito de tus propuestas.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Ahorro de tiempo y digitalización del proceso completo',
    description: 'Encuentra y analiza licitaciones en minutos, no en horas.',
    icon: ClockIcon
  },
  {
    title: ' Integración nativa con SmartGO',
    description: 'Conecta Bidwise con SmartGO para una gestión de licitaciones más eficiente.',
    icon: PuzzlePieceIcon
  },
  {
    title: 'Soporte y capacitación personalizada',
    description: 'Recibe asistencia y formación para maximizar el uso de nuestra plataforma.',
    icon: LifebuoyIcon
  }
]

const Benefits = () => {
  return (
    <div className='py-20 px-4 w-full max-w-screen-xl mx-auto' id='beneficios'>
      <div className='flex flex-col gap-8 items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold dark:text-white'>¿Por qué elegir Bidwise?</h2>
          <p className='mt-4 text-lg dark:text-gray-300'>
            Conoce los beneficios que nuestra plataforma puede traer a tu negocio.
          </p>
        </div>
      </div>
      <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className='bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-800  flex flex-col '
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <benefit.icon className='w-10 h-10 text-primary-600 mb-4' />
            <h3 className='text-xl font-semibold dark:text-white'>{benefit.title}</h3>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
