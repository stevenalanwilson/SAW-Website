import jsxA11Y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'

/**
 * Base ESLint configuration shared across all apps in the monorepo
 * Apps can import and extend this configuration
 */
export const baseEslintConfig = [
  // Global ignores
  {
    ignores: [
      '**/node_modules/',
      '**/.next/',
      '**/out/',
      '**/coverage/',
      '**/testResults/',
      '**/public/',
      '**/.vercel/',
      '**/.swc/',
      '**/dist/',
      '**/build/',
    ],
  },

  // Base JS config
  js.configs.recommended,

  // Base configuration for all JS/JSX/TS/TSX files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      'jsx-a11y': jsxA11Y,
      react: react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Core Web Vitals rules from Next.js
      '@next/next/no-html-link-for-pages': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Custom rules
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^React$|^_',
          ignoreRestSiblings: true,
        },
      ],

      'prefer-const': 'warn',
      'no-var': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],

      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
  },

  // Override for test files (JS)
  {
    files: ['tests/**/*.js', '**/*.test.js'],

    rules: {
      'react/function-component-definition': 'off',
    },
  },

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      // Disable base rule as it can report incorrect errors
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // TypeScript-specific recommended rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },

  // Override for TypeScript test files
  {
    files: ['tests/**/*.ts', 'tests/**/*.tsx', '**/*.test.ts', '**/*.test.tsx'],

    rules: {
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // Override for config files to allow unused catch variables
  {
    files: ['config/**/*.ts'],

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]

/**
 * Helper function to create ESLint config with optional custom rules
 * @param {string} tsconfigPath - Path to tsconfig.json for TypeScript parser
 * @param {object[]} customConfig - Additional ESLint config objects to merge
 * @returns {object[]} Complete ESLint config array
 */
export function createEslintConfig(tsconfigPath = './tsconfig.json', customConfig = []) {
  // Create a shallow copy and update the TypeScript config
  const config = baseEslintConfig.map((item, index) => {
    // Find the TypeScript config entry and update the project path
    if (item.files && item.files.includes('**/*.ts') && item.languageOptions?.parser) {
      return {
        ...item,
        languageOptions: {
          ...item.languageOptions,
          parserOptions: {
            ...item.languageOptions.parserOptions,
            project: tsconfigPath,
          },
        },
      }
    }
    return item
  })

  // Merge with custom config
  return [...config, ...customConfig]
}

// Default export for direct use
export default baseEslintConfig
