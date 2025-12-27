import siteConfig from './siteConfig'

// Legacy export for backward compatibility
// This file now imports from siteConfig (single source of truth)
module.exports = {
  contactInfo: {
    location: siteConfig.contact.location,
    links: [
      { label: 'LinkedIn Profile', url: siteConfig.social.linkedin.link },
      { label: 'Twitter', url: siteConfig.social.twitter.link },
      { label: 'Facebook', url: siteConfig.social.facebook.link },
    ],
  },
  professionalStats: {
    title: siteConfig.stats.title,
    stats: siteConfig.stats.items,
  },
}
