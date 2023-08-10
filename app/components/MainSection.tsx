import React from 'react'
import LandingSection from './LandingSection'
import IntroSection from './IntroSection'
import GallerySection from './GallerySection'
import PhotographerSection from './PhotographerSection'

const MainSection: React.FC = () => {
  return (
    <main className='w-full'>
      <LandingSection />
      <IntroSection />
      <GallerySection />
      <PhotographerSection />
    </main>
  )
}

export default MainSection
