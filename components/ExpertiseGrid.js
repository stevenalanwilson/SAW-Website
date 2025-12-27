import PropTypes from 'prop-types'

/**
 * @typedef {Object} ExpertiseItem
 * @property {string} [title] - Expertise area title
 * @property {string} [description] - Expertise area description
 */

/**
 * Expertise grid component displaying areas of expertise in a responsive grid layout.
 * Handles null/undefined items gracefully.
 *
 * @param {Object} props - Component props
 * @param {ExpertiseItem[]} [props.items=[]] - Array of expertise items to display
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered expertise grid
 */
export default function ExpertiseGrid({ items = [], className = '' }) {
  // Handle null/undefined items gracefully
  if (!items || !Array.isArray(items)) {
    return <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`} />
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {items.map((item, index) => {
        // Skip items without valid data
        if (!item) return null

        return (
          <div
            key={index}
            className='bg-theme-bg p-4 border-l-2 border-theme-primary text-theme-text'
          >
            <h3 className='font-bold text-lg mb-2'>{item.title || ''}</h3>
            <p className='text-base'>{item.description || ''}</p>
          </div>
        )
      })}
    </div>
  )
}

ExpertiseGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  className: PropTypes.string,
}
