'use client'

import Image from 'next/image'
import AvatarImg from '@/images/avatar.png'

const testimonies = [
  {
    title: 'Carlos M., Gerente Comercial',
    description:
      ' “Gracias a Bidwise ahora filtramos solo las licitaciones que realmente nos interesan. Hemos ganado un 30% más.”',
    company: 'TECNOFARMA'
  }
]

const Testimonials = () => {
  return (
    <div className='py-20 px-4 w-full max-w-screen-xl mx-auto' id='testimonios'>
      <div className='flex flex-col gap-8 items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold dark:text-white'>Confiaron en nosotros</h2>
          <p className='mt-4 text-lg dark:text-gray-300'>
            Nuestros usuarios han sido clave para nuestro éxito.
          </p>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-800 flex justify-center gap-4 h-auto w-160'
          >
            <Image src={AvatarImg} alt='Avatar' className='w-18 h-18 rounded-full mb-4' />
            <div className='flex flex-col gap-2'>
              <p className='mt-2 text-gray-600 dark:text-gray-400'>{testimony.description}</p>
              <h3 className='text-xl font-semibold dark:text-white'>{testimony.title}</h3>
              <p className='text-primary-700 dark:text-primary-600 font-bold'>
                {testimony.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
