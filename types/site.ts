/**
 * Type definitions for site configuration
 */

// =============================================================================
// Application Types
// =============================================================================

export interface AppConfig {
  version: string
  name: string
  environment: string | undefined
  dev: boolean
  production: boolean
}

// =============================================================================
// Site Metadata Types
// =============================================================================

export interface SiteMetadata {
  name: string
  title: string
  tagline: string
  url: string
  description: string
}

// =============================================================================
// Owner Types
// =============================================================================

export interface OwnerInfo {
  name: string
  firstName: string
  title: string
  experience: string
}

// =============================================================================
// Contact Types
// =============================================================================

export interface EmailConfig {
  user: string
  domain: string
}

export interface ContactInfo {
  phone: string
  email: EmailConfig
  location: string
  locations: string[]
}

// =============================================================================
// Social Media Types
// =============================================================================

export interface SocialLink {
  title: string
  link: string
  handle?: string
}

export interface SocialLinks {
  linkedin: SocialLink
  twitter: SocialLink
  facebook: SocialLink
}

// =============================================================================
// Stats Types
// =============================================================================

export interface StatItem {
  label: string
  value: string
}

export interface StatsConfig {
  title: string
  items: StatItem[]
}

// =============================================================================
// Content Types
// =============================================================================

export interface AuthorBio {
  greeting: string
  introduction: string
  tagline: string
}

export interface PreviousRole {
  company: string
  url: string
}

export interface CurrentRole {
  position: string
  company: string
  companyUrl: string
  location: string
  description?: string
  title?: string
}

export interface HeroContent {
  greeting: string
  introduction: string
  description: string
  currentRole: CurrentRole
  previousRoles: PreviousRole[]
}

export interface CTAContent {
  heading: string
  message: string
}

export interface AboutSubtitle {
  text: string
  name: string
  role: string
}

export interface AboutContent {
  title: string
  description: string
  subtitle: AboutSubtitle
  overview: string[]
  currentRole: CurrentRole
}

export interface ContentConfig {
  authorBio: AuthorBio
  hero: HeroContent
  cta: CTAContent
  about: AboutContent
}

// =============================================================================
// Expertise & Experience Types
// =============================================================================

export interface ExpertiseItem {
  title: string
  description: string
}

export interface ExperienceItem {
  company: string
  companyUrl: string
  title: string
  description: string
}

// =============================================================================
// Education Types
// =============================================================================

export interface Education {
  institution: string
  period: string
}

// =============================================================================
// Services Types
// =============================================================================

export interface ServiceItem {
  title: string
  description: string
}

// =============================================================================
// Sample Data Types
// =============================================================================

export interface SamplesConfig {
  expertise: ExpertiseItem[]
  stats: StatItem[]
}

// =============================================================================
// Navigation Types
// =============================================================================

export interface NavItem {
  label: string
  href: string
  title: string
}

export interface NavigationConfig {
  main: NavItem[]
}

// =============================================================================
// Integration Types
// =============================================================================

export interface SentryConfig {
  dsn: string
}

// =============================================================================
// Copyright Types
// =============================================================================

export interface CopyrightConfig {
  url: string
}

// =============================================================================
// Main Site Config Type
// =============================================================================

export interface SiteConfig {
  app: AppConfig
  site: SiteMetadata
  owner: OwnerInfo
  contact: ContactInfo
  social: SocialLinks
  stats: StatsConfig
  copyright: CopyrightConfig
  content: ContentConfig
  expertise: ExpertiseItem[]
  experience: ExperienceItem[]
  education: Education
  services: ServiceItem[]
  samples: SamplesConfig
  navigation: NavigationConfig
  sentry: SentryConfig
}
