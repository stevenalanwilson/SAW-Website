# Monorepo Setup Guide: Multi-Site Architecture with Vercel

## Overview

This document outlines the architecture for converting the Saw-Limited repository into a master theme that cascades updates to two separate websites:

1. **Steven Alan Wilson Limited** - Digital & Technical Consultancy
2. **Steven Alan Wilson** - Creative Portfolio

## Architecture Strategy: NPM Workspaces Monorepo

### Why Monorepo?

- **Cascading Updates**: Update the master theme once, propagate to all sites
- **Code Reuse**: Share components, utilities, and configuration (~90% code sharing)
- **Independent Deployments**: Each site deploys separately to its own domain
- **Site-Specific Customization**: Override config, styling, and content per site
- **Shared Testing**: Maintain quality across all sites with centralized tests

---

## Repository Structure

```
Saw-Limited/                          (Git repository root)
├── packages/
│   ├── master-theme/                 (Shared components, config, utilities)
│   │   ├── components/               (All reusable React components)
│   │   │   ├── layout/              (Header, Footer, Sidebar, Layout)
│   │   │   ├── cards/               (Contact, Stats, Experience, Author)
│   │   │   ├── content/             (Post, ListPosts, PageHero)
│   │   │   ├── features/            (ExpertiseGrid, ServicesList, WorkWithMe)
│   │   │   ├── ui/                  (SEO, NavigationMenu, Breadcrumbs)
│   │   │   └── error/               (ErrorBoundary)
│   │   ├── config/                   (Base configuration files)
│   │   │   ├── siteConfig.base.js   (Default configuration template)
│   │   │   ├── articleThemes.js     (Theme system with light/dark presets)
│   │   │   └── icons.js             (FontAwesome imports for tree-shaking)
│   │   ├── services/                 (Utility services)
│   │   │   └── getMarkdownService.js
│   │   ├── styles/                   (Global stylesheets)
│   │   │   └── screen.css           (Tailwind base + custom styles)
│   │   ├── tests/                    (Shared test utilities)
│   │   ├── tailwind.config.js        (Base Tailwind configuration)
│   │   └── package.json              (Master theme package definition)
│   │
│   ├── sawlimited-digital/           (Site 1: Digital & Technical Consultancy)
│   │   ├── pages/                    (Next.js pages - file-based routing)
│   │   │   ├── _app.js              (App wrapper)
│   │   │   ├── index.js             (Homepage)
│   │   │   ├── about.js
│   │   │   ├── 404.js
│   │   │   └── post/[slug].js       (Dynamic blog posts)
│   │   ├── posts/                    (Site-specific blog posts - markdown)
│   │   ├── public/                   (Site-specific static assets)
│   │   │   ├── image/
│   │   │   ├── static/
│   │   │   └── robots.txt
│   │   ├── config/
│   │   │   └── siteConfig.js        (Site-specific config overrides)
│   │   ├── scripts/
│   │   │   └── generate-sitemap.js
│   │   ├── next.config.js            (Next.js configuration)
│   │   ├── tailwind.config.js        (Extends master theme config)
│   │   ├── .env.local                (Environment variables)
│   │   └── package.json              (Depends on master-theme)
│   │
│   └── sawlimited-creative/          (Site 2: Creative Portfolio)
│       ├── pages/
│       ├── posts/
│       ├── public/
│       ├── config/
│       │   └── siteConfig.js        (Site-specific config overrides)
│       ├── scripts/
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── .env.local
│       └── package.json              (Depends on master-theme)
│
├── package.json                      (Root workspace configuration)
├── package-lock.json
├── .gitignore
├── README.md
└── MONOREPO-SETUP.md                 (This file)
```

---

## Technology Stack

### Core Framework

- **Next.js 16.1.1** - React framework with SSG/SSR
- **React 19.2.3** - UI library
- **Node.js 22.x** - Runtime environment

### Styling

- **Tailwind CSS 3.4.6** - Utility-first CSS framework
- **CSS Custom Properties** - Dynamic theming system
- **PostCSS** - CSS processing pipeline

