const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * Base Next.js configuration shared across all apps in the monorepo
 * Apps can extend this by importing and merging with their own config
 */
const baseNextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Enable compression for better performance
  compress: true,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configure headers for security and caching
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
      },
    ]

    // Only set HSTS in production
    if (process.env.NODE_ENV === 'production') {
      securityHeaders.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      })
    }

    // Build CSP value - stricter in production, more permissive in development
    const isDev = process.env.NODE_ENV !== 'production'
    const cspValue =
      "default-src 'self'; " +
      // In development, allow unsafe-eval and unsafe-inline for hot reloading and debugging
      // In production, restrict to specific trusted sources only
      (isDev
        ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live *.vercel-scripts.com vitals.vercel-insights.com; "
        : "script-src 'self' vercel.live *.vercel-scripts.com vitals.vercel-insights.com; ") +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: blob: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' vitals.vercel-insights.com *.ingest.sentry.io; " +
      "frame-src 'self'; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'self';" +
      (isDev ? '' : ' upgrade-insecure-requests;')

    securityHeaders.push(
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
      {
        key: 'Content-Security-Policy',
        value: cspValue,
      }
    )

    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Cache static assets (images, fonts, etc.) for 1 year
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache Next.js static files for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache optimized images for 1 year
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache blog posts for 1 hour, revalidate in background
        source: '/post/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache homepage for 5 minutes, revalidate in background
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=3600',
          },
        ],
      },
      {
        // Cache other pages for 10 minutes, revalidate in background
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=600, stale-while-revalidate=3600',
          },
        ],
      },
    ]
  },
}

/**
 * Helper function to create Next.js config with optional Sentry and Bundle Analyzer
 * @param {object} customConfig - Custom config to merge with base config
 * @returns {object} Complete Next.js config
 */
function createNextConfig(customConfig = {}) {
  // Merge base config with custom config
  let config = { ...baseNextConfig, ...customConfig }

  // Wrap with bundle analyzer
  config = withBundleAnalyzer(config)

  // Only wrap with Sentry if DSN is configured
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const sentryWebpackPluginOptions = {
      // Suppresses source map uploading logs during build
      silent: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    }
    config = withSentryConfig(config, sentryWebpackPluginOptions)
  }

  return config
}

// Export both the base config and the helper function
module.exports = createNextConfig()
module.exports.createNextConfig = createNextConfig
module.exports.baseNextConfig = baseNextConfig
