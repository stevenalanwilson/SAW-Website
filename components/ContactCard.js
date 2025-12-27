import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'
import footerContactInfo from '../config/footerContactInfo'
import siteConfig from '../config/siteConfig'

export default function ContactCard({ variant = 'card', className = '' }) {
  // Construct email address from obfuscated parts (helps prevent spam bot scraping)
  const emailAddress = footerContactInfo.email
    ? `${footerContactInfo.email.user}@${footerContactInfo.email.domain}`
    : null

  const { heading, message } = siteConfig.content.cta

  // Variant-specific styling
  const containerClasses = variant === 'card'
    ? `bg-gray-900 text-white p-6 border-t-4 border-white ${className}`
    : className

  const headingClasses = variant === 'card'
    ? 'text-2xl font-bold mb-4 border-b-2 border-white pb-2'
    : 'heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'

  const contentClasses = variant === 'card'
    ? 'space-y-4'
    : ''

  const paragraphClasses = variant === 'card'
    ? 'leading-relaxed'
    : 'mb-4 leading-relaxed'

  const locationsContainerClasses = variant === 'card'
    ? ''
    : 'mb-4'

  return (
    <div className={containerClasses}>
      <h2 className={headingClasses}>{heading}</h2>
      <div className={`text-white ${contentClasses}`}>
        <p className={paragraphClasses}>
          {message}
        </p>

        {/* Locations */}
        <div className={locationsContainerClasses}>
          <p className='text-sm font-semibold text-gray-300 mb-2'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' aria-label='Locations' />
            Operating Areas
          </p>
          <p className='text-sm text-gray-400'>
            {footerContactInfo.locations.join(' • ')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className='space-y-3'>
          <a
            href={footerContactInfo.linkedin.link}
            target='_blank'
            rel='noopener noreferrer'
            className='block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 text-center transition-colors'
          >
            <FontAwesomeIcon icon={faLinkedin} className='mr-2' aria-label='LinkedIn' />
            {footerContactInfo.linkedin.title}
          </a>

          {emailAddress && (
            <a
              href={`mailto:${emailAddress}`}
              className='block border border-white hover:bg-white hover:text-gray-900 text-white py-3 px-4 text-center transition-colors'
            >
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' aria-label='Email' />
              {emailAddress}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  variant: PropTypes.oneOf(['card', 'inline']),
  className: PropTypes.string
}
