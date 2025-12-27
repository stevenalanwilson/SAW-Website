/**
 * @fileoverview Footer copyright information configuration.
 * Legacy export for backward compatibility - imports from siteConfig (single source of truth).
 */

import siteConfig from './siteConfig'

/**
 * @typedef {Object} FooterCopyrightInfo
 * @property {string} title - Copyright holder name
 * @property {number} date - Copyright year
 * @property {string} url - Copyright URL
 */

/**
 * Current date for copyright year calculation.
 * @type {Date}
 */
const date = new Date()

/**
 * Footer copyright information.
 * @type {FooterCopyrightInfo}
 */
const footerCopyrightInfo = {
  title: siteConfig.owner.name,
  date: date.getFullYear(),
  url: siteConfig.copyright.url,
}

export default footerCopyrightInfo
