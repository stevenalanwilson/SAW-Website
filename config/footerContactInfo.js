/**
 * @fileoverview Footer contact information configuration.
 * Legacy export for backward compatibility - imports from siteConfig (single source of truth).
 */

import siteConfig from './siteConfig'

/**
 * @typedef {Object} FooterContactInfo
 * @property {string} number - Contact phone number
 * @property {Object} email - Email configuration (obfuscated)
 * @property {string} email.user - Email username part
 * @property {string} email.domain - Email domain part
 * @property {Object} linkedin - LinkedIn information
 * @property {Array} twitter - Twitter accounts
 * @property {Array} facebook - Facebook profiles
 * @property {string[]} locations - Operating locations
 */

/**
 * Footer contact information.
 * @type {FooterContactInfo}
 */
const footerContactInfo = {
  number: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  linkedin: siteConfig.social.linkedin,
  twitter: [siteConfig.social.twitter],
  facebook: [siteConfig.social.facebook],
  locations: siteConfig.contact.locations,
}

export default footerContactInfo
