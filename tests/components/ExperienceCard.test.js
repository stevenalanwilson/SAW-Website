import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExperienceCard from '../../components/ExperienceCard'

describe('ExperienceCard Component', () => {
  const mockProps = {
    company: 'Test Company',
    url: 'https://testcompany.com',
    title: 'Senior Developer',
    description: 'Led development of major features'
  }

  it('renders the job title', () => {
    render(<ExperienceCard {...mockProps} />)
    expect(screen.getByText(/Senior Developer/)).toBeInTheDocument()
  })

  it('renders the company name as a link', () => {
    render(<ExperienceCard {...mockProps} />)
    const link = screen.getByRole('link', { name: 'Test Company' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://testcompany.com')
  })

  it('renders the description when provided', () => {
    render(<ExperienceCard {...mockProps} />)
    expect(screen.getByText('Led development of major features')).toBeInTheDocument()
  })

  it('does not render description paragraph when description is not provided', () => {
    const { container } = render(<ExperienceCard company="Test" url="https://test.com" title="Developer" />)
    expect(screen.queryByText('Led development of major features')).not.toBeInTheDocument()
  })

  it('applies bold styling when highlighted is true', () => {
    const { container } = render(<ExperienceCard {...mockProps} highlighted={true} />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveClass('font-bold')
  })

  it('does not apply bold styling when highlighted is false', () => {
    const { container } = render(<ExperienceCard {...mockProps} highlighted={false} />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).not.toHaveClass('font-bold')
  })

  it('applies custom className', () => {
    const { container } = render(<ExperienceCard {...mockProps} className="custom-class" />)
    const div = container.querySelector('div')
    expect(div).toHaveClass('custom-class')
  })

  it('renders company link with correct styling', () => {
    render(<ExperienceCard {...mockProps} />)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('font-bold', 'underline', 'decoration-3', 'underline-offset-8', 'hover:no-underline')
  })

  it('renders heading as h3', () => {
    render(<ExperienceCard {...mockProps} />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
  })

  it('renders description with correct styling', () => {
    const { container } = render(<ExperienceCard {...mockProps} />)
    const description = screen.getByText('Led development of major features')
    expect(description).toHaveClass('text-xl', 'leading-relaxed')
  })
})
