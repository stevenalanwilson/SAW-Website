import Link from 'next/link'
import PropTypes from 'prop-types'

export default function ExperienceCard({
  company,
  url,
  title,
  description,
  highlighted = false,
  className = ''
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
      {description && (
        <p className='text-xl leading-relaxed'>{description}</p>
      )}
    </div>
  )
}

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  highlighted: PropTypes.bool,
  className: PropTypes.string
}
