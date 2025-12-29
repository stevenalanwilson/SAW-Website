/**
 * Utility functions for the application.
 * Centralized location for common helpers to promote code reuse.
 */

// Validation utilities
export { validateSlug, validateEmail, sanitizeHtml, validateUrl } from './validation'

// Formatting utilities
export { formatDate, truncateText, createSlug, formatPhoneNumber, buildEmail } from './formatting'

// Security utilities
export { validateFilePath, sanitizeSlug, obfuscateEmail, obfuscatePhone } from './security'
