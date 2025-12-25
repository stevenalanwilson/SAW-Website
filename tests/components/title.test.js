import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SiteTitle from '../../components/SiteTitle'

describe('SiteTitle Component', () => {
  it('renders the main heading', () => {
    render(<SiteTitle />)
    expect(screen.getByText('Steven Alan Wilson')).toBeInTheDocument()
  })

  it('renders the introduction text', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/I'm Steve, a technical leader/i)).toBeInTheDocument()
  })

  it('renders links to companies', () => {
    render(<SiteTitle />)
    expect(screen.getByRole('link', { name: /Aer Lingus/i })).toHaveAttribute('href', 'https://www.aerlingus.com')
    expect(screen.getByRole('link', { name: /PUBLIC/i })).toHaveAttribute('href', 'https://www.public.io')
    expect(screen.getByRole('link', { name: /Hackney Council/i })).toHaveAttribute('href', 'https://hackney.gov.uk')
    expect(screen.getByRole('link', { name: /Ministry of Justice Digital/i })).toHaveAttribute('href', 'https://mojdigital.blog.gov.uk')
  })

  it('renders the h2 heading with correct text', () => {
    render(<SiteTitle />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/I'm Steve, a technical leader/)
  })

  it('renders the section element', () => {
    const { container } = render(<SiteTitle />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders the current role description', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/Currently a member of the/i)).toBeInTheDocument()
    expect(screen.getByText(/technical leadership team at/i)).toBeInTheDocument()
  })

  it('renders the previous roles description', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/Previously held key technical leadership roles at/i)).toBeInTheDocument()
  })

  it('has correct styling classes on main heading', () => {
    render(<SiteTitle />)
    const heading = screen.getByText('Steven Alan Wilson')
    expect(heading).toHaveClass('heading-1', 'font-bold', 'text-3xl', 'lg:text-6xl')
  })
})
