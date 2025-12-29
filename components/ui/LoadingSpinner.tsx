import type { LoadingSpinnerProps } from '../../types/components'

/**
 * Loading spinner component displaying a centered animated spinner with message.
 * Covers the entire viewport with a semi-transparent overlay.
 */
export default function LoadingSpinner({
  message = 'Loading...',
  className = '',
}: LoadingSpinnerProps) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-theme-bg z-50 ${className}`}>
      <div className='text-center'>
        <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-theme-primary mb-4' />
        <p className='text-xl text-theme-text'>{message}</p>
      </div>
    </div>
  )
}
