import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import footerContactInfo from '../config/footerContactInfo'

function WorkWithMe() {
  // Construct email address from obfuscated parts (helps prevent spam bot scraping)
  const emailAddress = footerContactInfo.email
    ? `${footerContactInfo.email.user}@${footerContactInfo.email.domain}`
    : null

  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Work With Me</h2>
      <div className='text-white'>
        <p className='mb-4 leading-relaxed'>
          Ready to transform your technical leadership and build high-performing teams?
        </p>

        {/* Locations */}
        <div className='mb-4'>
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

export default WorkWithMe
