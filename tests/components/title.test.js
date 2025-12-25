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
})
