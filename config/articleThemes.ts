/**
 * Article theme configuration
 * Provides light and dark theme options using CSS custom properties
 */

import type { ArticleThemes, BrandColors, ThemeColors, ThemeName } from '../types/themes'

/**
 * Brand colors used across all themes
 * These remain consistent regardless of light/dark theme
 */
export const brandColors: BrandColors = {
  linkedin: '#0077B5', // Official LinkedIn blue
  linkedinHover: '#005885', // Darker shade for hover
}

/**
 * Available theme presets
 * Each theme defines colors for primary elements, accents, and backgrounds
 */
export const articleThemes: ArticleThemes = {
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
export const DEFAULT_THEME: ThemeName = 'light'

/**
 * Maps article tags to theme presets
 * Used for automatic theme detection based on article tags
 * Note: Currently not used with light/dark themes, but kept for backwards compatibility
 */
export const tagThemeMap: Record<string, ThemeName> = {}

/**
 * Determines the theme for an article based on its tags
 * @param _tags - Array of article tags from frontmatter (unused with light/dark themes)
 * @returns Theme name (key from articleThemes)
 */
export function getThemeFromTags(_tags: string[] = []): ThemeName {
  // With light/dark themes, we default to light
  return DEFAULT_THEME
}

/**
 * Gets the theme object for a given theme name
 * @param themeName - Name of the theme (or explicit theme object)
 * @param _tags - Fallback tags for auto-detection (unused with light/dark themes)
 * @returns Theme configuration object
 */
export function getTheme(
  themeName: ThemeName | Partial<ThemeColors> | null | undefined,
  _tags: string[] = []
): ThemeColors {
  // If themeName is already an object with color properties, use it directly
  if (typeof themeName === 'object' && themeName !== null && 'primary' in themeName) {
    return {
      ...articleThemes.light,
      ...themeName,
    } as ThemeColors
  }

  // If themeName is a string, look it up in presets
  if (typeof themeName === 'string' && articleThemes[themeName]) {
    return articleThemes[themeName]
  }

  // Fall back to default theme
  return articleThemes[DEFAULT_THEME]
}

export default articleThemes
