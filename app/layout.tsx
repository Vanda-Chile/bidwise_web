import { ThemeModeScript } from 'flowbite-react'
import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

const quickSand = Quicksand({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bidwise | Conecta con licitaciones públicas',
  description: 'Conecta con todas las licitaciones públicas de forma inteligente y automatizada',
  openGraph: {
    title: 'Bidwise | Conecta con licitaciones públicas',
    description: 'Conecta con todas las licitaciones públicas de forma inteligente y automatizada',
    url: 'https://bidwise.cl',
    siteName: 'Bidwise',
    images: [
      {
        url: 'https://bidwise.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bidwise | Conecta con licitaciones públicas'
      }
    ],
    locale: 'es_CL',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bidwise | Conecta con licitaciones públicas',
    description: 'Conecta con todas las licitaciones públicas de forma inteligente y automatizada',
    site: '@bidwisecl',
    creator: '@bidwisecl',
    images: ['https://bidwise.cl/og-image.png']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${quickSand.className} antialiased scroll-pt-10 `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
