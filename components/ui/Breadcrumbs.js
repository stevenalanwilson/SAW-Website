import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * Breadcrumb navigation component for hierarchical site navigation.
 * Displays a trail of links showing the user's location in the site hierarchy.
 * Includes proper ARIA labels for accessibility.
 *
 * @param {Object} props - Component props
 * @param {Array<{name: string, url: string}>} props.items - Breadcrumb trail items
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} Breadcrumb navigation
 */
export default function Breadcrumbs({ items, className = '' }) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav
      aria-label='Breadcrumb navigation'
      className={`text-sm mb-4 pb-4 border-b-2 border-theme-text ${className}`}
      role='navigation'
    >
      <ol className='flex flex-wrap items-center space-x-2'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.url}-${index}`}
              className='flex items-center'
              aria-current={isLast ? 'page' : undefined}
            >
              {index > 0 && <span className='mr-2 text-theme-text opacity-50'>/</span>}

              {isLast ? (
                <span className='text-theme-text font-semibold'>{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className='text-theme-primary hover:underline transition-all'
                  title={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
}
