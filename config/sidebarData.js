/**
 * @fileoverview Sidebar data configuration.
 * Legacy export for backward compatibility - imports from siteConfig (single source of truth).
 */

import siteConfig from './siteConfig'

/**
 * @typedef {Object} ContactLink
 * @property {string} label - Link label text
 * @property {string} url - Link URL
 */

/**
 * @typedef {Object} SidebarData
 * @property {Object} contactInfo - Contact information section
 * @property {string} contactInfo.location - Contact location
 * @property {ContactLink[]} contactInfo.links - Social media links
 * @property {Object} professionalStats - Professional statistics section
 * @property {string} professionalStats.title - Stats section title
 * @property {Array} professionalStats.stats - Array of statistics
 */

/**
 * Sidebar configuration data.
 * @type {SidebarData}
 */
const sidebarData = {
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

export default sidebarData
