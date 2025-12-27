import PropTypes from 'prop-types'

export default function LoadingSpinner({ message = 'Loading...', className = '' }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-50 z-50 ${className}`}>
      <div className='text-center'>
        <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4'></div>
        <p className='text-xl text-gray-700'>{message}</p>
      </div>
    </div>
  )
}

LoadingSpinner.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string
}
