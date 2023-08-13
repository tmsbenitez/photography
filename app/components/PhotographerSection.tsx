import Link from 'next/link'

const authors = [
  { text: 'Jeremy Bishop', url: '/jeremybishop' },
  { text: 'Scott Webb', url: '/scottwebb' },
  { text: 'Paula Borowska', url: '/paulaborowska' },
  { text: 'Jon Tyson', url: '/jontyson' },
  { text: 'Brooke Lark', url: '/brookelark' },
  { text: 'Daniel Koponyas', url: '/kopidanny' }
]

export default function PhotographerSection() {
  return (
    <section
      className='p-6 lg:p-12'
      id='photographers'
      data-testid='photographer-section'
    >
      <h2 className='font-serif text-5xl lg:text-7xl pb-12'>Photographers</h2>
      <div className='flex flex-col gap-4'>
        {authors.map(author => (
          <Link
            href={author.url}
            className='relative  w-fit text-3xl font-serif hover-underline'
            key={author.text}
          >
            {author.text}
          </Link>
        ))}
      </div>
    </section>
  )
}
