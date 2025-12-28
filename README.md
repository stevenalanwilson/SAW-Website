# Saw-Front-End-App

The front end application for stevenalanwilson.com

## Getting Started

### Prerequisites

- Node.js 22.x
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and configure environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

See `.env.example` for all available environment variables.

### Required

- `NEXT_PUBLIC_SITE_URL` - Your site URL (defaults to https://stevenalanwilson.com)

### Optional - Sentry Error Tracking

Sentry integration is optional. To enable error tracking:

1. Create a free account at [sentry.io](https://sentry.io)
2. Create a new Next.js project in Sentry
3. Copy your DSN from Project Settings → Client Keys
4. Add to your `.env.local`:
   ```
   NEXT_PUBLIC_SENTRY_DSN=your_dsn_here
   NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
   ```

For source map uploading (optional):

```
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_auth_token
```

**Note:** The application works perfectly fine without Sentry configured. Error tracking is completely optional.

## Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

### Testing

- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:upSnap` - Update test snapshots

### Code Quality

- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format all code with Prettier
- `npm run format:check` - Check if code is formatted

### Performance & Analysis

- `npm run analyze` - Analyze bundle size with interactive visualizations
- `npm run sitemap` - Generate sitemap

## Testing

This project has comprehensive test coverage with **256 tests** across components, services, and edge cases.

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

### Test Statistics

- **256 total tests** - All passing
- **30 test suites** - Organized by component/service
- **4 snapshot tests** - UI consistency checks

## Code Quality & Linting

### ESLint Configuration

Enhanced ESLint setup with:

- **Accessibility rules** (jsx-a11y) - Catch accessibility issues early
- **React best practices** - PropTypes validation, self-closing components
- **Code quality rules** - Unused variables, prefer const, no var
- **Next.js specific rules** - Image optimization, security best practices

### Running Linters

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Current Status

- ✅ **0 errors**
- ⚠️ **11 warnings** (acceptable - mostly dynamic props and test files)
- 76% reduction in warnings from enhanced linting rules

## Code Formatting

### Prettier Configuration

Automatic code formatting with Prettier ensures consistent style across the entire codebase.

**Configuration:**

- Single quotes for strings
- No semicolons
- 2 space indentation
- 100 character line width
- Trailing commas (ES5)

### Formatting Commands

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

## Type Safety with JSDoc

This project uses **JSDoc annotations** to provide type safety and improve developer experience without the overhead of TypeScript. JSDoc enables IDE autocomplete, inline documentation, and compile-time type checking in compatible editors.

### Benefits

✅ **IntelliSense & Autocomplete** - VS Code and other IDEs provide better suggestions
✅ **Inline Documentation** - Hover over functions to see parameters and return types
✅ **Type Safety** - Catch type errors during development
✅ **No Build Step** - Unlike TypeScript, no compilation required
✅ **Self-Documenting Code** - Function signatures are clear and explicit

### Coverage

All code has comprehensive JSDoc annotations:

- ✅ **25+ React Components** - Full prop type documentation
- ✅ **Services & Utilities** - Function signatures with examples
- ✅ **Configuration Files** - Type definitions for config objects
- ✅ **Complex Types** - Custom `@typedef` declarations for data structures

### Example

```javascript
/**
 * Contact card component displaying contact information with different visual variants.
 * Shows operating areas, LinkedIn profile, and email contact methods.
 *
 * @param {Object} props - Component props
 * @param {'card' | 'inline'} [props.variant='card'] - Visual variant of the contact card
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered contact card component
 */
export default function ContactCard({ variant = 'card', className = '' }) {
  // Component implementation...
}
```

### IDE Configuration

The project includes a `jsconfig.json` file that configures:

- Module resolution (import aliases with `@/` prefix)
- JSX support in `.js` files
- Type checking options
- Path mappings for cleaner imports

### Using JSDoc in Your IDE

**VS Code:**

- Hover over any function/component to see full documentation
- Get autocomplete suggestions for props and parameters
- See inline errors for type mismatches

**WebStorm/IntelliJ:**

- Full JSDoc support built-in
- Quick documentation popup (Ctrl+Q / ⌘J)
- Type checking in JavaScript files

## Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically run quality checks before each commit. This ensures code quality and prevents broken code from being committed.

### What Runs Automatically

When you run `git commit`, the following checks run automatically on staged files:

**For JavaScript/JSX files (`.js`, `.jsx`):**

1. **Prettier** - Automatically formats code
2. **ESLint** - Automatically fixes linting issues
3. **Jest** - Runs tests related to the changed files

### How It Works

```bash
# Stage your changes
git add .

# Commit (hooks run automatically)
git commit -m "Your commit message"

# If checks pass, commit succeeds
# If checks fail, commit is blocked and you see the errors
```

### Benefits

✅ **Catch errors early** - Find bugs before they reach the repository
✅ **Consistent code style** - Auto-format code on commit
✅ **Faster CI/CD** - Fewer failed builds in CI
✅ **No manual steps** - Quality checks happen automatically

### Skipping Hooks (Not Recommended)

In rare cases where you need to skip the hooks:

```bash
git commit --no-verify -m "Your message"
```

**Note:** Only use `--no-verify` in emergencies. The hooks are there to help maintain code quality.

### Configuration

Pre-commit hooks are configured in:

- `.husky/pre-commit` - Hook entry point
- `package.json` - `lint-staged` configuration

To modify what runs on commit, edit the `lint-staged` section in `package.json`.

## Continuous Integration (CI)

This project uses **GitHub Actions** to automatically run quality checks on every push and pull request. This ensures code quality and catches issues before they reach production.

### CI Workflow

The CI pipeline runs three parallel jobs:

**1. Quality Checks**

- ✅ **Code Formatting** - Verifies all code is formatted with Prettier
- ✅ **ESLint** - Checks for linting issues (0 errors required to pass)
- ✅ **Tests** - Runs all 262 tests with coverage reporting
- ✅ **Coverage Upload** - Optionally uploads coverage to Codecov

**2. Build Verification**

- ✅ **Production Build** - Ensures the app builds successfully
- ✅ **Build Output Check** - Verifies .next directory exists
- ✅ **Dependency on Quality** - Only runs if quality checks pass

**3. Bundle Analysis (PR only)**

- ✅ **Bundle Size Analysis** - Generates bundle reports for PRs
- ✅ **Artifact Upload** - Uploads analysis to GitHub artifacts
- ✅ **7-day Retention** - Reports available for review

### Viewing CI Results

**On GitHub:**

1. Navigate to your repository
2. Click the "Actions" tab
3. Select a workflow run to see detailed results
4. Download bundle analysis artifacts from PR checks

**Status Badges:**

Add to your README to show CI status:

```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
```

### CI Configuration

The CI workflow is configured in `.github/workflows/ci.yml`:

- **Node Version:** 22.x
- **Triggers:** Push to master/main, Pull requests
- **Cache:** npm dependencies cached for faster runs
- **Environment:** Ubuntu latest

### Optional: Codecov Integration

To enable code coverage tracking:

1. Sign up at [codecov.io](https://codecov.io)
2. Connect your GitHub repository
3. Add `CODECOV_TOKEN` to your GitHub repository secrets
4. Coverage reports will automatically upload on each CI run

**Note:** CI runs successfully without Codecov - it's completely optional.

### Local CI Simulation

Test the CI pipeline locally before pushing:

```bash
# Run all CI checks locally
npm run format:check  # Check formatting
npm run lint          # Check linting
npm test              # Run tests
npm run build         # Build production bundle
```

All checks must pass for CI to succeed!

## Security

This application implements multiple layers of security to protect against common web vulnerabilities. Security headers are configured in `next.config.js` and applied to all routes.

### Security Headers

**HTTP Strict Transport Security (HSTS)**

- Forces browsers to use HTTPS connections only
- Prevents protocol downgrade attacks
- Applies to all subdomains for 1 year
- Header: `Strict-Transport-Security: max-age=31536000; includeSubDomains`

**Content Security Policy (CSP)**

- Prevents XSS attacks by controlling which resources can be loaded
- Restricts script execution to trusted sources
- Blocks inline scripts except where explicitly allowed
- Configured for Vercel Analytics and Sentry integration
- Key directives:
  - `default-src 'self'` - Only load resources from same origin by default
  - `script-src` - Allows scripts from self, Vercel, and required inline scripts
  - `style-src 'self' 'unsafe-inline'` - Allows styles (Tailwind requires inline)
  - `img-src 'self' data: blob: https:` - Allows images from various sources
  - `object-src 'none'` - Blocks plugins like Flash
  - `upgrade-insecure-requests` - Automatically upgrades HTTP to HTTPS

**Permissions Policy**

- Restricts browser features to prevent abuse
- Disabled features:
  - `camera=()` - No camera access
  - `microphone=()` - No microphone access
  - `geolocation=()` - No location tracking
  - `interest-cohort=()` - Opts out of FLoC tracking

**Additional Security Headers**

- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking attacks
- `X-Content-Type-Options: nosniff` - Prevents MIME-type sniffing
- `Referrer-Policy: origin-when-cross-origin` - Controls referrer information
- `X-Powered-By` header removed - Hides server technology

### Application Security Features

**Input Validation & Sanitization**

- All user inputs validated with `validator` library
- Slug validation with regex whitelist: `/^[a-zA-Z0-9_-]+$/`
- HTML escaping to prevent XSS attacks

**Path Traversal Protection**

- Markdown file paths validated against allowed directory
- Prevents unauthorized file access
- See `services/getMarkdownService.js:27-38`

**Email Obfuscation**

- Email addresses split into user/domain parts
- Assembled at runtime to prevent bot scraping
- See `config/siteConfig.js:8-11`

**Dependency Security**

- CodeQL scanning via GitHub Actions (weekly)
- Automated vulnerability detection
- No known security issues in dependencies

**Environment Variable Protection**

- `.env` files in `.gitignore`
- `.env.example` provided as template
- Sensitive keys never committed to repository

### Security Best Practices

When extending this application:

1. Never disable CSP or security headers
2. Validate and sanitize all user inputs
3. Use parameterized queries for databases (if added)
4. Keep dependencies updated regularly
5. Review security advisories via `npm audit`
6. Never commit secrets or API keys
7. Use environment variables for sensitive configuration

### Testing Security

```bash
# Audit dependencies for vulnerabilities
npm audit

# Check security headers in production
curl -I https://yourdomain.com | grep -E "Content-Security-Policy|Strict-Transport"

# Run CodeQL analysis (via GitHub Actions)
# Triggered automatically on push to master
```

### Reporting Security Issues

If you discover a security vulnerability, please report it privately rather than opening a public issue.

## Performance - Caching Strategy

This project uses aggressive caching strategies to optimize performance and reduce server load. Caching headers are configured in `next.config.js`.

### Caching Rules

**Static Assets (1 year cache):**

- `/static/*` - Your static files (images, fonts, etc.)
- `/_next/static/*` - Next.js JavaScript/CSS bundles
- `/_next/image/*` - Optimized images

**Dynamic Pages:**

- **Homepage** (`/`) - 5 minutes cache, revalidate in background for 1 hour
- **Blog Posts** (`/post/*`) - 1 hour cache, revalidate in background for 24 hours
- **Other Pages** - 10 minutes cache, revalidate in background for 1 hour

### How It Works

```
Cache-Control: public, max-age=X, stale-while-revalidate=Y
```

- `max-age=X` - Content is fresh for X seconds
- `stale-while-revalidate=Y` - Serve stale content while revalidating in background for Y seconds
- `immutable` - Content never changes (static assets only)

### Benefits

✅ **Faster page loads** - Assets cached in browser and CDN
✅ **Reduced bandwidth** - Static files served from cache
✅ **Better UX** - Background revalidation keeps content fresh without waiting
✅ **Lower server costs** - Fewer requests hit your server

### Clearing Cache

If you need to clear the cache after a deployment:

1. Static assets auto-bust via Next.js build hash
2. Pages refresh automatically after `max-age` expires
3. Force refresh: Hold Shift and click reload in browser

## Bundle Analysis & Performance

### Analyzing Your Bundle

This project includes **@next/bundle-analyzer** for visualizing bundle composition and identifying optimization opportunities.

```bash
# Generate interactive bundle visualizations
npm run analyze
```

This will:

1. Build your production bundle
2. Generate three interactive HTML reports in `.next/analyze/`:
   - `client.html` - Client-side JavaScript bundle breakdown
   - `server.html` - Server-side bundle analysis
   - `edge.html` - Edge runtime bundle analysis
3. Automatically open the reports in your browser

### Current Bundle Performance

**Shared Bundles:**

- Framework: 59.7 kB (React 19 + Next.js 15)
- Main: 36.7 kB (Application code)
- Other shared: 9.05 kB
- **Total shared: 105 kB**

**Page Bundles (including shared):**

- Homepage: 139 kB (4.93 kB page-specific)
- About: 132 kB (2.06 kB page-specific)
- Blog posts: 170 kB (2.45 kB page-specific)
- Components: 171 kB (3.67 kB page-specific)

### Optimization Insights

✅ **Excellent code splitting** - Page-specific bundles are very small (< 5 kB)
✅ **Good bundle sizes** - Total initial load is reasonable (130-171 kB)
✅ **Shared code extraction** - Common code properly extracted to shared bundles

**Future optimization opportunities:**

- Dynamic imports for heavy page-specific components
- Tree-shake unused FontAwesome icons
- Optimize markdown parser imports

## Type Safety

### PropTypes Coverage

All components include **PropTypes** for runtime type validation in development:

- ✅ **25 components** with PropTypes
- ✅ **4 page components** with PropTypes
- ✅ **Comprehensive validation** including nested object shapes

**Benefits:**

- Catch prop type errors in development
- Self-documenting component APIs
- Better IDE autocomplete
- Safer refactoring

### Example PropTypes

```javascript
Component.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
}
```

## Site Configuration - Single Source of Truth

All site content, metadata, and configuration is centralized in `config/siteConfig.js`. This provides a **single source of truth** for your entire site, making updates quick and consistent across all components.

### Configuration Structure

```javascript
siteConfig
├── app              // Application metadata
├── site             // Site metadata (name, title, url, description)
├── owner            // Owner information (name, title, experience)
├── contact          // Contact details (phone, email, locations)
├── social           // Social media links (LinkedIn, Twitter, Facebook)
├── stats            // Professional statistics
├── copyright        // Copyright information
├── content          // Site content sections
│   ├── authorBio    // Author bio for blog posts
│   ├── hero         // Homepage hero content
│   └── cta          // Call-to-action messaging
└── navigation       // Menu items
```

### How to Update Site Content

#### Update Your Job Title

Edit one line in `config/siteConfig.js`:

```javascript
owner: {
  title: 'Your New Title Here'
}
```

This automatically updates:

- SiteTitle component (homepage hero)
- AuthorCard component (blog posts)
- All SEO metadata

#### Update Your Company/Role

```javascript
content: {
  hero: {
    currentRole: {
      position: 'Your Position',
      company: 'Company Name',
      companyUrl: 'https://company.com',
      location: 'City'
    }
  }
}
```

#### Add/Remove Previous Companies

```javascript
previousRoles: [
  { company: 'Company Name', url: 'https://company.com' },
  // Add more companies here
]
```

#### Update Navigation Menu

```javascript
navigation: {
  main: [
    { label: 'Home', href: '/', title: 'Home' },
    { label: 'New Page', href: '/new-page', title: 'New Page' },
    // Add more menu items here
  ]
}
```

#### Update Contact Information

```javascript
contact: {
  email: {
    user: 'hello',
    domain: 'yoursite.com'
  },
  locations: ['London', 'Manchester', 'Leeds']
}
```

#### Update Social Media Links

```javascript
social: {
  linkedin: {
    title: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/yourprofile/'
  }
}
```

### Legacy Configuration Files

For backward compatibility, the following files still exist but now import from `siteConfig.js`:

- `config.js` - Legacy config wrapper
- `config/footerContactInfo.js` - Footer contact data
- `config/footerCopyrightInfo.js` - Copyright data
- `config/sidebarData.js` - Sidebar data

## Theming System

This application uses a simple, maintainable theming system powered by **CSS Variables** and **Tailwind CSS**. Each blog post can have its own theme (light or dark) specified in the markdown frontmatter.

### Available Themes

The application supports two themes configured in `config/articleThemes.js`:

**Light Theme** (default)

- Background: White (#ffffff)
- Text: Black (#000000)
- Primary elements: Black (#000000)
- Accent/secondary: Dark grey (#666666)

**Dark Theme**

- Background: Black (#000000)
- Text: White (#ffffff)
- Primary elements: White (#ffffff)
- Accent/secondary: Medium grey (#999999)

### How to Set a Theme on a Blog Post

Add the `theme` property to your markdown file's frontmatter:

```markdown
---
title: Your Blog Post Title
date: 2024-01-15
theme: dark
---

Your blog post content here...
```

**Options:**

- `theme: 'light'` - White background with black text
- `theme: 'dark'` - Black background with white text
- No theme specified - Defaults to light theme

### How the Theming System Works

The theming system uses a CSS-variable-only approach for simplicity and maintainability:

**1. Theme Configuration** (`config/articleThemes.js`)

- Defines color values for each theme
- Each theme has: `primary`, `accent`, `background`, and `text` colors

**2. CSS Variables** (`pages/post/[slug].js`)

- When a blog post loads, CSS variables are set based on the theme:
  ```javascript
  const themeStyles = {
    '--theme-primary': theme.primary,
    '--theme-accent': theme.accent,
    '--theme-bg': theme.background,
    '--theme-text': theme.text,
  }
  ```
- These variables are applied to the Layout root element
- All child components inherit these CSS variables

**3. Tailwind CSS Classes** (all components)

- Components use Tailwind classes that reference CSS variables:
  - `bg-theme-bg` - Background color
  - `text-theme-text` - Text color
  - `bg-theme-primary` - Primary color (inverted from background)
  - `text-theme-accent` - Accent/secondary text color
  - `border-theme-text` - Border color matching text
  - `border-theme-primary` - Border color matching primary

**4. Tailwind Configuration** (`tailwind.config.js`)

- Maps Tailwind utilities to CSS variables:
  ```javascript
  colors: {
    'theme-primary': 'var(--theme-primary, #000000)',
    'theme-accent': 'var(--theme-accent, #666666)',
    'theme-bg': 'var(--theme-bg, #ffffff)',
    'theme-text': 'var(--theme-text, #000000)',
  }
  ```

### Architecture Benefits

✅ **No prop drilling** - Theme is set once at the Layout level via CSS variables
✅ **Simple components** - Components just use Tailwind classes, no theme logic
✅ **Automatic inheritance** - All children inherit CSS variables via normal CSS cascade
✅ **Easy to maintain** - Change theme colors in one place (`articleThemes.js`)
✅ **Type-safe** - Tailwind provides autocomplete for theme classes

### Adding a New Theme

To add a new theme (e.g., "sepia"):

1. **Add theme definition** to `config/articleThemes.js`:

   ```javascript
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

2. **Use in markdown frontmatter**:
   ```markdown
   ---
   theme: sepia
   ---
   ```

That's it! No component changes needed. The CSS variable system automatically applies the new theme.

### Customizing Theme Colors

Edit `config/articleThemes.js` to change theme colors:

```javascript
export const articleThemes = {
  light: {
    name: 'Light',
    primary: '#000000', // Change to any hex color
    accent: '#666666', // Change to any hex color
    background: '#ffffff', // Change to any hex color
    text: '#000000', // Change to any hex color
  },
  // ... other themes
}
```

Changes apply immediately to all pages using that theme.
