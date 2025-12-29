import React, { Component, ErrorInfo, ReactNode } from 'react'
import * as Sentry from '@sentry/nextjs'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * Global error boundary component that catches React errors and displays fallback UI.
 * Integrates with Sentry for error tracking and shows detailed error info in development.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(_error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    // Log error to Sentry
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
          <div className='max-w-2xl w-full bg-white rounded-lg shadow-lg p-8'>
            <h1 className='text-4xl font-bold text-red-600 mb-4'>Oops! Something went wrong</h1>
            <p className='text-xl text-gray-700 mb-6'>
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className='bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors'
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mt-8 p-4 bg-gray-100 rounded'>
                <summary className='cursor-pointer font-semibold text-gray-800 mb-2'>
                  Error Details (Development Only)
                </summary>
                <pre className='text-sm text-red-600 overflow-auto'>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
