import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import footerContactInfo from '../config/footerContactInfo'
import footerCopyrightInfo from '../config/footerCopyrightInfo'
import footerServices from '../config/footerServices'
import markdownService from '../services/getMarkdownService'

function Footer({ latestPosts = [] }) {
  // Construct email address from obfuscated parts (helps prevent spam bot scraping)
  const emailAddress = footerContactInfo.email
    ? `${footerContactInfo.email.user}@${footerContactInfo.email.domain}`
    : null

  return (
    <footer className='bg-gray-900 footer'>
      <div className='container mx-auto'>
        {/* Tagline Section */}
        <div className='flex flex-wrap'>
          <div className='w-full border-white border-b-2 mx-4 py-8'>
            <p className='text-center text-xl md:text-2xl text-white font-light'>
              Helping organizations build resilient technical teams and accelerate digital transformation
            </p>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className='flex flex-wrap'>
          {/* Column 1: Services */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='border-white w-full border-b-2 md:border-b-0 mx-4 py-6'>
              <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Services</h2>
              <ul className='menu'>
                {footerServices.map((service, index) => (
                  <li key={index} className='mb-4 pb-4 border-b border-gray-700 last:border-b-0'>
                    <h3 className='text-white font-semibold mb-1'>{service.title}</h3>
                    <p className='text-gray-400 text-sm'>{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Latest Thinking */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='border-white w-full border-b-2 md:border-b-0 mx-4 py-6'>
              <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Latest Thinking</h2>
              <ul className='menu'>
                {latestPosts.slice(0, 2).map((post, index) => (
                  <li key={index} className='mb-4 pb-4 border-b border-gray-700 last:border-b-0'>
                    <Link href={`/post/${post.postSlug}`} className='text-white hover:text-gray-300 transition-colors'>
                      <h3 className='font-semibold mb-1'>{post.postMetaData.title}</h3>
                      <p className='text-gray-400 text-sm'>{post.postMetaData.summary}</p>
                      {post.postMetaData.date && (
                        <p className='text-gray-500 text-xs mt-2'>{new Date(post.postMetaData.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      )}
                    </Link>
                  </li>
                ))}
                {latestPosts.length === 0 && (
                  <li className='text-gray-400 text-sm'>No posts available yet</li>
                )}
              </ul>
            </div>
          </div>

          {/* Column 3: Work With Me */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='border-white w-full border-b-2 md:border-b-0 mx-4 py-6'>
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
          </div>
        </div>

        {/* Copyright */}
        <div className='flex flex-wrap'>
          <div className='w-full copyright mx-4 py-6'>
            <p className='text-center text-white text-sm'>
              {footerCopyrightInfo.title} <FontAwesomeIcon icon={faCopyright} aria-label='Copyright' /> {footerCopyrightInfo.date} | <Link href={footerCopyrightInfo.url} title={footerCopyrightInfo.url}>{footerCopyrightInfo.url}</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
