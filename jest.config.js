const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(unified|remark-parse|remark-rehype|rehype-react|unist-.*|bail|is-plain-obj|trough|vfile|vfile-message|micromark.*|mdast-.*|hast-.*|trim-lines|property-information|space-separated-tokens|comma-separated-tokens|html-void-elements|web-namespaces)/)',
  ],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
