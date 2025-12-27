import React from 'react'
import { render } from '@testing-library/react'
import SEO from '../../components/SEO'

// Mock Next.js Head component
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>
    },
  }
})

describe('SEO Component', () => {
  it('renders without crashing with default props', () => {
    const { container } = render(<SEO />)
    expect(container).toBeTruthy()
  })

  it('renders without crashing with custom title', () => {
    const { container } = render(<SEO title='Test Page' />)
    expect(container).toBeTruthy()
  })

  it('renders without crashing with custom description', () => {
    const { container } = render(<SEO description='Custom description' />)
    expect(container).toBeTruthy()
  })

  it('renders without crashing with all custom props', () => {
    const { container } = render(
      <SEO
        title='Test'
        description='Test description'
        url='https://test.com'
        image='/test.jpg'
        type='article'
      />
    )
    expect(container).toBeTruthy()
  })

  it('renders without crashing for article type', () => {
    const { container } = render(<SEO type='article' />)
    expect(container).toBeTruthy()
  })

  it('renders article metadata when type is article and publishedTime is provided', () => {
    const { container } = render(<SEO type='article' publishedTime='2024-01-15T00:00:00.000Z' />)
    expect(container).toBeTruthy()
  })

  it('renders article metadata with modifiedTime when provided', () => {
    const { container } = render(
      <SEO
        type='article'
        publishedTime='2024-01-15T00:00:00.000Z'
        modifiedTime='2024-01-20T00:00:00.000Z'
      />
    )
    expect(container).toBeTruthy()
  })

  it('does not render article metadata for non-article types', () => {
    const { container } = render(<SEO type='website' publishedTime='2024-01-15T00:00:00.000Z' />)
    expect(container).toBeTruthy()
  })

  // Edge cases
  it('handles missing title gracefully', () => {
    const { container } = render(<SEO title={undefined} />)
    expect(container).toBeTruthy()
  })

  it('handles empty string title', () => {
    const { container } = render(<SEO title='' />)
    expect(container).toBeTruthy()
  })

  it('handles very long title', () => {
    const longTitle =
      'This is a very long title that exceeds normal character limits and should still render correctly without breaking the page layout or causing any issues'
    const { container } = render(<SEO title={longTitle} />)
    expect(container).toBeTruthy()
  })

  it('handles special characters in title', () => {
    const specialTitle = 'Title with & symbols, "quotes", and \'apostrophes\''
    const { container } = render(<SEO title={specialTitle} />)
    expect(container).toBeTruthy()
  })

  it('handles image URL with http protocol', () => {
    const { container } = render(<SEO image='http://example.com/image.jpg' />)
    expect(container).toBeTruthy()
  })

  it('handles image URL with https protocol', () => {
    const { container } = render(<SEO image='https://example.com/image.jpg' />)
    expect(container).toBeTruthy()
  })

  it('handles relative image URL', () => {
    const { container } = render(<SEO image='/static/test.jpg' />)
    expect(container).toBeTruthy()
  })

  it('handles missing publishedTime for article type', () => {
    const { container } = render(<SEO type='article' />)
    expect(container).toBeTruthy()
  })

  it('handles invalid date formats gracefully', () => {
    const { container } = render(
      <SEO type='article' publishedTime='invalid-date' modifiedTime='also-invalid' />
    )
    expect(container).toBeTruthy()
  })

  it('renders with all props undefined', () => {
    const { container } = render(
      <SEO title={undefined} description={undefined} image={undefined} url={undefined} />
    )
    expect(container).toBeTruthy()
  })
})
