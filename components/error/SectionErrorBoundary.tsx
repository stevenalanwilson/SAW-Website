import { Component, ErrorInfo, ReactNode } from 'react'
import * as Sentry from '@sentry/nextjs'

interface SectionErrorBoundaryProps {
  children: ReactNode
  name?: string
  errorMessage?: string
  fallback?: ReactNode
}

interface SectionErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Lightweight error boundary for wrapping individual sections/components.
 * Falls back to a localized error message instead of crashing the entire page.
 * Integrates with Sentry for error tracking with section context.
 */
class SectionErrorBoundary extends Component<SectionErrorBoundaryProps, SectionErrorBoundaryState> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(_error: Error): Partial<SectionErrorBoundaryState> {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in ${this.props.name || 'component'}:`, error, errorInfo)
    }

    // Log error to Sentry with section context
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
        section: {
          name: this.props.name || 'unknown',
        },
      },
    })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided, otherwise use default
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className='bg-red-50 border border-red-200 rounded p-4 my-4'>
          <p className='text-red-800 font-semibold mb-2'>
            {this.props.errorMessage || 'This section failed to load'}
          </p>
          <p className='text-red-600 text-sm'>
            Please try refreshing the page. If the problem persists, contact support.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className='mt-3'>
              <summary className='cursor-pointer text-xs text-red-700'>
                Error Details (Development Only)
              </summary>
              <pre className='text-xs text-red-600 mt-2 overflow-auto'>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

export default SectionErrorBoundary
