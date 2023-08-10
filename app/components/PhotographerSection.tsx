import Link from 'next/link'

const authors = [
  'Jeremy Bishop',
  'Scott Webb',
  'Paula Borowska',
  'Jon Tyson',
  'Brooke Lark',
  'Daniel Koponyas'
]

export default function PhotographerSection() {
  return (
    <section className='p-6 lg:p-12' id='photographers' data-testid='photographer-section'>
      <h2 className='font-serif text-5xl lg:text-7xl pb-12'>Photographers</h2>
      <div className='flex flex-col gap-4'>
        {authors.map(author => (
          <Link
            href='/'
            className='relative  w-fit text-3xl font-serif hover-underline'
            key={author}
          >
            {author}
          </Link>
        ))}
      </div>
    </section>
  )
}
