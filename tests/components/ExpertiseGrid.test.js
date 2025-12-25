import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExpertiseGrid from '../../components/ExpertiseGrid'

describe('ExpertiseGrid Component', () => {
  const mockItems = [
    { title: 'Item 1', description: 'Description 1' },
    { title: 'Item 2', description: 'Description 2' },
    { title: 'Item 3', description: 'Description 3' }
  ]

  it('renders all items', () => {
    render(<ExpertiseGrid items={mockItems} />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('renders all descriptions', () => {
    render(<ExpertiseGrid items={mockItems} />)
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
    expect(screen.getByText('Description 3')).toBeInTheDocument()
  })

  it('renders with grid layout classes', () => {
    const { container } = render(<ExpertiseGrid items={mockItems} />)
    const grid = container.querySelector('div')
    expect(grid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')
  })

  it('applies custom className', () => {
    const { container } = render(<ExpertiseGrid items={mockItems} className="custom-class" />)
    const grid = container.querySelector('div')
    expect(grid).toHaveClass('custom-class')
  })

  it('renders correct number of items', () => {
    const { container } = render(<ExpertiseGrid items={mockItems} />)
    const items = container.querySelectorAll('.bg-gray-50')
    expect(items).toHaveLength(3)
  })

  it('renders with correct item styling', () => {
    const { container } = render(<ExpertiseGrid items={mockItems} />)
    const firstItem = container.querySelector('.bg-gray-50')
    expect(firstItem).toHaveClass('p-4', 'border-l-2', 'border-gray-900')
  })

  it('handles empty items array', () => {
    const { container } = render(<ExpertiseGrid items={[]} />)
    const items = container.querySelectorAll('.bg-gray-50')
    expect(items).toHaveLength(0)
  })

  it('renders titles with correct styling', () => {
    const { container } = render(<ExpertiseGrid items={mockItems} />)
    const firstTitle = screen.getByText('Item 1')
    expect(firstTitle).toHaveClass('font-bold', 'text-lg', 'mb-2')
    expect(firstTitle.tagName).toBe('H3')
  })
})