### Content Management

- **Gray-matter** - YAML frontmatter parsing for markdown
- **Unified/Remark/Rehype** - Markdown processing pipeline

### Additional Tools

- **FontAwesome 6.6.0** - Icon library (tree-shakeable)
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking (optional)

### Testing

- **Jest 30.2.0** - Testing framework
- **Testing Library** - Component testing
- **256 tests** across components, services, pages

---

## NPM Workspaces Configuration

### Root `package.json`

```json
{
  "name": "saw-limited-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "dev:digital": "npm run dev --workspace=sawlimited-digital",
    "dev:creative": "npm run dev --workspace=sawlimited-creative",
    "build:digital": "npm run build --workspace=sawlimited-digital",
    "build:creative": "npm run build --workspace=sawlimited-creative",
    "build:all": "npm run build --workspaces",
    "test": "npm run test --workspaces --if-present",
    "lint": "npm run lint --workspaces --if-present"
  },
  "devDependencies": {
    "eslint": "^9.19.0",
    "prettier": "^3.4.2"
  }
}
```

### Master Theme `package.json`

```json
{
  "name": "@saw-limited/master-theme",
  "version": "1.0.0",
  "private": true,
  "main": "index.js",
  "exports": {
    "./components/*": "./components/*",
    "./config/*": "./config/*",
    "./services/*": "./services/*",
    "./styles/*": "./styles/*"
  },
  "peerDependencies": {
    "next": "^16.1.1",
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.6.0",
    "@fortawesome/free-brands-svg-icons": "^6.6.0",
    "@fortawesome/free-solid-svg-icons": "^6.6.0",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "gray-matter": "^4.0.3",
    "rehype-sanitize": "^6.0.0",
    "rehype-stringify": "^10.0.1",
    "remark-parse": "^11.0.0",
    "remark-rehype": "^11.1.1",
    "unified": "^11.0.5"
  }
}
```

### Child Site `package.json` (Example)

```json
{
  "name": "sawlimited-digital",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "npm run sitemap && next build",
    "start": "next start",
    "sitemap": "node scripts/generate-sitemap.js",
    "lint": "next lint",
    "test": "jest"
  },
  "dependencies": {
    "@saw-limited/master-theme": "*",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "@vercel/analytics": "^1.4.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "jest": "^30.2.0",
    "@testing-library/react": "^16.3.1",
    "@testing-library/jest-dom": "^6.6.3"
  },
  "engines": {
    "node": ">=22.0.0"
  }
}
```

---

## Configuration System

### Master Theme Base Config

Each child site extends the master theme's base configuration:

**`packages/master-theme/config/siteConfig.base.js`**

```javascript
// Base configuration template - child sites override specific values
export const baseSiteConfig = {
  app: {
    version: '1.0.0',
    name: 'Saw Limited',
    environment: process.env.NODE_ENV,
    dev: process.env.NODE_ENV === 'development',
    production: process.env.NODE_ENV === 'production',
  },
  // Site-specific values will be overridden
  site: {
    name: 'OVERRIDE_REQUIRED',
    title: 'OVERRIDE_REQUIRED',
    tagline: 'OVERRIDE_REQUIRED',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'OVERRIDE_REQUIRED',
    description: 'OVERRIDE_REQUIRED',
  },
  // ... other base configuration
}
```

### Child Site Config Override Pattern

**`packages/sawlimited-digital/config/siteConfig.js`**

```javascript
import { baseSiteConfig } from '@saw-limited/master-theme/config/siteConfig.base'
import { mergeDeep } from '@saw-limited/master-theme/utils/mergeDeep'

const digitalSiteConfig = {
  site: {
    name: 'Steven Alan Wilson Limited',
    title: 'Digital & Technical Consultancy',
    tagline: 'Expert Technical Solutions',
    url: 'https://stevenalanwilson.com',
    description: 'Professional digital and technical consultancy services...',
  },
  owner: {
    name: 'Steven Alan Wilson',
    firstName: 'Steven',
    title: 'Technical Consultant',
  },
  contact: {
    phone: '+44 (0) 7951 123456',
    email: 'hello@stevenalanwilson.com',
    location: 'London, UK',
  },
  services: [
    {
      title: 'Technical Consultancy',
      description: 'Expert guidance on digital transformation',
      icon: 'faLaptopCode',
    },
    // ... more services
  ],
  expertise: [
    // Site-specific expertise areas
  ],
  // ... other overrides
}

export default mergeDeep(baseSiteConfig, digitalSiteConfig)
```

