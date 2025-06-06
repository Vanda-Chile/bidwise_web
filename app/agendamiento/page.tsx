import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SchedulingPage() {
  return (
    <div className='flex pt-30 px-4 min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 overflow-x-hidden'>
      <div className='flex flex-col justify-start w-full max-w-6xl'>
        <Link
          href='/'
          className='mb-2 inline-flex items-center text-primary-700 dark:text-primary-600 hover:underline font-medium'
        >
          <ChevronLeftIcon className='w-4 h-4 me-2' /> Volver atrás
        </Link>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
          Agenda una demostración
          <span className='text-primary-700 dark:text-primary-600'> gratuita</span>
        </h1>
        <p className='mt-2 mb-5 text-lg font-medium text-pretty text-gray-500 sm:text-2xl/8'>
          Revisa nuestra disponibilidad y agenda una reunión con nosotros.
        </p>
      </div>
      <div className='w-full max-w-6xl h-full p-4 bg-white border rounded-lg border-gray-200 dark:border-gray-800 mb-10'>
        <iframe
          src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1H6ZVSpZSFUWiH-l3Pna13KChfeJrlVed38gjFXLpVBhYq5yQgcmg06paF7wKYXI8-hwcHNuUJ?gv=true'
          style={{ border: 0 }}
          width='100%'
          className='h-320 lg:h-250 rounded-lg'
        ></iframe>
      </div>
    </div>
  )
}
