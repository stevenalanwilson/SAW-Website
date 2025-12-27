import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListPosts from '../../components/ListPosts'

const mockPosts = [
  {
    postSlug: 'test-post-1',
    postMetaData: {
      title: 'Test Post 1',
      summary: 'This is test post 1 summary',
      date: '2024-01-15',
      thumbnail: '/images/test1.jpg',
    },
  },
  {
    postSlug: 'test-post-2',
    postMetaData: {
      title: 'Test Post 2',
      summary: 'This is test post 2 summary',
      date: '2024-02-20',
      thumbnail: '/images/test2.jpg',
    },
  },
]

describe('ListPosts Component', () => {
  it('renders all posts', () => {
    render(<ListPosts posts={mockPosts} />)
    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('Test Post 2')).toBeInTheDocument()
  })

  it('renders post summaries', () => {
    render(<ListPosts posts={mockPosts} />)
    expect(screen.getByText(/This is test post 1 summary/i)).toBeInTheDocument()
    expect(screen.getByText(/This is test post 2 summary/i)).toBeInTheDocument()
  })

  it('renders formatted dates', () => {
    render(<ListPosts posts={mockPosts} />)
    expect(screen.getByText('15 January 2024')).toBeInTheDocument()
    expect(screen.getByText('20 February 2024')).toBeInTheDocument()
  })

  it('renders links to individual posts', () => {
    render(<ListPosts posts={mockPosts} />)
    const links = screen.getAllByRole('link')

    // Each post should have multiple links (title and read more)
    const post1Links = links.filter((link) => link.getAttribute('href') === '/post/test-post-1')
    const post2Links = links.filter((link) => link.getAttribute('href') === '/post/test-post-2')

    expect(post1Links.length).toBeGreaterThan(0)
    expect(post2Links.length).toBeGreaterThan(0)
  })

  it('renders post images', () => {
    render(<ListPosts posts={mockPosts} />)
    const images = screen.getAllByRole('img')

    expect(images.length).toBe(2)
    expect(images[0]).toHaveAttribute('alt', 'Test Post 1')
    expect(images[1]).toHaveAttribute('alt', 'Test Post 2')
  })

  it('renders read more links', () => {
    render(<ListPosts posts={mockPosts} />)
    const readMoreLinks = screen.getAllByText(/read more/i)

    expect(readMoreLinks.length).toBe(2)
  })

  it('handles empty posts array', () => {
    const { container } = render(<ListPosts posts={[]} />)
    const grid = container.querySelector('.grid')

    expect(grid).toBeInTheDocument()
    expect(grid?.children.length).toBe(0)
  })
})
