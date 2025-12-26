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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run sitemap` - Generate sitemap

## Testing

Run the test suite:
```bash
npm test
```

## Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically run quality checks before each commit. This ensures code quality and prevents broken code from being committed.

### What Runs Automatically

When you run `git commit`, the following checks run automatically on staged files:

**For JavaScript/JSX files (`.js`, `.jsx`):**
1. **ESLint** - Automatically fixes linting issues
2. **Jest** - Runs tests related to the changed files

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

**You should update `config/siteConfig.js` directly** rather than editing these files.

### Benefits

✅ **Update once, reflect everywhere** - Change your job title in one place
✅ **No more hunting** - All content in one organized file
✅ **Type-safe** - Clear structure prevents errors
✅ **Easy maintenance** - New developers know exactly where to find config
✅ **Version control friendly** - See all content changes in one file
