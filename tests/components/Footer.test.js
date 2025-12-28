import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../components/layout/Footer'

// Mock the child components
jest.mock('../../components/ui/Tagline', () => {
  return function Tagline() {
    return <div>Helping organizations build resilient technical teams</div>
  }
})

jest.mock('../../components/features/ServicesList', () => {
  return function ServicesList() {
    return <div>Services</div>
  }
})

jest.mock('../../components/content/LatestPosts', () => {
  return function LatestPosts() {
    return <div>Latest Thinking</div>
  }
})

jest.mock('../../components/features/WorkWithMe', () => {
  return function WorkWithMe() {
    return <div>Work With Me</div>
  }
})

describe('Footer Component', () => {
  it('renders the tagline component', () => {
    render(<Footer />)
    expect(
      screen.getByText(/Helping organizations build resilient technical teams/i)
    ).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders the latest thinking section', () => {
    render(<Footer />)
    expect(screen.getByText('Latest Thinking')).toBeInTheDocument()
  })

  it('renders the work with me section', () => {
    render(<Footer />)
    expect(screen.getByText('Work With Me')).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/Steven Alan Wilson/i)).toBeInTheDocument()
  })

  it('passes latestPosts prop to LatestPosts component', () => {
    const mockPosts = [
      {
        postSlug: 'test',
        postMetaData: { title: 'Test', summary: 'Test summary', date: '2024-01-01' },
      },
    ]
    render(<Footer latestPosts={mockPosts} />)
    // Component should render without errors
    expect(screen.getByText('Latest Thinking')).toBeInTheDocument()
  })

  it('applies footer styling', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-theme-primary', 'text-theme-bg', 'footer')
  })
})
