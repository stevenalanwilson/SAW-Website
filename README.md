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
