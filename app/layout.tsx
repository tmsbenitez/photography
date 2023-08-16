import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import Head from './head'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfairdisplay',
  subsets: ['latin'],
  display: 'swap'
})

const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SFPRODISPLAYREGULAR.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFPRODISPLAYBOLD.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-sfpro',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'PHOTOGRAPHY',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${playfairDisplay.variable} ${sfPro.className}`}>
      <Head />
      <body
        className='text-white bg-black scroll-smooth'
      >
        {children}
      </body>
    </html>
  )
}
