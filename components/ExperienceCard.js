import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * Experience card component displaying professional experience information.
 * Shows job title, company name with link, and optional description.
 *
 * @param {Object} props - Component props
 * @param {string} props.company - Company name
 * @param {string} props.url - Company website URL
 * @param {string} props.title - Job title
 * @param {string} [props.description] - Job description or responsibilities
 * @param {boolean} [props.highlighted=false] - Whether to highlight this experience
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered experience card component
 */
export default function ExperienceCard({
  company,
  url,
  title,
  description,
  highlighted = false,
  className = '',
}) {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className={`text-2xl lg:text-3xl mb-2 ${highlighted ? 'font-bold' : ''}`}>
        {title} at{' '}
        <Link
          href={url}
          className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'
        >
          {company}
        </Link>
      </h3>
      {description && <p className='text-xl leading-relaxed'>{description}</p>}
    </div>
  )
}

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  highlighted: PropTypes.bool,
  className: PropTypes.string,
}
