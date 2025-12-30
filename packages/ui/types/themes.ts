/**
 * Type definitions for article themes
 */

export interface ThemeColors {
  name: string
  // Primary color (used for headers)
  primary: string
  // Text color when on primary background (header)
  primaryText: string
  // Footer background color
  footer: string
  // Text color when on footer background
  footerText: string
  // Accent color (used for highlights, buttons, etc.)
  accent: string
  // Text color when on accent background
  accentText: string
  // Page background color
  background: string
  // Main body text color
  text: string
  // Border color
  border: string
  // Link color
  link: string
  // Link hover color
  linkHover: string
}

export interface BrandColors {
  linkedin: string
  linkedinHover: string
}

export interface ArticleThemes {
  light: ThemeColors
  dark: ThemeColors
  [key: string]: ThemeColors
}

export type ThemeName = 'light' | 'dark' | string
