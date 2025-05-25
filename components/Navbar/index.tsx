'use client'

import 'flowbite'
import Image from 'next/image'
import { DarkThemeToggle } from 'flowbite-react'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'
import ButtonDemo from '../ButtonDemo'

const navlinks = [
  { name: 'Que hacemos', href: '/#intro' },
  { name: 'Beneficios', href: '/#beneficios' },
  { name: 'Como funciona', href: '/#como-funciona' },
  { name: 'Testimonios', href: '/#testimonios' },
  { name: 'Preguntas', href: '/#preguntas' }
]

type NavLink = {
  name: string
  href: string
  onClick: () => void
}

const NavLink = ({ link }: { link: NavLink }) => {
  const pathname = usePathname()
  const activeClass = pathname === link.href ? 'text-primary-700' : 'text-gray-900 dark:text-white'
  return (
    <li className='mb-4 lg:mb-0'>
      <Link
        href={link.href}
        data-collapse-toggle='navbar-cta'
        aria-controls='navbar-cta'
        className={`text-md font-semibold ${activeClass} hover:text-primary-700 dark:hover:text-primary-500 transition-all duration-300 ease-in-out active:text-primary-700 dark:active:text-primary-500 lg:p-0 lg:hover:bg-transparent lg:rounded-lg lg:hover:text-primary-700 dark:lg:hover:bg-transparent dark:lg:hover:text-primary-500`}
        onClick={link.onClick}
      >
        {link.name}
      </Link>
    </li>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    const menuElement = document.getElementById('navbar-cta')
    if (menuElement) {
      menuElement.classList.toggle('hidden')
    }
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav className='bg-white border-gray-200 dark:border-gray-800 dark:bg-gray-900 fixed top-0 z-50 w-full border-b'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
            src='./logo_bidwise_2.svg'
            width={120}
            height={80}
            className='h-8'
            alt='Flowbite Logo'
          />
        </Link>
        <div className='flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse'>
          <DarkThemeToggle className='cursor-pointer' />
          <button
            // data-collapse-toggle='navbar-menu'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 cursor-pointer justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            // aria-controls='navbar-menu'
            aria-expanded='false'
            onClick={toggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            {menuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 '
          id='navbar-cta'
        >
          <ul className='flex items-center justify-center flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:border-gray-700 transition-all duration-300 ease-in-out'>
            {navlinks.map((link, index) => (
              <NavLink key={index} link={{ ...link, onClick: toggleMenu }} />
            ))}
            <ButtonDemo onClick={toggleMenu} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