---

## Theme System

### CSS Custom Properties

The theme system uses CSS custom properties for dynamic theming:

**Tailwind Config Extension**

```javascript
// packages/sawlimited-digital/tailwind.config.js
const baseConfig = require('@saw-limited/master-theme/tailwind.config')

module.exports = {
  ...baseConfig,
  content: ['./pages/**/*.{js,jsx}', '../master-theme/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend.colors,
        // Site-specific color overrides
        'brand-primary': '#0077B5',
      },
    },
  },
}
```

### Theme Variables

```css
/* Applied via Layout component's themeStyles prop */
:root {
  --theme-primary: #000000;
  --theme-accent: #0077b5;
  --theme-bg: #ffffff;
  --theme-text: #000000;
}
```

---

## Vercel Deployment Strategy

### Multiple Projects from One Repository

Vercel supports deploying multiple Next.js apps from a single monorepo by creating separate projects for each site.

### Setup Steps

#### 1. Create Vercel Projects

For each child site, create a new Vercel project:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the same Git repository (Saw-Limited) **multiple times**
3. Create separate projects:
   - **Project 1**: `sawlimited-digital`
   - **Project 2**: `sawlimited-creative`

#### 2. Configure Root Directory

For each Vercel project, configure the root directory:

**Digital Site:**

- Root Directory: `packages/sawlimited-digital`
- Framework Preset: Next.js
- Node.js Version: 22.x

**Creative Site:**

- Root Directory: `packages/sawlimited-creative`
- Framework Preset: Next.js
- Node.js Version: 22.x

#### 3. Enable Shared Code Access

In each project's settings:

1. Go to **Settings > General > Root Directory**
2. Enable: **"Include source files outside of the Root Directory in the Build Step"**

This allows each site to access `packages/master-theme/` during build.

#### 4. Configure Environment Variables

Set environment variables for each project:

**Digital Site Environment Variables:**

```env
NEXT_PUBLIC_SITE_URL=https://stevenalanwilson.com
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn (optional)
```

**Creative Site Environment Variables:**

```env
NEXT_PUBLIC_SITE_URL=https://yourcreativedomain.com
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn (optional)
```

#### 5. Optimize Build Triggers

To prevent unnecessary builds, configure the **Ignored Build Step** in each project:

1. Go to **Settings > Git > Ignored Build Step**
2. Set to: `git diff HEAD^ HEAD --quiet .`

This ensures each site only rebuilds when:

- Its own files change (`packages/sawlimited-digital/`)
- Shared dependencies change (`packages/master-theme/`)

### Deployment Workflow

```
Push to Git Repository
        ↓
Vercel Auto-Detects Changes
        ↓
┌───────────────┬────────────────┐
│  Changed:     │   Changed:     │
│  master-theme │   digital/     │
│               │                │
│  Triggers:    │   Triggers:    │
│  - Digital ✓  │   - Digital ✓  │
│  - Creative ✓ │   - Creative ✗ │
└───────────────┴────────────────┘
```

### Domain Configuration

Each Vercel project can have custom domains:

**Digital Site:**

- Production: `stevenalanwilson.com`
- Vercel URL: `sawlimited-digital.vercel.app`

**Creative Site:**

- Production: `yourcreativedomain.com`
- Vercel URL: `sawlimited-creative.vercel.app`

---

## Development Workflow

### Local Development

#### Install Dependencies (First Time)

```bash
# From repository root
npm install
```

This installs all dependencies for all workspaces.

#### Run Development Server

**Digital Site:**

```bash
npm run dev:digital
```

