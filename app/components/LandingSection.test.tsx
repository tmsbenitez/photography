import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LandingSection from './LandingSection'

describe('LandingSection', () => {
  it('renders without errors', () => {
    render(<LandingSection />)
  })

  it('displays the text correctly', () => {
    const { getByText } = render(<LandingSection />)

    const textElements = ['Overcome', 'Creativity', 'Adversity']
    textElements.forEach(text => {
      const element = getByText(text)
      expect(element).toBeInTheDocument()
    })
  })

  it('displays the video with correct attributes', () => {
    const { getByTestId } = render(<LandingSection />)

    const videoElement = getByTestId('landing-video')
    const sourceElement = videoElement.querySelector('source')

    expect(videoElement).toHaveAttribute('autoPlay')
    expect(videoElement).toHaveAttribute('loop')
    expect(sourceElement).toHaveAttribute('src', '/video/landscape.mp4')
    expect(videoElement).toHaveClass('w-full')
    expect(videoElement).toHaveClass('object-cover')
    expect(videoElement).toHaveClass('h-screen')
    expect(videoElement).toHaveClass('-z-10')
    expect(videoElement).toHaveClass('brightness-75')
  })

  it('displays the gradient overlay', () => {
    const { getByTestId } = render(<LandingSection />)

    const gradientOverlay = getByTestId('gradient-overlay')

    expect(gradientOverlay).toBeInTheDocument()
    expect(gradientOverlay).toHaveClass('bg-gradient-to-t')
    expect(gradientOverlay).toHaveClass('from-black')
    expect(gradientOverlay).toHaveClass('to-transparent')
    expect(gradientOverlay).toHaveClass('z-10')
    expect(gradientOverlay).toHaveClass('w-full')
    expect(gradientOverlay).toHaveClass('h-72')
    expect(gradientOverlay).toHaveClass('bottom-0')
  })
})
