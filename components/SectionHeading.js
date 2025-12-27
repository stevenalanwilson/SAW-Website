import PropTypes from 'prop-types'

/**
 * Section heading component with consistent styling for section titles.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Heading content
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered heading component
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b-2 border-black pb-2 ${className}`}>
      {children}
    </h2>
  )
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
