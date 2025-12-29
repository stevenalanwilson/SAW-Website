/**
 * Type definitions for React component props
 */

import type { ReactNode } from 'react'

// =============================================================================
// Common Types
// =============================================================================

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

// =============================================================================
// UI Component Props
// =============================================================================

export interface LoadingSpinnerProps {
  message?: string
  className?: string
}

export interface TaglineProps {
  text?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export interface NavigationItem {
  href: string
  label: string
  title?: string
}

export interface NavigationMenuProps {
  items: NavigationItem[]
  mobile?: boolean
  onItemClick?: () => void
}

export interface SEOBreadcrumb {
  position?: number
  name: string
  url: string
}

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  keywords?: string[]
  breadcrumbs?: SEOBreadcrumb[]
}

// =============================================================================
// Card Component Props
// =============================================================================

export interface AuthorCardProps {
  className?: string
}

export interface ContactCardProps {
  variant?: 'default' | 'simple'
  className?: string
}

export interface ExperienceCardProps {
  company: string
  companyUrl: string
  title: string
  description: string
  className?: string
}

export interface StatsCardProps {
  title?: string
  stats?: Array<{ label: string; value: string }>
  className?: string
}

// =============================================================================
// Content Component Props
// =============================================================================

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
}

export interface SiteTitleProps {
  className?: string
}

export interface PostProps {
  content: string
  theme?: string | Record<string, string>
  className?: string
}

export interface ListPostsProps {
  posts: Array<{
    postSlug: string
    postMetaData: {
      title: string
      date: string
      summary: string
      thumbnail?: string
    }
  }>
  className?: string
}

export interface LatestPostsProps {
  posts?: Array<{
    postSlug: string
    postMetaData: {
      title: string
      date: string
      summary: string
      thumbnail?: string
    }
  }>
  limit?: number
  className?: string
}

// =============================================================================
// Feature Component Props
// =============================================================================

export interface ExpertiseGridProps {
  items?: Array<{ title: string; description: string }>
  className?: string
}

export interface ServicesListProps {
  className?: string
}

export interface WorkWithMeProps {
  className?: string
}

// =============================================================================
// Layout Component Props
// =============================================================================

export interface LayoutProps {
  children: ReactNode
  className?: string
}

export interface SidebarProps {
  posts?: Array<{
    postSlug: string
    postMetaData: {
      title: string
      date: string
      summary: string
    }
  }>
  className?: string
}

export interface FooterProps {
  latestPosts?: Array<{
    postSlug: string
    postMetaData: {
      title: string
      date: string
      summary: string
    }
  }>
  className?: string
}

export interface SiteHeaderProps {
  className?: string
}

// =============================================================================
// Error Boundary Props
// =============================================================================

export interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export interface SectionErrorBoundaryProps {
  children: ReactNode
  sectionName?: string
  className?: string
}
