import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tagline from '../../components/Tagline'

describe('Tagline Component', () => {
  it('renders the default tagline text', () => {
    render(<Tagline />)
    expect(screen.getByText(/Helping organizations build resilient technical teams/i)).toBeInTheDocument()
  })

  it('renders custom tagline text when provided', () => {
    const customText = 'Custom tagline for testing'
    render(<Tagline text={customText} />)
    expect(screen.getByText(customText)).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<Tagline />)
    const taglineDiv = container.querySelector('div')
    expect(taglineDiv).toHaveClass('w-full', 'border-white', 'border-t-2', 'border-b-2', 'mx-4', 'mt-10', 'py-8')
  })

  it('renders text in a paragraph with correct styling', () => {
    const { container } = render(<Tagline />)
    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('text-center', 'text-xl', 'md:text-2xl', 'text-white', 'font-light')
  })

  it('centers the text', () => {
    const { container } = render(<Tagline text="Test" />)
    const paragraph = container.querySelector('p')
    expect(paragraph).toHaveClass('text-center')
  })
})
