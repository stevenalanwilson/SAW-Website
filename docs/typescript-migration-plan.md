# TypeScript Migration Plan for Saw-Limited

Based on my analysis, here's a comprehensive migration plan for your Next.js application:

## Current State Analysis

**Project Overview:**

- Next.js 16.1.1 with React 19.2.3
- 76 JavaScript files (.js/.jsx) excluding node_modules
- TypeScript already installed (v5.9.3) as dev dependency
- jsconfig.json currently in use with path aliases configured
- Well-organized structure: components, pages, services, config, tests

**File Breakdown:**

- **Components:** 24 files (ui, layout, cards, features, content, error)
- **Pages:** 6 files (Next.js pages including dynamic routes)
- **Tests:** 37 test files (comprehensive test coverage)
- **Config files:** 8 files (siteConfig, icons, articleThemes, build configs)
- **Services:** 1 file (getMarkdownService)
- **Logging:** 2 files (Sentry integration)
- **Scripts:** 1 file (sitemap generator)

## Migration Strategy: Incremental Approach

### Phase 1: Foundation Setup

**Goal:** Set up TypeScript infrastructure without breaking existing code

1. **Create tsconfig.json**
   - Convert jsconfig.json to tsconfig.json
   - Enable `allowJs: true` (already configured)
   - Set `strict: false` initially, gradually enable later
   - Keep all existing path aliases
   - Configure for Next.js with proper types

2. **Update Dependencies**

   ```bash
   npm install --save-dev @types/react @types/react-dom @types/node
   ```

3. **Update Build Configuration**
   - Update package.json scripts to support both .js and .ts files
   - Update lint-staged to include TypeScript files
   - Update Prettier config to format TypeScript files
   - Update ESLint for TypeScript support

4. **Update Tooling**
   - Add TypeScript extensions to ESLint
   - Configure Jest for TypeScript
   - Update lint-staged hooks for .ts/.tsx files

### Phase 2: Low-Risk Files (Start Here)

**Goal:** Migrate files with minimal dependencies first

**Priority Order:**

1. **Config files** (3-5 files)
   - `config/siteConfig.js` → `siteConfig.ts`
   - `config/icons.js` → `icons.ts`
   - `config/articleThemes.js` → `articleThemes.ts`
   - Create type definitions for configurations

2. **Utility/Service files** (1-2 files)
   - `services/getMarkdownService.js` → `getMarkdownService.ts`
   - Define interfaces for markdown data structures

3. **Build scripts** (1 file)
   - `scripts/generate-sitemap.js` → `generate-sitemap.ts`

### Phase 3: React Components (Bottom-Up)

**Goal:** Migrate components starting with leaf nodes (no dependencies)

**Migration Order:**

1. **UI Components** (5 files - no dependencies on other components)
   - `components/ui/LoadingSpinner.js`
   - `components/ui/Tagline.js`
   - `components/ui/Breadcrumbs.js`
   - `components/ui/SEO.js`
   - `components/ui/NavigationMenu.js`

2. **Card Components** (4 files - simple props)
   - `components/cards/StatsCard.js`
   - `components/cards/AuthorCard.js`
   - `components/cards/ExperienceCard.js`
   - `components/cards/ContactCard.js`

3. **Content Components** (6 files)
   - `components/content/SectionHeading.js`
   - `components/content/SiteTitle.js`
   - `components/content/PageHero.js`
   - `components/content/Post.js`
   - `components/content/ListPosts.js`
   - `components/content/LatestPosts.js`

4. **Feature Components** (3 files)
   - `components/features/ExpertiseGrid.js`
   - `components/features/ServicesList.js`
   - `components/features/WorkWithMe.js`

5. **Error Boundary Components** (2 files)
   - `components/error/ErrorBoundary.js`
   - `components/error/SectionErrorBoundary.js`

6. **Layout Components** (4 files - depend on other components)
   - `components/layout/Footer.js`
   - `components/layout/Sidebar.js`
   - `components/layout/SiteHeader.js`
   - `components/layout/Layout.js` (last - uses all other layouts)

### Phase 4: Pages

**Goal:** Migrate Next.js pages after components are typed

**Order:**

1. `pages/404.js`
2. `pages/components.js`
3. `pages/about.js`
4. `pages/index.js`
5. `pages/post/[slug].js` (dynamic route)
6. `pages/_app.js` (last - entry point)

### Phase 5: Remaining Infrastructure

**Goal:** Migrate build and monitoring configurations

1. **Logging** (2 files)
   - `log/sentry.js`
   - `log/__mocks__/sentry.js`

2. **Configuration files** (6 files)
   - `postcss.config.js`
   - `tailwind.config.js`
   - `jest.config.js`
   - `next.config.js`
   - Sentry config files (3 files)

### Phase 6: Test Migration

**Goal:** Convert test files to TypeScript

**Strategy:**

- Migrate tests alongside their corresponding components
- Install `@types/jest` and `@jest/types`
- Update test utilities and setup files
- Ensure type safety in test assertions

### Phase 7: Strict Mode Enablement

**Goal:** Enable stricter TypeScript checks gradually

1. Enable in tsconfig.json progressively:
   - `noImplicitAny: true`
   - `strictNullChecks: true`
   - `strictFunctionTypes: true`
   - `strictBindCallApply: true`
   - `strictPropertyInitialization: true`
   - `noImplicitThis: true`
   - `alwaysStrict: true` (already enabled)
   - Finally: `strict: true`

2. Fix errors in each phase before moving to next strictness level

## Best Practices During Migration

