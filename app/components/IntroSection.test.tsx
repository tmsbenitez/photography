import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IntroSection from './IntroSection'

describe('IntroSection Component', () => {
  it('renders section element', () => {
    const { container } = render(<IntroSection />)
    const sectionElement = container.querySelector('section')
    expect(sectionElement).toBeInTheDocument()
  })

  it('renders heading element with correct text', () => {
    const { container } = render(<IntroSection />)
    const headingElement = container.querySelector('h3')

    expect(headingElement).toBeInTheDocument()

    const headingText = headingElement?.textContent
    const expectedHeadingText = /Unleashing Creativity:/i

    expect(headingText).toMatch(expectedHeadingText)
  })

  it('renders paragraph elements with correct text', () => {
    const { container } = render(<IntroSection />)
    const paragraphElements = container.querySelectorAll('p')

    const paragraphTexts = Array.from(paragraphElements).map(p => p.textContent)

    expect(paragraphTexts.join(' ')).toContain(
      'Welcome to our website showcasing'
    )
    expect(paragraphTexts.join(' ')).toContain(
      'Each photograph featured on this platform'
    )
    expect(paragraphTexts.join(' ')).toContain(
      "Whether you're a designer seeking inspiration, a blogger looking"
    )
  })

  it('renders div element with correct class', () => {
    const { container } = render(<IntroSection />)
    const divElement = container.querySelector('div.max-w-3xl')
    expect(divElement).toBeInTheDocument()
  })

  it('renders multiple paragraph elements', () => {
    const { container } = render(<IntroSection />)
    const paragraphElements = container.querySelectorAll('p')
    expect(paragraphElements.length).toBe(3)
  })
})
