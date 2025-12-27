import siteConfig from './siteConfig'

// Legacy export for backward compatibility
// This file now imports from siteConfig (single source of truth)
const footerContactInfo = {
  number: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  linkedin: siteConfig.social.linkedin,
  twitter: [siteConfig.social.twitter],
  facebook: [siteConfig.social.facebook],
  locations: siteConfig.contact.locations,
}

export default footerContactInfo
