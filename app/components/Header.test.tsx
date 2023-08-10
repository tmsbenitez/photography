import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
  return 0
}

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />)
  })

  it('toggles menu when the button is clicked', () => {
    const { getByLabelText } = render(<Header />)
    const toggleButton = getByLabelText('toggle-menu-button')

    fireEvent.click(toggleButton)

    expect(toggleButton).toBeInTheDocument()
  })

  it('displays contact button when menu is closed', () => {
    const { getByText } = render(<Header />)
    const contactButton = getByText('Contact')

    expect(contactButton).toBeInTheDocument()
  })

  it('contact button is not displayed when menu is open', async () => {
    render(<Header />)

    const contactButton = screen.queryByText('Contact')
    expect(contactButton).toBeInTheDocument()

    const toggleMenuButton = screen.getByLabelText('toggle-menu-button')
    userEvent.click(toggleMenuButton)

    await waitFor(() => {
      expect(contactButton).not.toBeInTheDocument()
    })
  })
})
