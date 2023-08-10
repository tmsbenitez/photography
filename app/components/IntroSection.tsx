import React from 'react'

export default function IntroSection() {
  return (
    <section className='p-6 lg:p-12' data-testid='intro-section'>
      <h3 className='font-serif text-4xl max-w-6xl leading-snug'>
        Unleashing Creativity: <br /> Explore Inspiring Photographers and Their
        Open-Licensed Works.
      </h3>
      <div className='max-w-3xl flex flex-col gap-4 tracking-wide leading-loose py-4'>
        <p>
          Welcome to our website showcasing a diverse collection of
          photographers and their stunning work under open licenses! Here,
          you&apos;ll discover a treasure trove of captivating images captured
          by talented photographers who believe in sharing their creativity with
          the world. From mesmerizing landscapes to captivating portraits, our
          curated gallery brings together the vision and artistry of these
          photographers who have embraced the spirit of open licensing.
        </p>
        <p>
          Each photograph featured on this platform comes with the freedom to
          use, modify, and adapt according to your needs, all while respecting
          the terms set forth by the photographers. We believe in the power of
          collaboration and creativity, and our goal is to provide a space where
          photographers and enthusiasts can connect through the universal
          language of visuals.
        </p>
        <p>
          Whether you&apos;re a designer seeking inspiration, a blogger looking
          for eye-catching visuals, or simply someone who appreciates the beauty
          of photography, our platform invites you to explore, create, and
          reimagine. Join us in celebrating the boundless world of open-licensed
          photography, where every click captures a moment of shared artistry
          and possibility.
        </p>
      </div>
    </section>
  )
}
