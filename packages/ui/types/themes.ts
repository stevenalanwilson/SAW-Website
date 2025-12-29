/**
 * Type definitions for article themes
 */

export interface ThemeColors {
  name: string
  primary: string
  accent: string
  background: string
  text: string
  navText: string
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
