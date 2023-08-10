import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainSection from './MainSection'

describe('MainSection Component', () => {
  it('renders all sections', () => {
    const { getByTestId } = render(<MainSection />)

    const landingSection = getByTestId('landing-section')
    const introSection = getByTestId('intro-section')
    const gallerySection = getByTestId('gallery-section')
    const photographerSection = getByTestId('photographer-section')

    expect(landingSection).toBeInTheDocument()
    expect(introSection).toBeInTheDocument()
    expect(gallerySection).toBeInTheDocument()
    expect(photographerSection).toBeInTheDocument()
  })
})
