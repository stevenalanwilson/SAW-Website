import Head from 'next/head'
import PropTypes from 'prop-types'
import config from '../config/siteConfig'

const SEO = ({
  title = config.site.title,
  description = config.site.description,
  image = '/static/og-image.jpg',
  url = config.site.url,
  type = 'website',
  publishedTime,
  modifiedTime,
}) => {
  const fullTitle = title.includes(config.owner.name) ? title : `${title} | ${config.site.name}`
  const fullImageUrl = image.startsWith('http') ? image : `${config.site.url}${image}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='title' content={fullTitle} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content={config.owner.name} />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullImageUrl} />
      <meta property='og:site_name' content={config.site.name} />

      {/* Article-specific metadata */}
      {type === 'article' && publishedTime && (
        <>
          <meta property='article:published_time' content={publishedTime} />
          <meta property='article:author' content={config.owner.name} />
          {modifiedTime && <meta property='article:modified_time' content={modifiedTime} />}
        </>
      )}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={fullImageUrl} />
      <meta name='twitter:creator' content={config.social.twitter.handle} />

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
}

export default SEO
