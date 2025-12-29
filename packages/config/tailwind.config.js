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
        'theme-primary': 'var(--theme-primary, #000000)',
        'theme-accent': 'var(--theme-accent, #666666)',
        'theme-bg': 'var(--theme-bg, #ffffff)',
        'theme-text': 'var(--theme-text, #000000)',
        // Brand colors (consistent across all themes)
        'brand-linkedin': '#0077B5',
        'brand-linkedin-hover': '#005885',
      },
      borderColor: {
        'theme-primary': 'var(--theme-primary, #000000)',
        'theme-accent': 'var(--theme-accent, #666666)',
        'theme-bg': 'var(--theme-bg, #ffffff)',
        'theme-text': 'var(--theme-text, #000000)',
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
