import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotographerSection from './PhotographerSection'

describe('PhotographerSection Component', () => {
  it('renders photographer section with title and links', () => {
    const { getByTestId, getByText, getAllByRole } = render(
      <PhotographerSection />
    )

    const sectionElement = getByTestId('photographer-section')
    const titleElement = getByText('Photographers')
    const linkElements = getAllByRole('link')

    expect(sectionElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(linkElements.length).toBe(6)
  })

  it('renders correct author links', () => {
    const { getByRole } = render(<PhotographerSection />)

    const authorLinks = [
      'Jeremy Bishop',
      'Scott Webb',
      'Paula Borowska',
      'Jon Tyson',
      'Brooke Lark',
      'Daniel Koponyas'
    ]

    authorLinks.forEach(author => {
      const linkElement = getByRole('link', { name: author })
      expect(linkElement).toBeInTheDocument()
    })
  })
})
