import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactCard from '../../components/ContactCard'

describe('ContactCard Component', () => {
  const mockLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter', url: 'https://twitter.com' },
    { label: 'Facebook', url: 'https://facebook.com' }
  ]

  it('renders the title', () => {
    render(<ContactCard />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders location when provided', () => {
    render(<ContactCard location="Derby, England, UK" />)
    expect(screen.getByText('Derby, England, UK')).toBeInTheDocument()
  })

  it('renders all links', () => {
    render(<ContactCard links={mockLinks} />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
  })

  it('renders links with correct URLs', () => {
    render(<ContactCard links={mockLinks} />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', 'https://twitter.com')
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', 'https://facebook.com')
  })

  it('renders links with target="_blank"', () => {
    render(<ContactCard links={mockLinks} />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders links with rel="noopener noreferrer"', () => {
    render(<ContactCard links={mockLinks} />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('applies default styling', () => {
    const { container } = render(<ContactCard />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('bg-gray-900', 'text-white', 'p-6', 'border-t-4', 'border-white')
  })

  it('applies custom className', () => {
    const { container } = render(<ContactCard className="custom-class" />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('custom-class')
  })

  it('does not render location section when location is not provided', () => {
    render(<ContactCard />)
    expect(screen.queryByText('Location')).not.toBeInTheDocument()
  })

  it('does not render connect section when links array is empty', () => {
    render(<ContactCard links={[]} />)
    expect(screen.queryByText('Connect')).not.toBeInTheDocument()
  })

  it('renders title as h2', () => {
    render(<ContactCard />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Get In Touch')
  })
})
