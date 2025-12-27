import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ServicesList from '../../components/ServicesList'

// Mock the footerServices config
jest.mock('../../config/footerServices', () => [
  {
    title: 'Technical Leadership Coaching',
    description: 'Develop effective technical leadership skills',
  },
  {
    title: 'Team Building & Culture',
    description: 'Build resilient, high-performing teams',
  },
  {
    title: 'Digital Transformation',
    description: 'Navigate organizational change successfully',
  },
  {
    title: 'Professional Development',
    description: 'Advance your career in technology',
  },
])

describe('ServicesList Component', () => {
  it('renders the Services heading', () => {
    render(<ServicesList />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services')
  })

  it('renders all service titles', () => {
    render(<ServicesList />)
    expect(screen.getByText('Technical Leadership Coaching')).toBeInTheDocument()
    expect(screen.getByText('Team Building & Culture')).toBeInTheDocument()
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument()
    expect(screen.getByText('Professional Development')).toBeInTheDocument()
  })

  it('renders all service descriptions', () => {
    render(<ServicesList />)
    expect(screen.getByText('Develop effective technical leadership skills')).toBeInTheDocument()
    expect(screen.getByText('Build resilient, high-performing teams')).toBeInTheDocument()
    expect(screen.getByText('Navigate organizational change successfully')).toBeInTheDocument()
    expect(screen.getByText('Advance your career in technology')).toBeInTheDocument()
  })

  it('renders services in a list', () => {
    const { container } = render(<ServicesList />)
    const list = container.querySelector('ul')
    expect(list).toBeInTheDocument()
    expect(list).toHaveClass('menu')
  })

  it('renders correct number of service items', () => {
    const { container } = render(<ServicesList />)
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(4)
  })

  it('applies correct styling to service titles', () => {
    const { container } = render(<ServicesList />)
    const titles = container.querySelectorAll('h3')
    titles.forEach((title) => {
      expect(title).toHaveClass('text-white', 'font-semibold', 'mb-1')
    })
  })

  it('applies correct styling to service descriptions', () => {
    const { container } = render(<ServicesList />)
    const descriptions = container.querySelectorAll('p')
    descriptions.forEach((description) => {
      expect(description).toHaveClass('text-gray-400', 'text-sm')
    })
  })
})
