import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faLinkedin } from '../../config/icons'
import PropTypes from 'prop-types'
import footerContactInfo from '../../config/footerContactInfo'
import siteConfig from '../../config/siteConfig'

/**
 * Contact card component displaying contact information with different visual variants.
 * Shows operating areas, LinkedIn profile, and email contact methods.
 *
 * @param {Object} props - Component props
 * @param {'card' | 'inline'} [props.variant='card'] - Visual variant of the contact card
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered contact card component
 */
export default function ContactCard({ variant = 'card', className = '' }) {
  // Construct email address from obfuscated parts (helps prevent spam bot scraping)
  const emailAddress = footerContactInfo.email
    ? `${footerContactInfo.email.user}@${footerContactInfo.email.domain}`
    : null

  const { heading, message } = siteConfig.content.cta

  // Variant-specific styling
  const containerClasses =
    variant === 'card'
      ? `bg-theme-primary text-theme-bg p-6 border-t-4 border-theme-bg ${className}`
      : className

  const headingClasses =
    variant === 'card'
      ? 'text-2xl font-bold mb-4 border-b-2 border-theme-bg pb-2'
      : 'heading-3 text-2xl lg:text-3xl border-b-2 border-theme-bg text-theme-bg pb-4 mb-4'

  const contentClasses = variant === 'card' ? 'space-y-4' : 'text-theme-bg'

  const paragraphClasses = variant === 'card' ? 'leading-relaxed' : 'mb-4 leading-relaxed'

  const locationsContainerClasses = variant === 'card' ? '' : 'mb-4'

  return (
    <div className={containerClasses}>
      <h2 className={headingClasses}>{heading}</h2>
      <div className={contentClasses}>
        <p className={paragraphClasses}>{message}</p>

        {/* Locations */}
        <div className={locationsContainerClasses}>
          <p className='text-sm font-semibold mb-2 text-theme-accent'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' aria-hidden='true' />
            Operating Areas
          </p>
          <p className='text-sm text-theme-accent'>{footerContactInfo.locations.join(' • ')}</p>
        </div>

        {/* Contact Methods */}
        <div className='space-y-3'>
          <a
            href={footerContactInfo.linkedin.link}
            target='_blank'
            rel='noopener noreferrer'
            className='block bg-brand-linkedin hover:bg-brand-linkedin-hover text-white font-semibold py-3 px-4 text-center transition-colors'
            aria-label={`${footerContactInfo.linkedin.title} (opens in new tab)`}
          >
            <FontAwesomeIcon icon={faLinkedin} className='mr-2' aria-hidden='true' />
            {footerContactInfo.linkedin.title}
          </a>

          {emailAddress && (
            <a
              href={`mailto:${emailAddress}`}
              className='block border border-theme-bg text-theme-bg hover:bg-theme-bg hover:text-theme-primary py-3 px-4 text-center transition-colors overflow-hidden'
              aria-label={`Send email to ${emailAddress}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' aria-hidden='true' />
              Send me an Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  variant: PropTypes.oneOf(['card', 'inline']),
  className: PropTypes.string,
}
