import Image from 'next/image'
import Header from '../components/Header'

export default async function Photographer({
  params
}: {
  params: { username: string }
}) {
  async function getData() {
    const res = await fetch(
      `https://api.unsplash.com/users/${params.username}/photos?&per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }

  const data = await getData()

  return (
    <>
      <Header />
      <div className='grid grid-cols-4 gap-4 w-fit px-12 py-36'>
        {data.map((photo: any) => (
          <Image
            key={photo.id}
            alt={photo.id}
            placeholder='blur'
            blurDataURL={photo.urls.small}
            width={384}
            height={384}
            src={photo.urls.small}
            className='w-96 h-96 object-cover'
          />
        ))}
      </div>
    </>
  )
}
