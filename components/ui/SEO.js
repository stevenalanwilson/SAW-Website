import Head from 'next/head'
import PropTypes from 'prop-types'
import config from '../../config/siteConfig'

/**
 * SEO component that manages meta tags for improved search engine optimization.
 * Handles Open Graph, Twitter Cards, schema.org structured data, and article-specific metadata.
 *
 * @param {Object} props - Component props
 * @param {string} [props.title] - Page title (defaults to site title from config)
 * @param {string} [props.description] - Page description (defaults to site description)
 * @param {string} [props.image='/static/og-image.jpg'] - Social media preview image URL
 * @param {string} [props.url] - Canonical URL (defaults to site URL from config)
 * @param {'website' | 'article'} [props.type='website'] - Page type for Open Graph
 * @param {string} [props.publishedTime] - ISO 8601 date string for article publish date
 * @param {string} [props.modifiedTime] - ISO 8601 date string for article modified date
 * @param {string} [props.author] - Article author name
 * @param {Array<string>} [props.keywords] - SEO keywords/tags
 * @param {Array<{position: number, name: string, url: string}>} [props.breadcrumbs] - Breadcrumb trail for navigation
 * @returns {JSX.Element} Head component with meta tags and structured data
 */
export default function SEO({
  title = config.site.title,
  description = config.site.description,
  image = '/static/og-image.jpg',
  url = config.site.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = config.owner.name,
  keywords = [],
  breadcrumbs = [],
}) {
  const fullTitle = title.includes(config.owner.name) ? title : `${title} | ${config.site.name}`
  const fullImageUrl = image.startsWith('http') ? image : `${config.site.url}${image}`

  // Generate schema.org structured data
  const generateStructuredData = () => {
    const schemas = []

    // Organization/Person schema (for all pages)
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: config.owner.name,
      jobTitle: config.owner.title,
      url: config.site.url,
      sameAs: [config.social.linkedin.link, config.social.twitter.link],
      worksFor: {
        '@type': 'Organization',
        name: config.site.name,
        url: config.site.url,
      },
    }
    schemas.push(personSchema)

    // Article schema (for blog posts)
    if (type === 'article' && publishedTime) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: fullTitle,
        description: description,
        image: fullImageUrl,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@type': 'Person',
          name: author,
          url: config.site.url,
        },
        publisher: {
          '@type': 'Person',
          name: config.owner.name,
          url: config.site.url,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }
      schemas.push(articleSchema)
    }

    // Breadcrumb schema (if breadcrumbs provided)
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
      schemas.push(breadcrumbSchema)
    }

    // Website schema (for homepage)
    if (type === 'website' && url === config.site.url) {
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: config.site.name,
        description: config.site.description,
        url: config.site.url,
        author: {
          '@type': 'Person',
          name: config.owner.name,
        },
      }
      schemas.push(websiteSchema)
    }

    return schemas
  }

  const structuredData = generateStructuredData()

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='title' content={fullTitle} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content={author} />
      {keywords.length > 0 && <meta name='keywords' content={keywords.join(', ')} />}

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullImageUrl} />
      <meta property='og:image:alt' content={fullTitle} />
      <meta property='og:site_name' content={config.site.name} />
      <meta property='og:locale' content='en_GB' />

      {/* Article-specific metadata */}
      {type === 'article' && publishedTime && (
        <>
          <meta property='article:published_time' content={publishedTime} />
          <meta property='article:author' content={author} />
          {modifiedTime && <meta property='article:modified_time' content={modifiedTime} />}
          {keywords.length > 0 &&
            keywords.map((keyword, index) => (
              <meta key={index} property='article:tag' content={keyword} />
            ))}
        </>
      )}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={fullImageUrl} />
      <meta name='twitter:image:alt' content={fullTitle} />
      <meta name='twitter:creator' content={config.social.twitter.handle} />
      <meta name='twitter:site' content={config.social.twitter.handle} />

      {/* Schema.org structured data (JSON-LD) */}
      {structuredData.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Favicon */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article']),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}
