import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkWithMe from '../../components/WorkWithMe'

// Mock the footerContactInfo config
jest.mock('../../config/footerContactInfo', () => ({
  email: {
    user: 'hello',
    domain: 'stevenalanwilson.com'
  },
  linkedin: {
    title: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/stevenalanwilson/'
  },
  locations: ['London', 'Manchester', 'Leeds', 'Derby', 'Birmingham']
}))

describe('WorkWithMe Component', () => {
  it('renders the Work With Me heading', () => {
    render(<WorkWithMe />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Work With Me')
  })

  it('renders the elevator pitch', () => {
    render(<WorkWithMe />)
    expect(screen.getByText(/Ready to transform your technical leadership/i)).toBeInTheDocument()
  })

  it('renders the Operating Areas heading', () => {
    render(<WorkWithMe />)
    expect(screen.getByText('Operating Areas')).toBeInTheDocument()
  })

  it('renders all locations', () => {
    render(<WorkWithMe />)
    const locationsText = screen.getByText(/London.*Manchester.*Leeds.*Derby.*Birmingham/i)
    expect(locationsText).toBeInTheDocument()
  })

  it('renders LinkedIn button with correct link', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toBeInTheDocument()
    expect(linkedInButton).toHaveAttribute('href', 'https://www.linkedin.com/in/stevenalanwilson/')
  })

  it('renders email link with obfuscated email', () => {
    render(<WorkWithMe />)
    const emailLink = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })

  it('LinkedIn button opens in new tab', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveAttribute('target', '_blank')
    expect(linkedInButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct styling to LinkedIn button', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveClass('bg-blue-600', 'hover:bg-blue-700')
  })

  it('applies correct styling to email button', () => {
    render(<WorkWithMe />)
    const emailButton = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailButton).toHaveClass('border', 'border-white', 'hover:bg-white', 'hover:text-gray-900')
  })

  it('constructs email from obfuscated parts', () => {
    render(<WorkWithMe />)
    const emailLink = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })
})
