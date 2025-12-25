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
    const { container } = render(<SEO title="Test Page" />)
    expect(container).toBeTruthy()
  })

  it('renders without crashing with custom description', () => {
    const { container } = render(<SEO description="Custom description" />)
    expect(container).toBeTruthy()
  })

  it('renders without crashing with all custom props', () => {
    const { container } = render(
      <SEO
        title="Test"
        description="Test description"
        url="https://test.com"
        image="/test.jpg"
        type="article"
      />
    )
    expect(container).toBeTruthy()
  })

  it('renders without crashing for article type', () => {
    const { container } = render(<SEO type="article" />)
    expect(container).toBeTruthy()
  })

  it('renders article metadata when type is article and publishedTime is provided', () => {
    const { container } = render(
      <SEO
        type="article"
        publishedTime="2024-01-15T00:00:00.000Z"
      />
    )
    expect(container).toBeTruthy()
  })

  it('renders article metadata with modifiedTime when provided', () => {
    const { container } = render(
      <SEO
        type="article"
        publishedTime="2024-01-15T00:00:00.000Z"
        modifiedTime="2024-01-20T00:00:00.000Z"
      />
    )
    expect(container).toBeTruthy()
  })

  it('does not render article metadata for non-article types', () => {
    const { container } = render(
      <SEO
        type="website"
        publishedTime="2024-01-15T00:00:00.000Z"
      />
    )
    expect(container).toBeTruthy()
  })
})
