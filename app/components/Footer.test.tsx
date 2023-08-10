import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders footer with link', () => {
    const { getByText, getByRole } = render(<Footer />)

    const footerElement = getByRole('contentinfo')
    const linkElement = getByText('Designed and Built with 🖤 by Tomas Benitez')

    expect(footerElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
  })

  it('has the correct link', () => {
    const { getByText } = render(<Footer />)

    const linkElement = getByText('Designed and Built with 🖤 by Tomas Benitez')

    expect(linkElement).toHaveAttribute('href', 'https://tmsbenitez.ar')
  })

  it('applies hover styles on link', () => {
    const { getByText } = render(<Footer />)

    const linkElement = getByText('Designed and Built with 🖤 by Tomas Benitez')

    expect(linkElement).toHaveClass('opacity-50')

    linkElement.focus()

    expect(linkElement).toHaveClass('hover:opacity-100')
  })
})
