// Legacy config file - now imports from siteConfig (single source of truth)
// This file maintained for backward compatibility
const siteConfig = require('./config/siteConfig').default

module.exports = {
  appVersion: siteConfig.app.version,
  appName: siteConfig.app.name,
  dev: siteConfig.app.dev,
  production: siteConfig.app.production,
  environment: siteConfig.app.environment,
  siteUrl: siteConfig.site.url,
  siteName: siteConfig.site.name,
  siteDescription: siteConfig.site.description,
  author: siteConfig.owner.name,
  twitterHandle: siteConfig.social.twitter.handle
}
