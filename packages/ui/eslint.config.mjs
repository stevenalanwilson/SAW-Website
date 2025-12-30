import { createEslintConfig } from '../../packages/config/eslint.config.mjs'

const uiConfig = createEslintConfig('./tsconfig.eslint.json')

// Add ignore pattern for generated files
export default [
  {
    ignores: [
      '**/*.d.ts',
      '**/*.js',
      '!eslint.config.mjs',
      '!jest.config.js',
    ],
  },
  ...uiConfig,
]
