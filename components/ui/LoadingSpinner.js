import PropTypes from 'prop-types'

/**
 * Loading spinner component displaying a centered animated spinner with message.
 * Covers the entire viewport with a semi-transparent overlay.
 *
 * @param {Object} props - Component props
 * @param {string} [props.message='Loading...'] - Loading message to display
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered loading spinner overlay
 */
export default function LoadingSpinner({ message = 'Loading...', className = '' }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-theme-bg z-50 ${className}`}>
      <div className='text-center'>
        <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-theme-primary mb-4' />
        <p className='text-xl text-theme-text'>{message}</p>
      </div>
    </div>
  )
}

LoadingSpinner.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
}
