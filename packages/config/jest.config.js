const nextJest = require('next/jest')

/**
 * Creates a base Jest configuration for Next.js apps in the monorepo
 * @param {string} dir - Directory path for the app
 * @returns {Function} Jest config creator
 */
function createJestConfig(dir = './') {
  const createNextJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir,
  })

  // Add any custom config to be passed to Jest
  const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      'node_modules/(?!(unified|remark-parse|remark-rehype|rehype-react|unist-.*|bail|is-plain-obj|trough|vfile|vfile-message|micromark.*|mdast-.*|hast-.*|trim-lines|property-information|space-separated-tokens|comma-separated-tokens|html-void-elements|web-namespaces)/)',
    ],
    // Support for TypeScript files
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // Test file patterns
    testMatch: ['**/__tests__/**/*.{ts,tsx,js,jsx}', '**/?(*.)+(spec|test).{ts,tsx,js,jsx}'],
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  }

  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  return createNextJestConfig(config)
}

module.exports = createJestConfig
