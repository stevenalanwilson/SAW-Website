import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StatsCard from '../../components/StatsCard'

describe('StatsCard Component', () => {
  const mockStats = [
    { label: 'Connections', value: '500+' },
    { label: 'Followers', value: '2K+' },
    { label: 'Years Experience', value: '20+' },
  ]

  it('renders the title', () => {
    render(<StatsCard title='Professional Network' />)
    expect(screen.getByText('Professional Network')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsCard title='Stats' stats={mockStats} />)
    expect(screen.getByText('Connections')).toBeInTheDocument()
    expect(screen.getByText('Followers')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<StatsCard title='Stats' stats={mockStats} />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('2K+')).toBeInTheDocument()
    expect(screen.getByText('20+')).toBeInTheDocument()
  })

  it('applies default styling', () => {
    const { container } = render(<StatsCard title='Stats' />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('bg-gray-50', 'p-6', 'border-l-4', 'border-gray-900')
  })

  it('applies custom className', () => {
    const { container } = render(<StatsCard title='Stats' className='custom-class' />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('custom-class')
  })

  it('renders correct number of stats', () => {
    const { container } = render(<StatsCard title='Stats' stats={mockStats} />)
    const statItems = container.querySelectorAll('.flex.justify-between')
    expect(statItems).toHaveLength(3)
  })

  it('handles empty stats array', () => {
    const { container } = render(<StatsCard title='Stats' stats={[]} />)
    const statItems = container.querySelectorAll('.flex.justify-between')
    expect(statItems).toHaveLength(0)
  })

  it('renders title as h2', () => {
    render(<StatsCard title='Professional Network' />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Professional Network')
  })

  it('renders stat values with bold styling', () => {
    render(<StatsCard title='Stats' stats={mockStats} />)
    const value = screen.getByText('500+')
    expect(value).toHaveClass('text-2xl', 'font-bold')
  })

  it('renders stat labels with correct styling', () => {
    render(<StatsCard title='Stats' stats={mockStats} />)
    const label = screen.getByText('Connections')
    expect(label).toHaveClass('text-lg')
  })
})
