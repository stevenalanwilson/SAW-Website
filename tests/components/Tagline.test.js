import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tagline from '../../components/Tagline'

describe('Tagline Component', () => {
  it('renders the default tagline text', () => {
    render(<Tagline />)
    expect(
      screen.getByText(/Helping organizations build resilient technical teams/i)
    ).toBeInTheDocument()
  })

  it('renders custom tagline text when provided', () => {
    const customText = 'Custom tagline for testing'
    render(<Tagline text={customText} />)
    expect(screen.getByText(customText)).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<Tagline />)
    const taglineDiv = container.querySelector('div')
    expect(taglineDiv).toHaveClass(
      'w-full',
      'border-white',
      'border-t-2',
      'border-b-2',
      'mx-4',
      'mt-10',
      'py-8'
    )
  })

  it('renders text in a paragraph with correct styling', () => {
    const { container } = render(<Tagline />)
    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass(
      'text-center',
      'text-xl',
      'md:text-2xl',
      'text-white',
      'font-light'
    )
  })

  it('centers the text', () => {
    const { container } = render(<Tagline text='Test' />)
    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('text-center')
  })

  // Edge cases
  it('handles empty string text', () => {
    render(<Tagline text='' />)
    const { container } = render(<Tagline text='' />)
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('handles very long text', () => {
    const longText =
      'This is a very long tagline that spans multiple lines and should still render correctly with proper text wrapping and styling applied to ensure good user experience across all device sizes'
    render(<Tagline text={longText} />)
    expect(screen.getByText(longText)).toBeInTheDocument()
  })

  it('handles special characters in text', () => {
    const specialText = 'Text with & symbols, "quotes", and \'apostrophes\''
    render(<Tagline text={specialText} />)
    expect(screen.getByText(specialText)).toBeInTheDocument()
  })

  it('handles HTML-like strings (should be escaped)', () => {
    const htmlText = '<script>alert("test")</script>'
    const { container } = render(<Tagline text={htmlText} />)
    // React should escape HTML by default
    expect(container.textContent).toContain('<script>')
  })
})
