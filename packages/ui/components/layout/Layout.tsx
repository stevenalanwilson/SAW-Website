import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react'
import type { CSSProperties, ReactNode } from 'react'
import { getTheme, DEFAULT_THEME } from '@/config/articleThemes'

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
  // If no theme styles provided, use the default theme for this app
  const currentThemeStyles =
    themeStyles ||
    (() => {
      const theme = getTheme(DEFAULT_THEME)
      return {
        '--theme-primary': theme.primary,
        '--theme-accent': theme.accent,
        '--theme-bg': theme.background,
        '--theme-text': theme.text,
      } as CSSProperties
    })()

  return (
    <div className='bg-theme-bg text-theme-text' style={currentThemeStyles}>
      <SiteHeader />
      <main>{children}</main>
      <Footer latestPosts={latestPosts} />
      <Analytics />
    </div>
  )
}
