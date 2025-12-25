import Head from 'next/head'

const SEO = ({
  title = 'Steven Alan Wilson Limited - Technical Leadership Consultancy',
  description = 'Seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services.',
  image = '/static/og-image.jpg',
  url = 'https://stevenalanwilson.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('Steven Alan Wilson') ? title : `${title} | Steven Alan Wilson Limited`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Steven Alan Wilson Limited" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@d79design" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
