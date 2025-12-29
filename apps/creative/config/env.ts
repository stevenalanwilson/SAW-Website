/**
 * Environment variable validation.
 * Validates that required environment variables are present at application startup.
 * This prevents runtime errors due to missing configuration.
 */

interface EnvConfig {
  NEXT_PUBLIC_SITE_URL: string
  NODE_ENV: string
  NEXT_PUBLIC_SENTRY_DSN?: string
  NEXT_PUBLIC_SENTRY_ENVIRONMENT?: string
  SENTRY_ORG?: string
  SENTRY_PROJECT?: string
  SENTRY_AUTH_TOKEN?: string
}

/**
 * Validates that all required environment variables are present.
 * Optional variables (like Sentry config) are checked but don't throw errors.
 *
 * @throws Error if required environment variables are missing
 * @returns The validated environment configuration
 *
 * @example
 * // In _app.tsx or a layout component
 * validateEnv()
 */
export function validateEnv(): EnvConfig {
  // Skip validation during build/test if NEXT_PUBLIC_SITE_URL not set
  // (it will use default from siteConfig)
  const isTest = process.env.NODE_ENV === 'test'
  const isBuild = process.env.npm_lifecycle_event === 'build'

  // Required environment variables
  const required = ['NEXT_PUBLIC_SITE_URL']

  // Check for missing required variables
  const missing = required.filter((key) => !process.env[key])

  if (missing.length > 0 && !isTest && !isBuild) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
        'Please check your .env.local file and ensure all required variables are set.\n' +
        'See .env.example for reference.'
    )
  }

  // Optional variables (log warnings in development if missing)
  const optional = [
    'NEXT_PUBLIC_SENTRY_DSN',
    'NEXT_PUBLIC_SENTRY_ENVIRONMENT',
    'SENTRY_ORG',
    'SENTRY_PROJECT',
    'SENTRY_AUTH_TOKEN',
  ]

  if (process.env.NODE_ENV === 'development') {
    const missingOptional = optional.filter((key) => !process.env[key])

    if (missingOptional.length > 0) {
      console.warn(
        `[ENV] Optional environment variables not set: ${missingOptional.join(', ')}\n` +
          'Some features (like Sentry error tracking) may be disabled.\n' +
          'This is normal for local development.'
      )
    }
  }

  // Validate NEXT_PUBLIC_SITE_URL format if provided
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stevenalanwilson.com'
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try {
      new URL(siteUrl)
    } catch (_error) {
      throw new Error(
        `Invalid NEXT_PUBLIC_SITE_URL: "${siteUrl}"\n` +
          'Must be a valid URL (e.g., https://example.com)'
      )
    }
  }

  // Return validated config
  return {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NODE_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
  }
}

/**
 * Gets a validated environment configuration.
 * Memoized to avoid repeated validation.
 */
let cachedEnv: EnvConfig | null = null

export function getEnv(): EnvConfig {
  if (!cachedEnv) {
    cachedEnv = validateEnv()
  }
  return cachedEnv
}
