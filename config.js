const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  appVersion: '0.1.0',
  appName: 'SAW',
  dev: !isProduction,
  production: isProduction,
  environment: process.env.NODE_ENV,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://stevenalanwilson.com',
  siteName: 'Steven Alan Wilson Limited',
  siteDescription: 'Seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services.',
  author: 'Steven Alan Wilson',
  twitterHandle: '@d79design'
}