**Creative Site:**

```bash
npm run dev:creative
```

**Both Sites Simultaneously:**

```bash
# Terminal 1
npm run dev:digital

# Terminal 2
npm run dev:creative
```

### Making Changes

#### Updating Master Theme (Affects All Sites)

1. Make changes in `packages/master-theme/`
2. Test in both child sites locally
3. Commit and push
4. Vercel rebuilds both sites automatically

**Example: Update a Component**

```bash
# Edit shared component
vim packages/master-theme/components/layout/Header.js

# Test in digital site
npm run dev:digital

# Test in creative site
npm run dev:creative

# Commit and push
git add .
git commit -m "Update header component navigation"
git push origin master
```

#### Site-Specific Changes

1. Make changes in `packages/sawlimited-digital/` or `packages/sawlimited-creative/`
2. Only the affected site rebuilds on Vercel

**Example: Update Digital Site Config**

```bash
# Edit digital site config
vim packages/sawlimited-digital/config/siteConfig.js

# Test locally
npm run dev:digital

# Commit and push (only digital site rebuilds)
git add packages/sawlimited-digital/
git commit -m "Update digital site contact information"
git push origin master
```

### Testing

#### Run All Tests

```bash
npm test
```

#### Run Tests for Specific Site

```bash
npm run test --workspace=sawlimited-digital
```

#### Run Tests for Master Theme

```bash
npm run test --workspace=master-theme
```

---

## Build and Deployment

### Local Production Builds

#### Build All Sites

```bash
npm run build:all
```

#### Build Specific Site

```bash
npm run build:digital
npm run build:creative
```

### Vercel Automatic Deployment

#### Production Deployment

- Push to `master` branch → Deploys to production URLs

#### Preview Deployment

- Push to any other branch → Creates preview deployment URLs
- Pull requests → Automatic preview deployments with unique URLs

### Deployment Checklist

Before deploying major changes:

- [ ] Run tests locally: `npm test`
- [ ] Build all sites locally: `npm run build:all`
- [ ] Test both sites in development mode
- [ ] Review changes in both siteConfig files
- [ ] Verify environment variables in Vercel dashboard
- [ ] Check that shared components work correctly in both sites
- [ ] Create preview deployment by pushing to a feature branch
- [ ] Test preview URLs before merging to master

---

## Customization Patterns

### Override Components

Child sites can override master theme components:

**Option 1: Component Shadowing**

```javascript
// packages/sawlimited-digital/components/custom/Header.js
import { Header as BaseHeader } from '@saw-limited/master-theme/components/layout/Header'

export default function CustomHeader(props) {
  return (
    <div className='custom-wrapper'>
      <BaseHeader {...props} />
      {/* Add site-specific elements */}
    </div>
  )
}
```

**Option 2: Complete Override**

```javascript
// packages/sawlimited-digital/pages/_app.js
import CustomHeader from '../components/custom/Header'
// Instead of importing from master-theme
```

### Override Styles

**Site-Specific Tailwind Config**

```javascript
// packages/sawlimited-digital/tailwind.config.js
module.exports = {
  ...baseConfig,
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF6B6B', // Site-specific brand color
      },
    },
  },
}
```

**Site-Specific CSS**

```css
/* packages/sawlimited-digital/public/static/custom.css */
@import '@saw-limited/master-theme/styles/screen.css';

/* Site-specific overrides */
.hero-section {
  background: linear-gradient(to right, #667eea, #764ba2);
}
```

### Override Configuration

Merge site-specific config with base config:

```javascript
import { mergeDeep } from '@saw-limited/master-theme/utils/mergeDeep'
import { baseSiteConfig } from '@saw-limited/master-theme/config/siteConfig.base'

const siteSpecificConfig = {
  // Only override what's different
  site: {
    name: 'Site-Specific Name',
    // Other fields inherited from baseSiteConfig
  },
}

export default mergeDeep(baseSiteConfig, siteSpecificConfig)
```

---

## Migration Checklist

### Phase 1: Monorepo Setup

