/**
 * Root Jest configuration for monorepo
 * This helps VS Code Jest extension understand the workspace structure
 */
module.exports = {
  projects: ['<rootDir>/apps/limited', '<rootDir>/apps/creative', '<rootDir>/packages/ui'],
  collectCoverageFrom: [
    'apps/*/pages/**/*.{js,jsx,ts,tsx}',
    'apps/*/components/**/*.{js,jsx,ts,tsx}',
    'apps/*/services/**/*.{js,jsx,ts,tsx}',
    'apps/*/utils/**/*.{js,jsx,ts,tsx}',
    'packages/ui/components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/dist/**',
  ],
}