1. **One file at a time:** Rename .js → .ts or .jsx → .tsx
2. **Start with types:** Define interfaces/types before migrating logic
3. **Use `any` sparingly:** Only as temporary measure, add TODO comments
4. **Leverage inference:** Let TypeScript infer types where possible
5. **Test after each migration:** Run tests to ensure nothing breaks
6. **Keep commits small:** Each commit should migrate 1-5 related files
7. **Document complex types:** Add JSDoc comments for tricky type definitions

## Type Definitions Needed

Create `types/` directory with:

- `types/site.ts` - Site configuration types
- `types/post.ts` - Blog post and markdown types
- `types/components.ts` - Shared component prop types
- `types/services.ts` - Service layer types

## Estimated Migration Effort

- **Phase 1 (Setup):** 2-4 hours
- **Phase 2 (Config):** 2-3 hours
- **Phase 3 (Components):** 8-12 hours
- **Phase 4 (Pages):** 3-5 hours
- **Phase 5 (Infrastructure):** 2-4 hours
- **Phase 6 (Tests):** 8-10 hours
- **Phase 7 (Strict mode):** 4-8 hours

**Total estimated time:** 29-46 hours

## Success Criteria

- ✅ All .js/.jsx files converted to .ts/.tsx
- ✅ Zero TypeScript compilation errors
- ✅ All tests passing
- ✅ Strict mode enabled
- ✅ No `any` types (or minimal with documentation)
- ✅ Build and production deployment successful

## Next Steps

Options to proceed:

1. Start with Phase 1 (Foundation Setup) - creating tsconfig.json and installing type definitions
2. Provide more details on a specific phase
3. Begin migrating specific files you'd like to prioritize

## Progress Tracking

### Phase 1: Foundation Setup ✅ COMPLETED

- [x] Create tsconfig.json
- [x] Install type dependencies (@types/react, @types/react-dom, @types/node, @types/jest, @jest/types)
- [x] Install TypeScript ESLint packages (@typescript-eslint/parser, @typescript-eslint/eslint-plugin)
- [x] Install ts-jest for TypeScript testing support
- [x] Update package.json scripts (format, format:check, type-check)
- [x] Configure ESLint for TypeScript
- [x] Configure Jest for TypeScript
- [x] Update lint-staged configuration
- [x] Verify setup (type-check passes, all 264 tests pass)

### Phase 2: Low-Risk Files ✅ COMPLETED

- [x] config/siteConfig.js → siteConfig.ts
- [x] config/icons.js → icons.ts
- [x] config/articleThemes.js → articleThemes.ts
- [x] services/getMarkdownService.js → getMarkdownService.ts
- [ ] scripts/generate-sitemap.js → generate-sitemap.ts (optional, build script)

### Phase 3: React Components

**UI Components:**

- [ ] components/ui/LoadingSpinner.js → LoadingSpinner.tsx
- [ ] components/ui/Tagline.js → Tagline.tsx
- [ ] components/ui/Breadcrumbs.js → Breadcrumbs.tsx
- [ ] components/ui/SEO.js → SEO.tsx
- [ ] components/ui/NavigationMenu.js → NavigationMenu.tsx

**Card Components:**

- [ ] components/cards/StatsCard.js → StatsCard.tsx
- [ ] components/cards/AuthorCard.js → AuthorCard.tsx
- [ ] components/cards/ExperienceCard.js → ExperienceCard.tsx
- [ ] components/cards/ContactCard.js → ContactCard.tsx

**Content Components:**

- [ ] components/content/SectionHeading.js → SectionHeading.tsx
- [ ] components/content/SiteTitle.js → SiteTitle.tsx
- [ ] components/content/PageHero.js → PageHero.tsx
- [ ] components/content/Post.js → Post.tsx
- [ ] components/content/ListPosts.js → ListPosts.tsx
- [ ] components/content/LatestPosts.js → LatestPosts.tsx

**Feature Components:**

- [ ] components/features/ExpertiseGrid.js → ExpertiseGrid.tsx
- [ ] components/features/ServicesList.js → ServicesList.tsx
- [ ] components/features/WorkWithMe.js → WorkWithMe.tsx

**Error Boundary Components:**

- [ ] components/error/ErrorBoundary.js → ErrorBoundary.tsx
- [ ] components/error/SectionErrorBoundary.js → SectionErrorBoundary.tsx

**Layout Components:**

- [ ] components/layout/Footer.js → Footer.tsx
- [ ] components/layout/Sidebar.js → Sidebar.tsx
- [ ] components/layout/SiteHeader.js → SiteHeader.tsx
- [ ] components/layout/Layout.js → Layout.tsx

### Phase 4: Pages

- [ ] pages/404.js → 404.tsx
- [ ] pages/components.js → components.tsx
- [ ] pages/about.js → about.tsx
- [ ] pages/index.js → index.tsx
- [ ] pages/post/[slug].js → [slug].tsx
- [ ] pages/\_app.js → \_app.tsx

### Phase 5: Infrastructure

- [ ] log/sentry.js → sentry.ts
- [ ] log/**mocks**/sentry.js → sentry.ts
- [ ] postcss.config.js (keep as .js or migrate)
- [ ] tailwind.config.js (keep as .js or migrate)
- [ ] jest.config.js (keep as .js or migrate)
- [ ] next.config.js (keep as .js or migrate)
- [ ] sentry.client.config.js
- [ ] sentry.edge.config.js
- [ ] sentry.server.config.js

### Phase 6: Tests

- [ ] Migrate all 37 test files to TypeScript
- [ ] Update test setup and utilities

### Phase 7: Strict Mode

- [ ] Enable noImplicitAny
- [ ] Enable strictNullChecks
- [ ] Enable strictFunctionTypes
- [ ] Enable strictBindCallApply
- [ ] Enable strictPropertyInitialization
- [ ] Enable noImplicitThis
- [ ] Enable strict: true
- [ ] Remove all `any` types or document exceptions
