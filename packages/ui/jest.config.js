const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to load next.config.js (using the apps/limited as reference)
  dir: '../../apps/limited',
})

// Add custom config for the UI package
const config = {
  displayName: '@saw/ui',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(unified|remark-parse|remark-rehype|rehype-react|unist-.*|bail|is-plain-obj|trough|vfile|vfile-message|micromark.*|mdast-.*|hast-.*|trim-lines|property-information|space-separated-tokens|comma-separated-tokens|html-void-elements|web-namespaces)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/tests/**/*.test.{ts,tsx,js,jsx}'],
  moduleNameMapper: {
    // Map @/config to apps/limited/config for testing
    '^@/config/(.*)$': '<rootDir>/../../apps/limited/config/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
  },
}

module.exports = createJestConfig(config)
