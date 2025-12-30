/**
 * Base Tailwind CSS configuration shared across all apps in the monorepo
 * Apps extend this by importing and merging with their own content paths
 * @type {import('tailwindcss').Config}
 */
const baseTailwindConfig = {
  theme: {
    extend: {
      // Support for CSS custom properties (CSS variables) in Tailwind classes
      colors: {
        // Primary color and text (header)
        'theme-primary': 'var(--theme-primary, #000000)',
        'theme-primary-text': 'var(--theme-primary-text, #ffffff)',
        // Footer color and text
        'theme-footer': 'var(--theme-footer, #000000)',
        'theme-footer-text': 'var(--theme-footer-text, #ffffff)',
        // Accent color and text
        'theme-accent': 'var(--theme-accent, #666666)',
        'theme-accent-text': 'var(--theme-accent-text, #ffffff)',
        // Background and body text
        'theme-bg': 'var(--theme-bg, #ffffff)',
        'theme-text': 'var(--theme-text, #000000)',
        // Borders
        'theme-border': 'var(--theme-border, #e5e5e5)',
        // Links
        'theme-link': 'var(--theme-link, #0066cc)',
        'theme-link-hover': 'var(--theme-link-hover, #004499)',
        // Brand colors (consistent across all themes)
        'brand-linkedin': '#0077B5',
        'brand-linkedin-hover': '#005885',
      },
      borderColor: {
        'theme-primary': 'var(--theme-primary, #000000)',
        'theme-footer': 'var(--theme-footer, #000000)',
        'theme-footer-text': 'var(--theme-footer-text, #ffffff)',
        'theme-accent': 'var(--theme-accent, #666666)',
        'theme-bg': 'var(--theme-bg, #ffffff)',
        'theme-text': 'var(--theme-text, #000000)',
        'theme-border': 'var(--theme-border, #e5e5e5)',
      },
      screens: {
        xlg: '1366px',
      },
    },
  },
  plugins: [],
}

/**
 * Helper function to create Tailwind config with custom content paths
 * @param {string[]} customContentPaths - Additional content paths for the app
 * @returns {import('tailwindcss').Config} Complete Tailwind config
 */
function createTailwindConfig(customContentPaths = []) {
  return {
    ...baseTailwindConfig,
    content: [
      './pages/**/*.{html,js,jsx,ts,tsx}',
      './components/**/*.{html,js,jsx,ts,tsx}',
      './src/**/*.{html,js,jsx,ts,tsx}',
      '../../packages/ui/components/**/*.{html,js,jsx,ts,tsx}',
      './tests/**/*.{html,js,jsx,ts,tsx}',
      './public/**/*.{html,js,jsx,ts,tsx}',
      ...customContentPaths,
    ],
  }
}

module.exports = createTailwindConfig()
module.exports.createTailwindConfig = createTailwindConfig
module.exports.baseTailwindConfig = baseTailwindConfig
