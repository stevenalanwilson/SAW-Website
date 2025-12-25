import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTitle from '../../components/PageTitle'

describe('PageTitle Component', () => {
  const mockProps = {
    title: 'Test Blog Post Title',
    summary: 'This is a test summary for the blog post',
    date: '2024-01-15'
  }

  it('renders the title', () => {
    render(<PageTitle {...mockProps} />)
    expect(screen.getByText('Test Blog Post Title')).toBeInTheDocument()
  })

  it('renders the summary', () => {
    render(<PageTitle {...mockProps} />)
    expect(screen.getByText('This is a test summary for the blog post')).toBeInTheDocument()
  })

  it('renders the formatted date', () => {
    render(<PageTitle {...mockProps} />)
    expect(screen.getByText('15 January 2024')).toBeInTheDocument()
  })

  it('applies correct heading styles', () => {
    render(<PageTitle {...mockProps} />)
    const heading = screen.getByText('Test Blog Post Title')
    expect(heading).toHaveClass('heading-1', 'font-bold', 'text-6xl', 'pb-5')
  })

  it('applies correct summary styles', () => {
    render(<PageTitle {...mockProps} />)
    const summary = screen.getByText('This is a test summary for the blog post')
    expect(summary).toHaveClass('text-2xl', 'leading-relaxed')
  })

  it('renders within a section element', () => {
    const { container } = render(<PageTitle {...mockProps} />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('formats different dates correctly', () => {
    const { rerender } = render(<PageTitle {...mockProps} date="2023-12-25" />)
    expect(screen.getByText('25 December 2023')).toBeInTheDocument()

    rerender(<PageTitle {...mockProps} date="2024-07-04" />)
    expect(screen.getByText('4 July 2024')).toBeInTheDocument()
  })
})
