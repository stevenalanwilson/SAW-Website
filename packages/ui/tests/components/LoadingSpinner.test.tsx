import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

describe('LoadingSpinner Component', () => {
  it('renders with default message', () => {
    render(<LoadingSpinner />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders with custom message', () => {
    render(<LoadingSpinner message='Loading post...' />)
    expect(screen.getByText('Loading post...')).toBeInTheDocument()
  })

  it('applies default styling', () => {
    const { container } = render(<LoadingSpinner />)
    const wrapper = container.querySelector('.fixed')
    expect(wrapper).toHaveClass(
      'inset-0',
      'flex',
      'items-center',
      'justify-center',
      'bg-theme-bg',
      'z-50'
    )
  })

  it('applies custom className', () => {
    const { container } = render(<LoadingSpinner className='custom-class' />)
    const wrapper = container.querySelector('.fixed')
    expect(wrapper).toHaveClass('custom-class')
  })

  it('renders spinner element', () => {
    const { container } = render(<LoadingSpinner />)
    const spinner = container.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass(
      'rounded-full',
      'h-12',
      'w-12',
      'border-b-2',
      'border-theme-primary'
    )
  })

  it('renders message with correct styling', () => {
    render(<LoadingSpinner message='Test message' />)
    const message = screen.getByText('Test message')
    expect(message).toHaveClass('text-xl', 'text-theme-text')
  })

  it('centers content', () => {
    const { container } = render(<LoadingSpinner />)
    const centerDiv = container.querySelector('.text-center')
    expect(centerDiv).toBeInTheDocument()
  })
})
