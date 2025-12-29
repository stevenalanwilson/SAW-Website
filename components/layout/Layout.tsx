import Head from 'next/head'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react'
import type { CSSProperties, ReactNode } from 'react'

interface ExtendedLayoutProps {
  children: ReactNode
  latestPosts?: Array<{
    postSlug: string
    postMetaData: {
      title: string
      date: string
      summary: string
    }
  }>
  themeStyles?: CSSProperties
}

/**
 * Layout component that wraps page content with header, footer, and analytics.
 * Applies theme styles using CSS custom properties.
 *
 * @param props - Component props
 * @param props.children - Page content to render
 * @param props.latestPosts - Array of latest posts to display in footer
 * @param props.themeStyles - CSS custom properties for theming
 * @returns Rendered layout with header, main content, footer, and analytics
 */
export default function Layout({ children, latestPosts = [], themeStyles }: ExtendedLayoutProps) {
  return (
    <div className='bg-theme-bg text-theme-text' style={themeStyles}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <Footer latestPosts={latestPosts} />
      <Analytics />
    </div>
  )
}
