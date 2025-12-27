import Link from 'next/link'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import footerCopyrightInfo from '../config/footerCopyrightInfo'
import Tagline from './Tagline'
import ServicesList from './ServicesList'
import LatestPosts from './LatestPosts'
import WorkWithMe from './WorkWithMe'
import SectionErrorBoundary from './SectionErrorBoundary'

/**
 * Footer component with three-column layout displaying services, latest posts, and contact.
 * Includes error boundaries for each section to prevent cascading failures.
 *
 * @param {Object} props - Component props
 * @param {Array} [props.latestPosts=[]] - Array of latest posts to display
 * @returns {JSX.Element} Rendered footer with tagline, services, posts, contact, and copyright
 */
export default function Footer({ latestPosts = [] }) {
  return (
    <footer className='bg-theme-primary text-theme-bg footer'>
      <div className='container mx-auto'>
        {/* Tagline Section */}
        <div className='flex flex-wrap'>
          <Tagline />
        </div>

        {/* Three Column Layout */}
        <div className='flex flex-wrap'>
          {/* Column 1: Services */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg md:border-b-0 mx-4 py-6'>
              <SectionErrorBoundary name='ServicesList' errorMessage='Services list failed to load'>
                <ServicesList />
              </SectionErrorBoundary>
            </div>
          </div>

          {/* Column 2: Latest Thinking */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg md:border-b-0 mx-4 py-6'>
              <SectionErrorBoundary name='LatestPosts' errorMessage='Latest posts failed to load'>
                <LatestPosts posts={latestPosts} limit={2} />
              </SectionErrorBoundary>
            </div>
          </div>

          {/* Column 3: Work With Me */}
          <div className='flex w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg md:border-b-0 mx-4 py-6'>
              <SectionErrorBoundary name='WorkWithMe' errorMessage='Contact section failed to load'>
                <WorkWithMe />
              </SectionErrorBoundary>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='flex flex-wrap'>
          <div className='w-full copyright mx-4 py-6'>
            <p className='text-center text-sm text-theme-bg'>
              {footerCopyrightInfo.title}{' '}
              <FontAwesomeIcon icon={faCopyright} aria-label='Copyright' />{' '}
              {footerCopyrightInfo.date} |{' '}
              <Link href={footerCopyrightInfo.url} title={footerCopyrightInfo.url}>
                {footerCopyrightInfo.url}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  latestPosts: PropTypes.array,
}
