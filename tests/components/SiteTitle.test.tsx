import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SiteTitle from '../../components/content/SiteTitle'

describe('SiteTitle Component', () => {
  it('renders site name', () => {
    render(<SiteTitle />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Steven Alan Wilson Limited'
    )
  })

  it('renders hero greeting and introduction', () => {
    render(<SiteTitle />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Hi,')
    expect(heading.textContent).toContain('Steve, a digital and technical leader')
  })

  it('renders current role information', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/Currently a/i)).toBeInTheDocument()
    expect(screen.getByText(/Digital, Technical, and AI Leader/i)).toBeInTheDocument()
  })

  it('renders link to current company', () => {
    render(<SiteTitle />)
    const companyLink = screen.getByRole('link', { name: /Equal Experts/i })
    expect(companyLink).toHaveAttribute('href', 'https://www.equalexperts.com')
  })

  it('renders current location', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/in Manchester/i)).toBeInTheDocument()
  })

  it('renders previous roles text', () => {
    render(<SiteTitle />)
    expect(screen.getByText(/Previously held key technical leadership roles/i)).toBeInTheDocument()
  })

  it('renders all previous role company links', () => {
    render(<SiteTitle />)
    const aerLingusLink = screen.getByRole('link', { name: 'Aer Lingus' })
    const publicLink = screen.getByRole('link', { name: 'PUBLIC' })
    const hackneyLink = screen.getByRole('link', { name: 'Hackney Council' })
    const mojLink = screen.getByRole('link', { name: 'Ministry of Justice Digital' })

    expect(aerLingusLink).toHaveAttribute('href', 'https://www.aerlingus.com')
    expect(publicLink).toHaveAttribute('href', 'https://www.public.io')
    expect(hackneyLink).toHaveAttribute('href', 'https://hackney.gov.uk')
    expect(mojLink).toHaveAttribute('href', 'https://mojdigital.blog.gov.uk')
  })

  it('applies correct styling to site name', () => {
    render(<SiteTitle />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('heading-1', 'font-bold', 'text-3xl', 'lg:text-6xl')
  })

  it('has section element as root', () => {
    const { container } = render(<SiteTitle />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('company links have proper styling classes', () => {
    render(<SiteTitle />)
    const companyLink = screen.getByRole('link', { name: /Equal Experts/i })
    expect(companyLink).toHaveClass(
      'font-bold',
      'underline',
      'decoration-3',
      'underline-offset-8',
      'hover:no-underline'
    )
  })
})
