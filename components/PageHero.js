import PropTypes from 'prop-types'

/**
 * Page hero component displaying a large title and optional subtitle.
 * Provides consistent hero section styling across pages.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Hero title text
 * @param {React.ReactNode} [props.subtitle] - Optional subtitle content
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered page hero section
 */
export default function PageHero({ title, subtitle, className = '' }) {
  return (
    <section
      className={`border-b border-t border-theme-text lg:border-t-0 py-8 mx-4 my-6 ${className}`}
    >
      <h1 className='heading-1 font-bold text-4xl lg:text-6xl mb-4'>{title}</h1>
      {subtitle && <div className='text-2xl lg:text-3xl leading-relaxed'>{subtitle}</div>}
    </section>
  )
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
}
