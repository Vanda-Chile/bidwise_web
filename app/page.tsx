import Hero from '@/components/Landing/Hero'
import Intro from '@/components/Landing/Intro'
import Benefits from '@/components/Landing/Benefits'
import Steps from '@/components/Landing/Steps'
import Questions from '@/components/Landing/Questions'
import Testimonials from '@/components/Landing/Testimonials'
import CallToAction from '@/components/Landing/CalltoAction'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 overflow-x-hidden'>
      <Hero />
      <Intro />
      <Benefits />
      <Steps />
      <CallToAction />
      <Testimonials />
      <Questions />
    </main>
  )
}
