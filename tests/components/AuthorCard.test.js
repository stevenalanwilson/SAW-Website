import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthorCard from '../../components/AuthorCard'

describe('AuthorCard Component', () => {
  it('renders the component', () => {
    render(<AuthorCard />)
    expect(screen.getByText('About the Author')).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<AuthorCard />)
    expect(screen.getByText('Steven Alan Wilson')).toBeInTheDocument()
  })

  it('renders introduction text', () => {
    render(<AuthorCard />)
    expect(screen.getByText(/Digital, Technical, and AI Leader/)).toBeInTheDocument()
    expect(screen.getByText(/over 20 years of experience/)).toBeInTheDocument()
  })

  it('renders welcome message', () => {
    render(<AuthorCard />)
    expect(screen.getByText(/Welcome to my corner of the internet/)).toBeInTheDocument()
  })

  it('applies default styling', () => {
    const { container } = render(<AuthorCard />)
    const card = container.firstChild
    expect(card).toHaveClass('bg-white', 'border-2', 'border-gray-900', 'p-6', 'mb-6')
  })

  it('applies custom className', () => {
    const { container } = render(<AuthorCard className="custom-class" />)
    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('renders heading with correct level', () => {
    render(<AuthorCard />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('About the Author')
  })
})
