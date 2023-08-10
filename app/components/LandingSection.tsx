export default function LandingSection() {
  return (
    <section
      className='relative flex items-center'
      data-testid='landing-section'
    >
      <p
        data-testid='landing-text'
        className='absolute text-6xl lg:text-[10rem] ml-6 lg:ml-12 flex flex-col font-serif lg:leading-[8rem] pointer-events-none text-white uppercase'
      >
        <span className='ml-6 lg:ml-36'>Overcome</span>
        <span>Creative</span>
        <span className='ml-12 lg:ml-72'>Adversity</span>
      </p>
      <video
        data-testid='landing-video'
        autoPlay
        muted
        loop
        className='w-full object-cover h-screen -z-10 brightness-75'
      >
        <source src='/video/landscapevid.mp4' />
      </video>
      <div
        data-testid='gradient-overlay'
        className='absolute bg-gradient-to-t from-black to-transparent z-10 w-full h-72 bottom-0'
      />
    </section>
  )
}
