import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import SectionErrorBoundary from '../../components/error/SectionErrorBoundary'
import * as Sentry from '@sentry/nextjs'

// Mock Sentry
jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}))

// Component that throws an error
const ErrorComponent = () => {
  throw new Error('Test error')
}

// Component that works normally
const WorkingComponent = () => <div>Working content</div>

// Component that throws error with specific message
const ErrorComponentWithMessage = ({ message }) => {
  throw new Error(message)
}

describe('SectionErrorBoundary', () => {
  // Suppress console errors for these tests
  const originalError = console.error
  const originalEnv = process.env.NODE_ENV

  beforeAll(() => {
    console.error = jest.fn()
  })

  afterAll(() => {
    console.error = originalError
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    process.env.NODE_ENV = originalEnv
  })

  it('renders children when there is no error', () => {
    const component = renderer.create(
      <SectionErrorBoundary name='TestSection'>
        <WorkingComponent />
      </SectionErrorBoundary>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders error UI when child component throws', () => {
    const component = renderer.create(
      <SectionErrorBoundary name='TestSection' errorMessage='Custom error message'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom fallback UI</div>
    const component = renderer.create(
      <SectionErrorBoundary name='TestSection' fallback={customFallback}>
        <ErrorComponent />
      </SectionErrorBoundary>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders default error message when none provided', () => {
    const component = renderer.create(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls Sentry.captureException when error occurs', () => {
    render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    expect(Sentry.captureException).toHaveBeenCalledTimes(1)
    expect(Sentry.captureException).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        contexts: expect.objectContaining({
          react: expect.objectContaining({
            componentStack: expect.any(String),
          }),
          section: {
            name: 'TestSection',
          },
        }),
      })
    )
  })

  it('logs to console in development mode when error occurs', () => {
    process.env.NODE_ENV = 'development'

    render(
      <SectionErrorBoundary name='DevSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    expect(console.error).toHaveBeenCalled()
  })

  it('uses "unknown" as section name when name prop not provided', () => {
    render(
      <SectionErrorBoundary>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    expect(Sentry.captureException).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        contexts: expect.objectContaining({
          section: {
            name: 'unknown',
          },
        }),
      })
    )
  })

  it('stores error in state when componentDidCatch is called', () => {
    const { container } = render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    // In development mode, error details should be in a <details> element
    process.env.NODE_ENV = 'development'
    const devComponent = renderer.create(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    // Verify the error boundary rendered fallback UI
    expect(container.querySelector('.bg-red-50')).toBeTruthy()
  })

  it('renders error details in development mode', () => {
    process.env.NODE_ENV = 'development'

    const { container } = render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponentWithMessage message='Detailed test error' />
      </SectionErrorBoundary>
    )

    // Should contain development-only error details
    expect(container.textContent).toContain('Error Details (Development Only)')
    expect(container.textContent).toContain('Error: Detailed test error')
  })

  it('does not render error details in production mode', () => {
    process.env.NODE_ENV = 'production'

    const { container } = render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponentWithMessage message='Production test error' />
      </SectionErrorBoundary>
    )

    // Should not contain development-only error details
    expect(container.textContent).not.toContain('Error Details (Development Only)')
    expect(container.textContent).not.toContain('Production test error')
  })

  it('sets hasError state to true via getDerivedStateFromError', () => {
    const { container } = render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    // Error boundary should render fallback UI, not the children
    expect(container.querySelector('.bg-red-50')).toBeTruthy()
    expect(container.querySelector('.border-red-200')).toBeTruthy()
  })

  it('handles errors with different error messages', () => {
    const customMessage = 'Something went wrong in this section'

    const { container } = render(
      <SectionErrorBoundary name='TestSection' errorMessage={customMessage}>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    expect(container.textContent).toContain(customMessage)
  })

  it('provides user-friendly instructions in error fallback', () => {
    const { container } = render(
      <SectionErrorBoundary name='TestSection'>
        <ErrorComponent />
      </SectionErrorBoundary>
    )

    expect(container.textContent).toContain('Please try refreshing the page')
    expect(container.textContent).toContain('If the problem persists, contact support')
  })
})
