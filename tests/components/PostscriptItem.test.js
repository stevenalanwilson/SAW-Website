import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostscriptItem from '../../components/PostscriptItem'

describe('PostscriptItem Component', () => {
  const mockProps = {
    title: 'Test Title',
    image: 'https://example.com/image.jpg',
    caption: 'Test Caption',
    description: 'Test description for the postscript item',
  }

  it('renders without crashing', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<PostscriptItem {...mockProps} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title')
  })

  it('renders the description', () => {
    render(<PostscriptItem {...mockProps} />)
    expect(screen.getByText('Test description for the postscript item')).toBeInTheDocument()
  })

  it('renders the image with correct src', () => {
    render(<PostscriptItem {...mockProps} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', expect.stringContaining('https://example.com/image.jpg'))
  })

  it('renders figcaption with title', () => {
    render(<PostscriptItem {...mockProps} />)
    const figcaption = screen.getByText('Test Title', { selector: 'figcaption' })
    expect(figcaption).toBeInTheDocument()
  })

  it('applies correct styling to title', () => {
    render(<PostscriptItem {...mockProps} />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass(
      'heading-3',
      'text-2xl',
      'lg:text-4xl',
      'border-b-2',
      'text-white',
      'pb-2',
      'mb-6'
    )
  })

  it('renders figure element', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const figure = container.querySelector('figure')
    expect(figure).toBeInTheDocument()
    expect(figure).toHaveClass('border-b', 'text-white', 'pb-2', 'mb-4')
  })

  it('renders picture element with source tags', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const sources = container.querySelectorAll('source')
    expect(sources.length).toBe(2)
  })

  it('first source has correct media query for desktop', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const sources = container.querySelectorAll('source')
    expect(sources[0]).toHaveAttribute('media', '(min-width: 800px)')
    expect(sources[0]).toHaveAttribute('srcset', expect.stringContaining('w=800&h=600'))
  })

  it('second source has correct media query for tablet', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const sources = container.querySelectorAll('source')
    expect(sources[1]).toHaveAttribute('media', '(min-width: 400px)')
    expect(sources[1]).toHaveAttribute('srcset', expect.stringContaining('w=400&h=300'))
  })

  it('applies correct styling to description', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const description = container.querySelector('p')
    expect(description).toHaveClass('text-white', 'leading-tight')
  })

  it('figcaption has correct styling', () => {
    render(<PostscriptItem {...mockProps} />)
    const figcaption = screen.getByText('Test Title', { selector: 'figcaption' })
    expect(figcaption).toHaveClass('italic', 'text-xs', 'text-gray-200', 'mb-2')
  })

  it('root div has correct classes', () => {
    const { container } = render(<PostscriptItem {...mockProps} />)
    const rootDiv = container.firstChild
    expect(rootDiv).toHaveClass('w-full', 'md:w-1/4', 'p-2', 'my-6', 'postscript-item')
  })
})
