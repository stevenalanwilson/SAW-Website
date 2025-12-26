import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import footerContactInfo from '../config/footerContactInfo'

export default function ContactCard({ className = '' }) {
  // Construct email address from obfuscated parts (helps prevent spam bot scraping)
  const emailAddress = footerContactInfo.email
    ? `${footerContactInfo.email.user}@${footerContactInfo.email.domain}`
    : null

  return (
    <div className={`bg-gray-900 text-white p-6 border-t-4 border-white ${className}`}>
      <h2 className='text-2xl font-bold mb-4 border-b-2 border-white pb-2'>Work With Me</h2>
      <div className='space-y-4'>
        <p className='leading-relaxed'>
          Ready to transform your technical leadership and build high-performing teams?
        </p>

        {/* Locations */}
        <div>
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
