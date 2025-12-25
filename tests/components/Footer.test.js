import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../components/Footer'

describe('Footer Component', () => {
  it('renders sitemap section', () => {
    render(<Footer />)
    expect(screen.getByText('Sitemap')).toBeInTheDocument()
  })

  it('renders sitemap links', () => {
    render(<Footer />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })

    expect(homeLinks.length).toBeGreaterThan(0)
    expect(aboutLinks.length).toBeGreaterThan(0)
  })

  it('renders contact info section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Follow me on Twitter/i })).toHaveAttribute('href', 'https://twitter.com/d79design')
    expect(screen.getByRole('link', { name: /Follow me on Facebook/i })).toHaveAttribute('href', 'https://www.facebook.com/stevenalanwilson79/')
  })

  it('renders about me section', () => {
    render(<Footer />)
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText(/seasoned technologist and leader/i)).toBeInTheDocument()
  })

  it('renders a random quote', () => {
    render(<Footer />)
    const quoteElement = screen.getByText(/growth|quite/i)
    expect(quoteElement).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/Steven Alan Wilson/i)).toBeInTheDocument()
  })
})
