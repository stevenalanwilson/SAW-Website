// Article theme configuration
// Provides light and dark theme options using CSS custom properties

/**
 * Available theme presets
 * Each theme defines colors for primary elements, accents, and backgrounds
 */
/**
 * Brand colors used across all themes
 * These remain consistent regardless of light/dark theme
 */
export const brandColors = {
  linkedin: '#0077B5', // Official LinkedIn blue
  linkedinHover: '#005885', // Darker shade for hover
}

export const articleThemes = {
  light: {
    name: 'Light',
    primary: '#000000', // Black
    accent: '#666666', // Medium gray for subtle text
    background: '#ffffff', // White
    text: '#000000', // Black
  },

  dark: {
    name: 'Dark',
    primary: '#ffffff', // White
    accent: '#999999', // Medium-light gray for better contrast on black
    background: '#000000', // Black
    text: '#ffffff', // White
  },
}

/**
 * Default theme to use when no theme is specified
 */
export const DEFAULT_THEME = 'light'

/**
 * Maps article tags to theme presets
 * Used for automatic theme detection based on article tags
 * Note: Currently not used with light/dark themes, but kept for backwards compatibility
 */
export const tagThemeMap = {}

/**
 * Determines the theme for an article based on its tags
 * @param {string[]} tags - Array of article tags from frontmatter
 * @returns {string} Theme name (key from articleThemes)
 */
export function getThemeFromTags(tags = []) {
  // With light/dark themes, we default to light
  return DEFAULT_THEME
}

/**
 * Gets the theme object for a given theme name
 * @param {string} themeName - Name of the theme (or explicit theme object)
 * @param {string[]} tags - Fallback tags for auto-detection (not used with light/dark themes)
 * @returns {Object} Theme configuration object
 */
export function getTheme(themeName, tags = []) {
  // If themeName is already an object with color properties, use it directly
  if (typeof themeName === 'object' && themeName !== null && themeName.primary) {
    return {
      ...articleThemes.light,
      ...themeName,
    }
  }

  // If themeName is a string, look it up in presets
  if (typeof themeName === 'string' && articleThemes[themeName]) {
    return articleThemes[themeName]
  }

  // Fall back to default theme
  return articleThemes[DEFAULT_THEME]
}

export default articleThemes
