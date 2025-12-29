# @saw/config

Shared configuration files for the SAW monorepo.

## Included Configurations

### Next.js (`next.config.js`)

Base Next.js configuration with security headers, caching strategies, Sentry integration, and bundle analyzer.

**Usage in apps:**

```javascript
// apps/limited/next.config.js
const { createNextConfig } = require('@saw/config/next.config')

module.exports = createNextConfig({
  // Add app-specific overrides here
})
```

### Tailwind CSS (`tailwind.config.js`)

Base Tailwind configuration with theme colors, screens, and shared UI component paths.

**Usage in apps:**

```javascript
// apps/limited/tailwind.config.js
const { createTailwindConfig } = require('@saw/config/tailwind.config')

module.exports = createTailwindConfig([
  // Add app-specific content paths here
])
```

### Jest (`jest.config.js`)

Base Jest configuration for Next.js apps with TypeScript support.

**Usage in apps:**

```javascript
// apps/limited/jest.config.js
const createJestConfig = require('@saw/config/jest.config')

module.exports = createJestConfig('./')
```

### ESLint (`eslint.config.mjs`)

Base ESLint configuration with TypeScript, React, and accessibility rules.

**Usage in apps:**

```javascript
// apps/limited/eslint.config.mjs
import { createEslintConfig } from '@saw/config/eslint.config.mjs'

export default createEslintConfig('./tsconfig.json')
```

### TypeScript (`tsconfig.base.json`)

Base TypeScript configuration that apps can extend.

**Usage in apps:**

```json
{
  "extends": "../../packages/config/tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["../../packages/ui/components/*"]
    }
  }
}
```

## Benefits

- **DRY**: Single source of truth for shared configuration
- **Consistency**: All apps use the same base settings
- **Maintainability**: Update once, applies to all apps
- **Flexibility**: Apps can override or extend as needed
