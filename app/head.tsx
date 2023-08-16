export default function Head() {
  const meta = {
    title: 'PHOTOGRAPHY',
    description:
      'Explore Inspiring Photographers and Their Open-Licensed Works.',
    image: '/og.png',
    type: 'website'
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name='robots' content='all' />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content='https://photography-neon.vercel.app' />
      <link rel='canonical' href='https://photography-neon.vercel.app' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta
        property='og:image'
        content={`https://photography-neon.vercel.app${meta.image}`}
      />
      <meta property='og:image:width' content='1920' />
      <meta property='og:image:height' content='1080' />
      <meta
        property='twitter:image'
        content={`https://photography-neon.vercel.app${meta.image}`}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='robots' content='all' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content={meta.description}
      />
    </>
  )
}
