import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LatestPosts from '../../components/LatestPosts'

describe('LatestPosts Component', () => {
  const mockPosts = [
    {
      postSlug: 'test-post-1',
      postMetaData: {
        title: 'First Test Post',
        summary: 'This is the first test post summary',
        date: '2024-01-15'
      }
    },
    {
      postSlug: 'test-post-2',
      postMetaData: {
        title: 'Second Test Post',
        summary: 'This is the second test post summary',
        date: '2024-01-20'
      }
    },
    {
      postSlug: 'test-post-3',
      postMetaData: {
        title: 'Third Test Post',
        summary: 'This is the third test post summary',
        date: '2024-01-25'
      }
    }
  ]

  it('renders the Latest Thinking heading', () => {
    render(<LatestPosts posts={mockPosts} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Thinking')
  })

  it('renders post titles as links', () => {
    render(<LatestPosts posts={mockPosts} />)
    expect(screen.getByRole('link', { name: 'First Test Post' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Second Test Post' })).toBeInTheDocument()
  })

  it('renders post summaries', () => {
    render(<LatestPosts posts={mockPosts} />)
    expect(screen.getByText('This is the first test post summary')).toBeInTheDocument()
    expect(screen.getByText('This is the second test post summary')).toBeInTheDocument()
  })

  it('renders post dates in correct format', () => {
    render(<LatestPosts posts={mockPosts} />)
    expect(screen.getByText('15 January 2024')).toBeInTheDocument()
    expect(screen.getByText('20 January 2024')).toBeInTheDocument()
  })

  it('links to correct post URLs', () => {
    render(<LatestPosts posts={mockPosts} />)
    expect(screen.getByRole('link', { name: 'First Test Post' })).toHaveAttribute('href', '/post/test-post-1')
    expect(screen.getByRole('link', { name: 'Second Test Post' })).toHaveAttribute('href', '/post/test-post-2')
  })

  it('respects the limit prop', () => {
    render(<LatestPosts posts={mockPosts} limit={2} />)
    expect(screen.getByText('First Test Post')).toBeInTheDocument()
    expect(screen.getByText('Second Test Post')).toBeInTheDocument()
    expect(screen.queryByText('Third Test Post')).not.toBeInTheDocument()
  })

  it('defaults to limit of 2 when not specified', () => {
    render(<LatestPosts posts={mockPosts} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
  })

  it('displays message when no posts are available', () => {
    render(<LatestPosts posts={[]} />)
    expect(screen.getByText('No posts available yet')).toBeInTheDocument()
  })

  it('handles posts without dates', () => {
    const postsWithoutDates = [
      {
        postSlug: 'no-date-post',
        postMetaData: {
          title: 'Post Without Date',
          summary: 'Summary without date'
        }
      }
    ]
    render(<LatestPosts posts={postsWithoutDates} />)
    expect(screen.getByText('Post Without Date')).toBeInTheDocument()
    expect(screen.queryByText(/January|February|March/i)).not.toBeInTheDocument()
  })

  it('applies underline hover effect to links', () => {
    const { container } = render(<LatestPosts posts={mockPosts} />)
    const links = container.querySelectorAll('a')
    links.forEach(link => {
      expect(link).toHaveClass('hover:underline')
    })
  })
})
