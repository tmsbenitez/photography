'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className='px-6 py-24 sm:px-12 sm:py-36 flex flex-col gap-12 min-h-[85vh]'>
        <p className='font-serif text-6xl sm:text-8xl'>User Not Found.</p>
        <p className='text-lg tracking-wide'>
          I&apos;m sorry, but the user you are trying to find cannot be found.
          Try searching for him on{' '}
          <Link href='https://unsplash.com' className='underline'>
            Unsplash.
          </Link>
        </p>
        <Link className='underline text-lg w-fit' href='/'>
          Return to home
        </Link>
      </main>
      <Footer />
    </>
  )
}
