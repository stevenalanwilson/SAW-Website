import Head from 'next/head'
import config from '../config'
import siteConfig from '../config/siteConfig'

const SEO = ({
  title = siteConfig.site.title,
  description = config.siteDescription,
  image = '/static/og-image.jpg',
  url = config.siteUrl,
  type = 'website',
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes(siteConfig.owner.name) ? title : `${title} | ${config.siteName}`
  const fullImageUrl = image.startsWith('http') ? image : `${config.siteUrl}${image}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={config.author} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={config.siteName} />

      {/* Article-specific metadata */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={config.author} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content={config.twitterHandle} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
