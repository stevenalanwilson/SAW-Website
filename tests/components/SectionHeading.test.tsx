import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SectionHeading from '../../components/content/SectionHeading'

describe('SectionHeading Component', () => {
  it('renders the heading text', () => {
    render(<SectionHeading>Test Heading</SectionHeading>)
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders as h2 element', () => {
    render(<SectionHeading>Test Heading</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Heading')
  })

  it('applies default styling classes', () => {
    render(<SectionHeading>Test Heading</SectionHeading>)
    const heading = screen.getByText('Test Heading')
    expect(heading).toHaveClass(
      'text-3xl',
      'font-bold',
      'mb-6',
      'border-b-2',
      'border-black',
      'pb-2'
    )
  })

  it('applies custom className', () => {
    render(<SectionHeading className='custom-class'>Test Heading</SectionHeading>)
    const heading = screen.getByText('Test Heading')
    expect(heading).toHaveClass('custom-class')
  })

  it('preserves default classes when custom className is added', () => {
    render(<SectionHeading className='custom-class'>Test Heading</SectionHeading>)
    const heading = screen.getByText('Test Heading')
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'custom-class')
  })

  it('renders JSX children', () => {
    render(
      <SectionHeading>
        Test <strong>Heading</strong> with <em>formatting</em>
      </SectionHeading>
    )
    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('formatting')).toBeInTheDocument()
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.getByText(/with/)).toBeInTheDocument()
  })
})
