/**
 * Determines if the application is running in production environment.
 * @type {boolean}
 */
const production = process.env.NODE_ENV === 'production'

/**
 * Selects a random quote from an array of quotes.
 *
 * @param {Array<string>} quotes - Array of quote strings
 * @returns {string} A randomly selected quote from the array
 * @example
 * const quotes = ['Quote 1', 'Quote 2', 'Quote 3']
 * const selected = randomQuote(quotes)
 */
const randomQuote = (quotes) => quotes[Math.floor(Math.random() * (quotes.length - 1))]

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
  /**
   * Function to select a random quote from an array.
   * @type {Function}
   */
  randomQuote: randomQuote,
}
