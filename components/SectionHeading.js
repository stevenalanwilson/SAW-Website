import PropTypes from 'prop-types'

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
