import React from 'react'
import renderer from 'react-test-renderer'
import SectionErrorBoundary from '../../components/error/SectionErrorBoundary'

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

describe('SectionErrorBoundary', () => {
  // Suppress console errors for these tests
  const originalError = console.error
  beforeAll(() => {
    console.error = jest.fn()
  })
  afterAll(() => {
    console.error = originalError
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
})
