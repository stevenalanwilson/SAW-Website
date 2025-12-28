import Head from 'next/head'
import PropTypes from 'prop-types'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react'

/**
 * Layout component that wraps page content with header, footer, and analytics.
 * Applies theme styles using CSS custom properties.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @param {Array} [props.latestPosts=[]] - Array of latest posts to display in footer
 * @param {Object} [props.themeStyles] - CSS custom properties for theming
 * @returns {JSX.Element} Rendered layout with header, main content, footer, and analytics
 */
export default function Layout(props) {
  return (
    <div className='bg-theme-bg text-theme-text' style={props.themeStyles}>
      <Head />
      <SiteHeader />
      <main>{props.children}</main>
      <Footer latestPosts={props.latestPosts || []} />
      <Analytics />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  latestPosts: PropTypes.array,
  themeStyles: PropTypes.object,
}
