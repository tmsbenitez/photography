import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex p-6 sm:px-12 h-36 items-end justify-end'>
      <Link
        href='https://tmsbenitez.ar'
        className='opacity-50 duration-300 hover:opacity-100'
      >
        Designed and Built by Tomas Benitez
      </Link>
    </footer>
  )
}
