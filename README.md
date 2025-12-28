# Steven Alan Wilson - Personal Website

A high-performance, well-tested Next.js application for [stevenalanwilson.com](https://stevenalanwilson.com).

[![Tests](https://img.shields.io/badge/tests-256%20passing-brightgreen)]() [![Coverage](https://img.shields.io/badge/coverage-comprehensive-brightgreen)]() [![Node](https://img.shields.io/badge/node-22.x-brightgreen)]() [![Next.js](https://img.shields.io/badge/next.js-16.1.1-black)]()

---

## Table of Contents

- [Quick Start](#quick-start)
- [Architecture & Features](#architecture--features)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Performance](#performance)
- [Security](#security)
- [Theming](#theming)
- [Monorepo Setup](#monorepo-setup)

---

## Quick Start

### Prerequisites

- **Node.js** 22.x or higher
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Saw-Limited.git
cd Saw-Limited

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Environment Variables

**Required:**

- `NEXT_PUBLIC_SITE_URL` - Your site URL (default: `https://stevenalanwilson.com`)

**Optional (Sentry Error Tracking):**

- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN for error tracking
- `NEXT_PUBLIC_SENTRY_ENVIRONMENT` - Environment (e.g., `production`)
- `SENTRY_ORG` - Sentry organization
- `SENTRY_PROJECT` - Sentry project name
- `SENTRY_AUTH_TOKEN` - Sentry auth token

The application works perfectly without Sentry configured.

---

## Architecture & Features

### Technology Stack

**Core Framework:**

- **Next.js 16.1.1** - React framework with SSG/SSR
- **React 19.2.3** - Latest React with enhanced features
- **Node.js 22.x** - Runtime environment

**Styling:**

- **Tailwind CSS 3.4.6** - Utility-first CSS framework
- **CSS Custom Properties** - Dynamic theming system
- **PostCSS** - CSS processing pipeline

**Content Management:**

- **Gray-matter** - YAML frontmatter parsing
- **Unified/Remark/Rehype** - Markdown processing pipeline
- **Security-hardened** - Slug validation and path traversal protection

**Quality & Monitoring:**

- **Jest 30.2.0** - Testing framework with 256 tests
- **ESLint** - Code linting with accessibility rules
- **Prettier** - Code formatting
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking (optional)

### Project Structure

```
Saw-Limited/
├── components/          # React components
│   ├── layout/         # Header, Footer, Sidebar, Layout
│   ├── cards/          # Contact, Stats, Experience, Author
│   ├── content/        # Post, ListPosts, PageHero
│   ├── features/       # ExpertiseGrid, ServicesList
│   ├── ui/             # SEO, NavigationMenu, Breadcrumbs
│   └── error/          # ErrorBoundary
├── config/             # Configuration files
│   ├── siteConfig.js   # Single source of truth for site content
│   ├── articleThemes.js # Theme system (light/dark)
│   └── icons.js        # FontAwesome imports (tree-shakeable)
├── pages/              # Next.js file-based routing
│   ├── _app.js        # App wrapper
│   ├── index.js       # Homepage
│   ├── about.js       # About page
│   ├── 404.js         # Custom 404
│   └── post/[slug].js # Dynamic blog posts
├── posts/              # Blog post markdown files
├── public/             # Static assets
│   ├── image/         # Images
│   └── static/        # CSS, fonts, etc.
├── services/           # Utility services
│   └── getMarkdownService.js # Markdown loading
├── tests/              # 256 tests (all passing)
└── scripts/            # Build scripts
    └── generate-sitemap.js
```

### Key Features

- **Static Site Generation (SSG)** - Blazing fast page loads
- **Dynamic Theming** - Light/dark themes per blog post
- **Markdown Blog** - Write posts in markdown with frontmatter
- **SEO Optimized** - Automatic sitemap, meta tags, Open Graph
- **Fully Tested** - 256 tests with comprehensive coverage
- **Type Safe** - JSDoc annotations for IntelliSense
- **Security Hardened** - CSP, HSTS, input validation
- **Performance Optimized** - Aggressive caching, code splitting
- **Accessible** - WCAG compliant with a11y linting

---

## Configuration

### Site Configuration - Single Source of Truth

All site content is centralized in **`config/siteConfig.js`**. Update this file to change site-wide content.

**Configuration Sections:**

- `app` - Application metadata (version, environment)
- `site` - Site metadata (name, title, URL, description)
- `owner` - Owner information (name, title, experience)
- `contact` - Contact details (phone, email, locations)
- `social` - Social media links (LinkedIn, Twitter, Facebook)
- `stats` - Professional statistics
- `content` - Site content sections (hero, CTA, bio)
- `expertise` - Expertise areas
- `experience` - Work experience
- `services` - Services offered
- `navigation` - Menu items

**Quick Updates:**

```javascript
// config/siteConfig.js

// Update your job title
owner: {
  title: 'Your New Title'
}

// Update contact email
contact: {
  email: {
    user: 'hello',
    domain: 'yoursite.com'
  }
}

// Add navigation menu items
navigation: {
  main: [
    { label: 'Home', href: '/', title: 'Home' },
    { label: 'New Page', href: '/new', title: 'New Page' }
  ]
}
```

Changes automatically propagate to all components using the config.

---

## Development

### Available Scripts

**Development:**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
```

**Testing:**

```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:upSnap  # Update test snapshots
```

**Code Quality:**

```bash
npm run lint         # Check for linting issues
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format all code with Prettier
npm run format:check # Check if code is formatted
```

**Performance & Analysis:**

```bash
npm run analyze      # Analyze bundle size
npm run sitemap      # Generate sitemap
```

### Local Development Workflow

1. **Make changes** to components, pages, or config
2. **Test locally** with `npm run dev`
3. **Run tests** with `npm test`
4. **Check linting** with `npm run lint`
5. **Format code** with `npm run format`
6. **Commit** - Pre-commit hooks run automatically
7. **Push** - CI runs all quality checks

### Pre-commit Hooks

Automatic quality checks run on every commit using **Husky** and **lint-staged**:

**On `git commit`, the following run automatically:**

1. **Prettier** - Formats code
2. **ESLint** - Fixes linting issues
3. **Jest** - Runs tests for changed files

If checks fail, the commit is blocked until issues are resolved.

**Skip hooks (not recommended):**

```bash
git commit --no-verify -m "Emergency fix"
```

---

## Testing

### Test Coverage

- **256 tests** - All passing
- **30 test suites** - Organized by component/service
- **4 snapshot tests** - UI consistency checks
- **Comprehensive coverage** - Components, services, edge cases

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (reruns on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage

# Update snapshots
npm run test:upSnap
```

### Test Structure

- **Component Tests** - Unit tests for all React components
- **Edge Case Tests** - Tests for null/undefined/empty values
- **Service Tests** - Tests for utility functions and services
- **Snapshot Tests** - UI regression testing

### Type Safety

**JSDoc Annotations:**
All code includes comprehensive JSDoc annotations for type safety without TypeScript overhead.

**Benefits:**

- IntelliSense & autocomplete in VS Code
- Inline documentation on hover
- Type checking during development
- No build step required

**PropTypes:**
All 25+ components include PropTypes for runtime validation in development.

---

## Code Quality

### ESLint Configuration

Enhanced linting with:

- **Accessibility rules** (jsx-a11y)
- **React best practices** - PropTypes, self-closing components
- **Code quality rules** - No unused variables, prefer const
- **Next.js specific rules** - Image optimization, security

**Current Status:**

- 0 errors
- 11 warnings (acceptable - mostly dynamic props and test files)
- 76% reduction in warnings from enhanced rules

### Prettier Configuration

Automatic code formatting ensures consistency:

- Single quotes for strings
- No semicolons
- 2 space indentation
- 100 character line width
- Trailing commas (ES5)

### IDE Configuration

The project includes `jsconfig.json` for:

- Module resolution with `@/` prefix
- JSX support in `.js` files
- Type checking options
- Path mappings for cleaner imports

---

## Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel:

1. **Import repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Automatic on push to `master`

**Configuration:**

- Framework: Next.js
- Node.js: 22.x
- Build command: `npm run build`
- Output directory: `.next`

### Continuous Integration (CI)

GitHub Actions runs on every push and PR:

**Quality Checks:**

- Code formatting (Prettier)
- ESLint (0 errors required)
- Tests (256 tests)
- Coverage reporting (optional Codecov)

**Build Verification:**

- Production build
- Build output validation
- Only runs if quality checks pass

**Bundle Analysis (PR only):**

- Bundle size analysis
- Artifact upload (7-day retention)

**Local CI Simulation:**

```bash
npm run format:check  # Check formatting
npm run lint          # Check linting
npm test              # Run tests
npm run build         # Build production bundle
```

### Monorepo Deployment

See [MONOREPO-SETUP.md](./MONOREPO-SETUP.md) for deploying multiple sites from a single repository.

---

## Performance

### Bundle Analysis

Analyze bundle composition and identify optimization opportunities:

```bash
npm run analyze
```

Generates interactive HTML reports:

- `client.html` - Client-side JavaScript breakdown
- `server.html` - Server-side bundle analysis
- `edge.html` - Edge runtime bundle analysis

**Current Performance:**

- **Shared bundles:** 105 kB (Framework + Main)
- **Homepage:** 139 kB total (4.93 kB page-specific)
- **About:** 132 kB total (2.06 kB page-specific)
- **Blog posts:** 170 kB total (2.45 kB page-specific)

**Optimization Status:**

- Excellent code splitting (page-specific bundles < 5 kB)
- Good overall bundle sizes (130-171 kB)
- Shared code properly extracted

### Caching Strategy

Aggressive caching optimizes performance and reduces server load:

**Static Assets (1 year cache):**

- `/static/*` - Static files
- `/_next/static/*` - Next.js bundles
- `/_next/image/*` - Optimized images

**Dynamic Pages:**

- Homepage (`/`) - 5 min cache, revalidate 1 hour
- Blog posts (`/post/*`) - 1 hour cache, revalidate 24 hours
- Other pages - 10 min cache, revalidate 1 hour

**How it works:**

```
Cache-Control: public, max-age=X, stale-while-revalidate=Y
```

Serve stale content while revalidating in background for instant page loads.

### Image Optimization

Next.js automatic image optimization:

- AVIF and WebP formats
- Lazy loading
- Responsive images
- Automatic size optimization

---

## Security

### Security Headers

Configured in `next.config.js` and applied to all routes:

**HTTP Strict Transport Security (HSTS)**

- Forces HTTPS connections
- Prevents protocol downgrade attacks
- 1 year duration, includes subdomains

**Content Security Policy (CSP)**

- Prevents XSS attacks
- Restricts script execution to trusted sources
- Configured for Vercel Analytics and Sentry
- Key directives:
  - `default-src 'self'`
  - `script-src` - Allows trusted scripts
  - `style-src 'self' 'unsafe-inline'` - Tailwind requires inline styles
  - `img-src 'self' data: blob: https:`
  - `object-src 'none'` - Blocks plugins
  - `upgrade-insecure-requests`

**Permissions Policy**

- Disables camera, microphone, geolocation
- Opts out of FLoC tracking

**Additional Headers**

- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME-type sniffing
- `Referrer-Policy: origin-when-cross-origin`
- `X-Powered-By` removed - Hides server technology

### Application Security

**Input Validation & Sanitization:**

- All user inputs validated with `validator` library
- Slug validation: `/^[a-zA-Z0-9_-]+$/`
- HTML escaping to prevent XSS

**Path Traversal Protection:**

- Markdown file paths validated (see `services/getMarkdownService.js:27-38`)
- Prevents unauthorized file access

**Email Obfuscation:**

- Email addresses split into user/domain parts
- Assembled at runtime to prevent bot scraping

**Dependency Security:**

- CodeQL scanning via GitHub Actions (weekly)
- Automated vulnerability detection

**Environment Variable Protection:**

- `.env` files in `.gitignore`
- `.env.example` provided as template
- Sensitive keys never committed

### Security Testing

```bash
# Audit dependencies for vulnerabilities
npm audit

# Check security headers in production
curl -I https://yourdomain.com | grep -E "Content-Security-Policy|Strict-Transport"
```

### Reporting Security Issues

Please report security vulnerabilities privately rather than opening public issues.

---

## Theming

### Theme System

Dynamic theming using **CSS Custom Properties** and **Tailwind CSS**. Each blog post can have its own theme.

**Available Themes:**

- `light` - White background, black text (default)
- `dark` - Black background, white text

**Set theme in markdown frontmatter:**

```markdown
---
title: Your Blog Post Title
date: 2024-01-15
theme: dark
---

Your blog post content...
```

### How It Works

**1. Theme Configuration** (`config/articleThemes.js`)

- Defines color values for each theme
- Each theme: `primary`, `accent`, `background`, `text`

**2. CSS Variables** (`pages/post/[slug].js`)

- Sets CSS variables based on theme:
  ```javascript
  const themeStyles = {
    '--theme-primary': theme.primary,
    '--theme-accent': theme.accent,
    '--theme-bg': theme.background,
    '--theme-text': theme.text,
  }
  ```

**3. Tailwind Classes** (all components)

- Components use theme-aware classes:
  - `bg-theme-bg` - Background color
  - `text-theme-text` - Text color
  - `bg-theme-primary` - Primary color
  - `text-theme-accent` - Accent color

**4. Tailwind Configuration** (`tailwind.config.js`)

- Maps utilities to CSS variables:
  ```javascript
  colors: {
    'theme-primary': 'var(--theme-primary, #000000)',
    'theme-accent': 'var(--theme-accent, #666666)',
    'theme-bg': 'var(--theme-bg, #ffffff)',
    'theme-text': 'var(--theme-text, #000000)',
  }
  ```

### Adding a New Theme

```javascript
// config/articleThemes.js
export const articleThemes = {
  light: {
    /* existing */
  },
  dark: {
    /* existing */
  },
  sepia: {
    name: 'Sepia',
    primary: '#704214',
    accent: '#8b6914',
    background: '#f4ecd8',
    text: '#3e2723',
  },
}
```

Use in markdown:

```markdown
---
theme: sepia
---
```

No component changes needed - the CSS variable system handles everything automatically.

---

## Monorepo Setup

This repository can be converted to a monorepo supporting multiple sites with a shared master theme.

See **[MONOREPO-SETUP.md](./MONOREPO-SETUP.md)** for complete documentation on:

- Architecture strategy
- Repository structure
- NPM workspaces configuration
- Vercel deployment for multiple projects
- Development workflow
- Migration checklist

**Quick Overview:**

- **Master theme** cascades updates to child sites
- **90% code sharing** with site-specific customization
- **Independent deployments** to different domains
- **Shared testing** maintains quality across sites
- **Vercel native support** for monorepo deployments

---

## Project Stats

- **256 tests** - Comprehensive test coverage
- **25+ components** - All with PropTypes and JSDoc
- **0 linting errors** - High code quality
- **Node.js 22.x** - Latest LTS
- **Next.js 16.1.1** - Latest framework version
- **React 19.2.3** - Latest React

---

## License

Private repository - All rights reserved.

---

## Support

For questions or issues:

1. Review this documentation
2. Check [MONOREPO-SETUP.md](./MONOREPO-SETUP.md) for multi-site setup
3. Review GitHub issues
4. Check deployment logs (Vercel dashboard)

---

**Built with Next.js, React, and Tailwind CSS**

Last updated: 2025-12-28
