import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageHero from '../../components/PageHero'

describe('PageHero Component', () => {
  it('renders the title', () => {
    render(<PageHero title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the subtitle when provided', () => {
    render(<PageHero title="Test Title" subtitle="Test Subtitle" />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('does not render subtitle div when subtitle is not provided', () => {
    const { container } = render(<PageHero title="Test Title" />)
    const section = container.querySelector('section')
    const divs = section.querySelectorAll('div')
    expect(divs).toHaveLength(0)
  })

  it('applies default className', () => {
    const { container } = render(<PageHero title="Test Title" />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('border-black', 'border-b', 'border-t', 'lg:border-t-0', 'py-8', 'mx-4', 'my-6')
  })

  it('applies custom className', () => {
    const { container } = render(<PageHero title="Test Title" className="custom-class" />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('custom-class')
  })

  it('renders title with correct heading level', () => {
    render(<PageHero title="Test Title" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Title')
  })

  it('renders subtitle with correct styling', () => {
    const { container } = render(<PageHero title="Test Title" subtitle="Test Subtitle" />)
    const subtitleDiv = container.querySelector('section > div')
    expect(subtitleDiv).toHaveClass('text-2xl', 'lg:text-3xl', 'leading-relaxed')
  })

  it('renders subtitle with JSX content', () => {
    render(
      <PageHero
        title="Test Title"
        subtitle={<>This is <strong>bold</strong> text</>}
      />
    )
    expect(screen.getByText('bold')).toBeInTheDocument()
    expect(screen.getByText('bold').tagName).toBe('STRONG')
    expect(screen.getByText(/This is/)).toBeInTheDocument()
    expect(screen.getByText(/text/)).toBeInTheDocument()
  })
})
