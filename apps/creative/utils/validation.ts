import validator from 'validator'

/**
 * Validates that a slug contains only safe characters (alphanumeric, hyphens, underscores).
 * Prevents path traversal and injection attacks.
 *
 * @param slug - The slug string to validate
 * @returns True if the slug is valid, false otherwise
 *
 * @example
 * validateSlug('my-blog-post') // true
 * validateSlug('../../../etc/passwd') // false
 * validateSlug('post<script>alert(1)</script>') // false
 */
export function validateSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') {
    return false
  }

  // Only allow alphanumeric characters, hyphens, and underscores
  const slugPattern = /^[a-zA-Z0-9_-]+$/
  return slugPattern.test(slug)
}

/**
 * Validates an email address format.
 *
 * @param email - The email address to validate
 * @returns True if the email is valid, false otherwise
 *
 * @example
 * validateEmail('user@example.com') // true
 * validateEmail('invalid.email') // false
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }

  return validator.isEmail(email)
}

/**
 * Sanitizes HTML entities in a string to prevent XSS attacks.
 *
 * @param input - The string to sanitize
 * @returns The sanitized string with HTML entities escaped
 *
 * @example
 * sanitizeHtml('<script>alert(1)</script>') // '&lt;script&gt;alert(1)&lt;/script&gt;'
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }

  return validator.escape(input)
}

/**
 * Validates that a URL is properly formed and uses HTTPS.
 *
 * @param url - The URL to validate
 * @param requireHttps - Whether to require HTTPS (default: true in production)
 * @returns True if the URL is valid, false otherwise
 *
 * @example
 * validateUrl('https://example.com') // true
 * validateUrl('http://example.com', false) // true
 * validateUrl('javascript:alert(1)') // false
 */
export function validateUrl(
  url: string,
  requireHttps = process.env.NODE_ENV === 'production'
): boolean {
  if (!url || typeof url !== 'string') {
    return false
  }

  const isValid = validator.isURL(url, {
    protocols: requireHttps ? ['https'] : ['http', 'https'],
    require_protocol: true,
  })

  return isValid
}
