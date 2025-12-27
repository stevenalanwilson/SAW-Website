import siteConfig from './siteConfig'

// Legacy export for backward compatibility
// This file now imports from siteConfig (single source of truth)
const date = new Date()
const footerCopyrightInfo = {
  title: siteConfig.owner.name,
  date: date.getFullYear(),
  url: siteConfig.copyright.url,
}

export default footerCopyrightInfo
