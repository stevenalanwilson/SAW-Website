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

This project has comprehensive test coverage with **262 tests** across components, services, and edge cases.

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
- **262 total tests** - All passing
- **31 test suites** - Organized by component/service
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
      url: PropTypes.string
    })
  ),
  onClick: PropTypes.func
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

