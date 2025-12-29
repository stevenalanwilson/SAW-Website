import path from 'path'
import { sanitizeHtml, validateSlug } from './validation'

/**
 * Validates and resolves a file path to prevent path traversal attacks.
 * Ensures the resolved path is within the expected directory.
 *
 * @param basePath - The base directory path
 * @param userPath - The user-provided path or filename
 * @returns The resolved safe path
 * @throws Error if the path attempts to traverse outside the base directory
 *
 * @example
 * validateFilePath('posts', 'my-post.md') // 'posts/my-post.md'
 * validateFilePath('posts', '../../../etc/passwd') // throws Error
 */
export function validateFilePath(basePath: string, userPath: string): string {
  const resolvedBase = path.resolve(basePath)
  const resolvedPath = path.resolve(basePath, userPath)

  // Ensure the resolved path starts with the base path
  if (!resolvedPath.startsWith(resolvedBase)) {
    throw new Error('Invalid file path: Path traversal detected')
  }

  return resolvedPath
}

/**
 * Sanitizes a markdown slug for safe use in file system operations.
 * Validates and escapes the slug to prevent security vulnerabilities.
 *
 * @param slug - The slug to sanitize
 * @returns The sanitized slug
 * @throws Error if the slug is invalid
 *
 * @example
 * sanitizeSlug('my-blog-post') // 'my-blog-post'
 * sanitizeSlug('post<script>') // throws Error
 */
export function sanitizeSlug(slug: string): string {
  if (!validateSlug(slug)) {
    throw new Error(
      'Invalid slug: Only alphanumeric characters, hyphens, and underscores are allowed'
    )
  }

  // Additional sanitization: escape HTML entities as extra protection
  return sanitizeHtml(slug)
}

/**
 * Obfuscates an email address by splitting it into parts.
 * Prevents simple bot scraping of email addresses from source code.
 *
 * @param email - The email address to obfuscate
 * @returns An object with user and domain parts
 *
 * @example
 * obfuscateEmail('hello@example.com')
 * // { user: 'hello', domain: 'example.com' }
 */
export function obfuscateEmail(email: string): { user: string; domain: string } {
  const parts = email.split('@')

  if (parts.length !== 2) {
    throw new Error('Invalid email format')
  }

  return {
    user: parts[0],
    domain: parts[1],
  }
}

/**
 * Obfuscates a phone number by splitting it into prefix and number.
 *
 * @param phoneNumber - The full phone number (e.g., '+447738394792')
 * @returns An object with prefix and number parts
 *
 * @example
 * obfuscatePhone('+447738394792')
 * // { prefix: '+44', number: '7738394792' }
 */
export function obfuscatePhone(phoneNumber: string): { prefix: string; number: string } {
  const cleaned = phoneNumber.replace(/\s/g, '')

  // Simple logic: assume format is +CC followed by number
  const match = cleaned.match(/^(\+\d{1,3})(\d+)$/)

  if (!match) {
    throw new Error('Invalid phone number format')
  }

  return {
    prefix: match[1],
    number: match[2],
  }
}
