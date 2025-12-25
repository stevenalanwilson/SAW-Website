import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from '../../components/Sidebar'

describe('Sidebar Component', () => {
  it('renders the ContactCard component', () => {
    render(<Sidebar />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the StatsCard component', () => {
    render(<Sidebar />)
    expect(screen.getByText('Professional Network')).toBeInTheDocument()
  })

  it('renders contact location from config', () => {
    render(<Sidebar />)
    expect(screen.getByText('Derby, England, UK')).toBeInTheDocument()
  })

  it('renders contact links from config', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
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
    const { container } = render(<Sidebar className="custom-class" />)
    const aside = container.querySelector('aside')
    expect(aside).toHaveClass('custom-class')
  })

  it('ContactCard has margin bottom class', () => {
    const { container } = render(<Sidebar />)
    // ContactCard should be the first child with bg-gray-900
    const contactCard = container.querySelector('.bg-gray-900')
    expect(contactCard).toHaveClass('mb-6')
  })
})
