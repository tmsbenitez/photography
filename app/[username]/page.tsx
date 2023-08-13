import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { getPhotos, getUser } from '../helpers/getUnsplash'
import SmoothScroll from '../helpers/SmoothScroll'
import { type ParamsUser } from '@/types'

export default async function Photographer({ params }: ParamsUser) {
  const photos = await getPhotos(params.username)
  const user = await getUser(params.username)

  console.log(user)

  const images = photos.map((photo: any) => (
    <Image
      priority
      key={photo.id}
      alt={photo.id}
      width={500}
      height={500}
      src={photo.urls.regular}
      className='sm:h-72 sm:h-[500px] object-cover'
    />
  ))

  return (
    <>
      <Header />
      <main className='overflow-x-hidden flex flex-col-reverse gap-6 sm:gap-0 pt-32 p-6 sm:p-0 sm:flex-col'>
        <div className='flex sm:hidden flex-col gap-4'>{images}</div>
        <SmoothScroll>{images}</SmoothScroll>
        <div className='sm:fixed flex flex-col gap-4 sm:top-36 sm:left-12'>
          <p className='text-7xl font-bold'>{user.name}</p>
          <div className='flex gap-4 text-xl'>
            {user.social?.instagram_username && (
              <Link
                className='opacity-50 tracking-wide duration-150 hover:opacity-100'
                href={
                  'https://www.instagram.com/' + user.social?.instagram_username
                }
              >
                Instagram
              </Link>
            )}
            {user.social?.portfolio_url && (
              <Link
                className='opacity-50 tracking-wide duration-150 hover:opacity-100'
                href={user.social?.portfolio_url}
              >
                Portfolio
              </Link>
            )}
            {user.social?.twitter && (
              <Link
                className='opacity-50 tracking-wide duration-150 hover:opacity-100'
                href={user.social?.twitter}
              >
                Twitter
              </Link>
            )}
            {user.social?.paypal_email && (
              <Link
                className='opacity-50 tracking-wide duration-150 hover:opacity-100'
                href={user.social?.paypal_email}
              >
                PayPal
              </Link>
            )}
            {user.username && (
              <Link
                className='opacity-50 tracking-wide duration-150 hover:opacity-100'
                href={'https://unsplash.com/@' + user.username}
              >
                Unsplash
              </Link>
            )}
          </div>
          <p className='max-w-2xl sm:h-32 tracking-wide text-lg'>{user.bio}</p>
        </div>
      </main>
    </>
  )
}
