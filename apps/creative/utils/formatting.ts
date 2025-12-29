import dayjs from 'dayjs'

/**
 * Formats a date string into a human-readable format.
 *
 * @param date - The date string or Date object to format
 * @param format - The output format (default: 'MMMM D, YYYY')
 * @returns The formatted date string
 *
 * @example
 * formatDate('2024-01-15') // 'January 15, 2024'
 * formatDate('2024-01-15', 'DD/MM/YYYY') // '15/01/2024'
 */
export function formatDate(date: string | Date, format = 'MMMM D, YYYY'): string {
  if (!date) {
    return ''
  }

  return dayjs(date).format(format)
}

/**
 * Truncates text to a specified length and adds an ellipsis if needed.
 *
 * @param text - The text to truncate
 * @param maxLength - Maximum length of the text (default: 150)
 * @param suffix - The suffix to add when truncated (default: '...')
 * @returns The truncated text
 *
 * @example
 * truncateText('This is a very long text that needs truncating', 20)
 * // 'This is a very lo...'
 */
export function truncateText(text: string, maxLength = 150, suffix = '...'): string {
  if (!text || typeof text !== 'string') {
    return ''
  }

  if (text.length <= maxLength) {
    return text
  }

  return text.substring(0, maxLength).trim() + suffix
}

/**
 * Converts a filename to a URL-safe slug.
 *
 * @param filename - The filename to convert
 * @returns The slug without the file extension
 *
 * @example
 * createSlug('my-blog-post.md') // 'my-blog-post'
 * createSlug('hello-world.mdx') // 'hello-world'
 */
export function createSlug(filename: string): string {
  if (!filename || typeof filename !== 'string') {
    return ''
  }

  return filename.replace(/\.(md|mdx)$/, '')
}

/**
 * Formats a phone number for display.
 *
 * @param prefix - The country code prefix (e.g., '+44')
 * @param number - The phone number
 * @returns The formatted phone number
 *
 * @example
 * formatPhoneNumber('+44', '7738394792') // '+44 7738 394792'
 */
export function formatPhoneNumber(prefix: string, number: string): string {
  if (!prefix || !number) {
    return ''
  }

  // Simple formatting: +44 7738 394792
  // Adjust based on your locale preferences
  const cleaned = number.replace(/\D/g, '')

  if (cleaned.length === 10) {
    return `${prefix} ${cleaned.substring(0, 4)} ${cleaned.substring(4)}`
  }

  return `${prefix}${cleaned}`
}

/**
 * Generates a full email address from user and domain parts.
 * Used to obfuscate emails in the source code.
 *
 * @param user - The username part of the email
 * @param domain - The domain part of the email
 * @returns The complete email address
 *
 * @example
 * buildEmail('hello', 'example.com') // 'hello@example.com'
 */
export function buildEmail(user: string, domain: string): string {
  if (!user || !domain) {
    return ''
  }

  return `${user}@${domain}`
}
