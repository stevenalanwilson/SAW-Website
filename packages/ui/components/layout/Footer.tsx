import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@/config/icons'
import siteConfig from '@/config/siteConfig'
import Tagline from '../ui/Tagline'
import ServicesList from '../features/ServicesList'
import LatestPosts from '../content/LatestPosts'
import WorkWithMe from '../features/WorkWithMe'
import SectionErrorBoundary from '../error/SectionErrorBoundary'
import type { FooterProps } from '../../types/components'

/**
 * Footer component with three-column layout displaying services, latest posts, and contact.
 * Includes error boundaries for each section to prevent cascading failures.
 *
 * @param props - Component props
 * @param props.latestPosts - Array of latest posts to display
 * @returns Rendered footer with tagline, services, posts, contact, and copyright
 */
export default function Footer({ latestPosts = [] }: FooterProps) {
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
          <div className='flex w-full lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg lg:border-b-0 mx-4 py-6'>
              <SectionErrorBoundary name='ServicesList' errorMessage='Services list failed to load'>
                <ServicesList />
              </SectionErrorBoundary>
            </div>
          </div>

          {/* Column 2: Latest Thinking */}
          <div className='flex w-full lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg lg:border-b-0 mx-4 py-6'>
              <SectionErrorBoundary name='LatestPosts' errorMessage='Latest posts failed to load'>
                <LatestPosts posts={latestPosts} limit={2} />
              </SectionErrorBoundary>
            </div>
          </div>

          {/* Column 3: Work With Me */}
          <div className='flex w-full lg:w-1/3 p-2'>
            <div className='w-full border-b-2 border-theme-bg lg:border-b-0 mx-4 py-6'>
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
              {siteConfig.owner.name} <FontAwesomeIcon icon={faCopyright} aria-label='Copyright' />{' '}
              {new Date().getFullYear()} |{' '}
              <Link href={siteConfig.copyright.url} title={siteConfig.copyright.url}>
                {siteConfig.copyright.url}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
