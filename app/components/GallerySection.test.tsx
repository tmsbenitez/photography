import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GallerySection, { GalleryItem } from './GallerySection'

describe('GalleryItem Component', () => {
  const mockProps = {
    href: '/test',
    imgSrc: '/test-image.avif',
    imgAlt: 'Test Image',
    author: 'Test Author',
    width: 500,
    height: 300
  }

  it('renders with correct props', () => {
    const { getByAltText } = render(<GalleryItem {...mockProps} />)
    const image = getByAltText('Test Image')

    expect(image).toBeInTheDocument()
    expect(image).toBeVisible()
  })
})

describe('GallerySection Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<GallerySection />)
    expect(container).toBeInTheDocument()
  })

  it('renders the correct number of GalleryItem components', () => {
    const { getAllByTestId } = render(<GallerySection />)
    const galleryItems = getAllByTestId('gallery-item')
    expect(galleryItems).toHaveLength(6)
  })
})
