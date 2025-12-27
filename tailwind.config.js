/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './tests/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
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
    },
  },
  plugins: [],
}