- [ ] Create `packages/` directory structure
- [ ] Move current code to `packages/master-theme/`
- [ ] Create `packages/sawlimited-digital/`
- [ ] Create `packages/sawlimited-creative/`
- [ ] Set up root `package.json` with workspaces
- [ ] Configure package dependencies

### Phase 2: Configuration Extraction

- [ ] Extract base config from current `siteConfig.js`
- [ ] Create site-specific config for digital site
- [ ] Create site-specific config for creative site
- [ ] Implement config merge utility
- [ ] Test configuration inheritance

### Phase 3: Component Refactoring

- [ ] Move all components to master-theme
- [ ] Update import paths in child sites
- [ ] Test component reusability
- [ ] Create component documentation

### Phase 4: Testing

- [ ] Run all existing tests
- [ ] Add integration tests for multi-site setup
- [ ] Test local development workflow
- [ ] Test build process for both sites

### Phase 5: Vercel Deployment

- [ ] Create first Vercel project (digital site)
- [ ] Configure root directory and environment variables
- [ ] Test deployment and verify functionality
- [ ] Create second Vercel project (creative site)
- [ ] Configure root directory and environment variables
- [ ] Test deployment and verify functionality
- [ ] Configure custom domains
- [ ] Set up ignored build step optimization

### Phase 6: Documentation

- [ ] Document monorepo structure
- [ ] Document customization patterns
- [ ] Document deployment workflow
- [ ] Create development guidelines
- [ ] Update README.md

---

## Troubleshooting

### Common Issues

#### Issue: "Cannot find module '@saw-limited/master-theme'"

**Solution:**

```bash
# Reinstall dependencies from root
npm install
```

#### Issue: Vercel builds both sites on every commit

**Solution:**
Configure Ignored Build Step in each project:

```bash
git diff HEAD^ HEAD --quiet .
```

#### Issue: Components not updating after master-theme changes

**Solution:**

```bash
# Clear Next.js cache
rm -rf packages/sawlimited-digital/.next
rm -rf packages/sawlimited-creative/.next

# Reinstall dependencies
npm install
```

#### Issue: Tailwind styles not applying

**Solution:**
Verify `content` paths include master-theme:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    '../master-theme/components/**/*.{js,jsx}', // ← Add this
  ],
}
```

#### Issue: Environment variables not loading

**Solution:**

- Verify `.env.local` exists in each child site
- Check Vercel project environment variables
- Restart development server: `npm run dev:digital`

---

## Best Practices

### Version Control

- Commit master-theme changes separately from site-specific changes
- Use conventional commit messages: `feat(master-theme):`, `fix(digital):`, etc.
- Create feature branches for major changes
- Use pull requests for code review

### Component Development

- Keep components in master-theme generic and reusable
- Use props for customization instead of hardcoding values
- Document component APIs with JSDoc
- Write tests for all shared components

### Configuration Management

- Never hardcode site-specific values in master-theme
- Use environment variables for deployment-specific config
- Document all configuration options
- Validate configuration at build time

### Performance

- Use Next.js Image component for all images
- Implement lazy loading for heavy components
- Monitor bundle size with `npm run analyze`
- Optimize Tailwind CSS with purge configuration

### Security

- Never commit `.env.local` files
- Use environment variables for API keys
- Keep dependencies updated
- Enable security headers in `next.config.js`

---

## Resources

### Vercel Documentation

- [Using Monorepos](https://vercel.com/docs/monorepos)
- [Monorepos FAQ](https://vercel.com/docs/monorepos/monorepo-faq)
- [Deploy Both Apps - Vercel Academy](https://docs.vercel.com/academy/production-monorepos/deploy-both-apps)

### NPM Workspaces

- [NPM Workspaces Documentation](https://docs.npmjs.com/cli/v10/using-npm/workspaces)

### Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Monorepo Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

## Support

For questions or issues:

1. Review this documentation
2. Check Vercel deployment logs
3. Review Next.js build output
4. Check GitHub issues in the repository

---

**Last Updated:** 2025-12-28
**Version:** 1.0.0
