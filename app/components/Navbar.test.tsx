import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar, { NavLink } from './Navbar'

describe('Navbar Component', () => {
  it('renders all nav links', () => {
    const { getByText } = render(<Navbar showItems={true} setOpen={true} />)

    const homeLink = getByText('Home')
    const galleryLink = getByText('Gallery')
    const photographersLink = getByText('Photographers')
    const contactLink = getByText('Contact')

    expect(homeLink).toBeInTheDocument()
    expect(galleryLink).toBeInTheDocument()
    expect(photographersLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })
})

describe('NavLink Component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(
      <NavLink showItems={true} setOpen={true} href='/' text='Home' index={0} />
    )

    const linkElement = getByText('Home')
    expect(linkElement).toBeInTheDocument()
  })

  it('applies animation variants correctly', () => {
    const { container } = render(
      <NavLink showItems={true} setOpen={true} href='/' text='Home' index={0} />
    )

    const liElement = container.querySelector('li')

    expect(liElement).toHaveStyle('opacity: 0')
    expect(liElement).toHaveStyle('transform: translateY(-20px) translateZ(0)')
  })
})
