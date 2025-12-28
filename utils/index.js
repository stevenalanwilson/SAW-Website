/**
 * Determines if the application is running in production environment.
 * @type {boolean}
 */
const production = process.env.NODE_ENV === 'production'

/**
 * Utility functions for the application.
 * @namespace utils
 */
export default {
  /**
   * Boolean indicating if the app is running in production mode.
   * @type {boolean}
   */
  isProduction: production,
}
