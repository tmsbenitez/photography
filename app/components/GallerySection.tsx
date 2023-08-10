import Image from 'next/image'
import Link from 'next/link'
import { type GalleryItemProps } from '@/types'

export function GalleryItem(props: GalleryItemProps) {
  const { href, author, imgSrc, imgAlt, linkStyle, imgStyle, width, height } =
    props

  return (
    <Link
      href={href}
      className={'flex flex-col gap-1 group w-full lg:w-fit h-fit ' + linkStyle}
      data-testid='gallery-item'
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={width}
        height={height}
        className={
          `duration-300 group-hover:scale-[0.99] w-full h-96 lg:h-full object-cover lg:object-none group-hover:brightness-75 ` +
          imgStyle
        }
      />
      <p>{author}</p>
    </Link>
  )
}

export default function GallerySection() {
  return (
    <section className='p-6 lg:p-12' id='gallery' data-testid='gallery-section'>
      <h2 className='font-serif text-5xl lg:text-7xl pb-16'>Gallery</h2>
      <div className='flex flex-col w-full gap-16'>
        <div className='flex flex-col lg:flex-row gap-16'>
          <GalleryItem
            href='/jeremybishop'
            imgSrc='/img/jeremy-bishop/mountain.avif'
            imgAlt='jeremy-bishop mountain'
            author='Jeremy Bishop'
            width={653}
            height={980}
          />
          <GalleryItem
            href='/scottwebb'
            imgSrc='/img/scott-webb/street.avif'
            imgAlt='scott-webb street'
            author='Scott Webb'
            width={1296}
            height={729}
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-16 items-center'>
          <GalleryItem
            href='/paulaborowska'
            imgSrc='/img/paula-borowska/bridge.avif'
            imgAlt='paula-borowska bridge'
            author='Paula Borowska'
            width={1074}
            height={806}
          />
          <GalleryItem
            href='/jontyson'
            imgSrc='/img/jon-tyson/statue.avif'
            imgAlt='jon-tyson statue'
            author='Jon Tyson'
            width={735}
            height={980}
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-16 items-end'>
          <GalleryItem
            href='/brookelark'
            imgSrc='/img/brooke-lark/food.avif'
            imgAlt='brooke-lark food'
            author='Brooke Lark'
            width={653}
            height={980}
          />
          <GalleryItem
            href='/kopidanny'
            imgSrc='/img/daniel-koponyas/lakecity.avif'
            imgAlt='daniel-koponyas lakecity'
            author='Daniel Koponyas'
            width={1296}
            height={864}
          />
        </div>
      </div>
    </section>
  )
}
