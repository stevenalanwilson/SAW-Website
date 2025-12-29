import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from '../../components/layout/Sidebar'

describe('Sidebar Component', () => {
  it('renders the ContactCard component', () => {
    render(<Sidebar />)
    expect(screen.getByText('Work With Me')).toBeInTheDocument()
  })

  it('renders the StatsCard component', () => {
    render(<Sidebar />)
    expect(screen.getByText('Professional Network')).toBeInTheDocument()
  })

  it('renders operating areas from config', () => {
    render(<Sidebar />)
    expect(screen.getByText(/London.*Manchester.*Leeds.*Derby.*Birmingham/i)).toBeInTheDocument()
  })

  it('renders contact links from config', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: /Connect on LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })).toBeInTheDocument()
  })

  it('renders professional stats from config', () => {
    render(<Sidebar />)
    expect(screen.getByText('LinkedIn Connections')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Followers')).toBeInTheDocument()
    expect(screen.getByText('2K+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('20+')).toBeInTheDocument()
  })

  it('renders as an aside element', () => {
    const { container } = render(<Sidebar />)
    const aside = container.querySelector('aside')
    expect(aside).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Sidebar className='custom-class' />)
    const aside = container.querySelector('aside')
    expect(aside).toHaveClass('custom-class')
  })

  it('ContactCard has margin bottom class', () => {
    const { container } = render(<Sidebar />)
    // ContactCard should be the first child with bg-theme-primary
    const contactCard = container.querySelector('.bg-theme-primary')
    expect(contactCard).toHaveClass('mb-6')
  })
})
