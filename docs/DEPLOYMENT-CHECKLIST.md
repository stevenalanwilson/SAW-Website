# Deployment Checklist

A comprehensive pre-deployment checklist for stevenalanwilson.com to ensure quality, security, and performance standards are met before going live.

## Table of Contents

- [Pre-Deployment Overview](#pre-deployment-overview)
- [Phase 1: Code Quality](#phase-1-code-quality)
- [Phase 2: Security](#phase-2-security)
- [Phase 3: Performance](#phase-3-performance)
- [Phase 4: SEO & Accessibility](#phase-4-seo--accessibility)
- [Phase 5: Environment & Configuration](#phase-5-environment--configuration)
- [Phase 6: Build & Test](#phase-6-build--test)
- [Phase 7: Final Checks](#phase-7-final-checks)
- [Post-Deployment](#post-deployment)

---

## Pre-Deployment Overview

This checklist should be completed before every production deployment. Mark each item as complete before proceeding to deployment.

**Target Platform:** Vercel
**Node Version:** 22.x
**Framework:** Next.js 16.1.1
**Build Type:** Static Site Generation (SSG)

---

## Phase 1: Code Quality

### Linting & Formatting

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run format:check` - all files formatted
- [ ] Run `npm run type-check` - no TypeScript errors
- [ ] Fix any ESLint warnings (optional but recommended)

**Commands:**
```bash
npm run lint
npm run format:check
npm run type-check
```

### Testing

- [ ] All tests passing: `npm test`
- [ ] Test coverage meets minimum threshold (>90%)
- [ ] No skipped or pending tests (.skip, .todo)
- [ ] Edge cases covered for critical components
- [ ] Snapshot tests updated if UI changed

**Commands:**
```bash
npm test
npm run test:coverage
```

**Coverage Thresholds:**
- Statements: >90%
- Branches: >85%
- Functions: >85%
- Lines: >90%

### Code Review

- [ ] All changes peer reviewed (if team workflow)
- [ ] No commented-out code blocks
- [ ] No console.log statements (except in error handlers)
- [ ] No TODO/FIXME comments for critical issues
- [ ] Component documentation updated in `docs/COMPONENTS.md`

---

## Phase 2: Security

### Content Security Policy

- [ ] CSP headers configured in `next.config.js`
- [ ] Production CSP removes `'unsafe-eval'` and `'unsafe-inline'`
- [ ] All external resources whitelisted
- [ ] Verify CSP with: https://csp-evaluator.withgoogle.com/

**Check CSP Configuration:**
```javascript
// Verify in next.config.js that production CSP is strict
const isDev = process.env.NODE_ENV !== 'production'
```

### Environment Variables

- [ ] No secrets in source code
- [ ] `.env.local` not committed to git
- [ ] All required env vars set in deployment platform
- [ ] Verify `.env.example` is up to date
- [ ] Sentry DSN configured (if using error tracking)

**Required Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://stevenalanwilson.com
```

**Optional Environment Variables:**
```
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
SENTRY_ORG=
SENTRY_PROJECT=
SENTRY_AUTH_TOKEN=
```

### Dependencies

- [ ] Run `npm audit` - no high/critical vulnerabilities
- [ ] All dependencies up to date (or documented exceptions)
- [ ] No unused dependencies in package.json
- [ ] Verify lockfile is committed (package-lock.json)

**Commands:**
```bash
npm audit
npm outdated
```

### Input Validation

- [ ] All user inputs validated (slug, email, etc.)
- [ ] Path traversal protection implemented
- [ ] HTML sanitization in place for user content
- [ ] URL validation requires HTTPS in production

**Key Security Files to Review:**
- `utils/validation.ts`
- `utils/security.ts`
- `services/getMarkdownService.ts`

---

## Phase 3: Performance

### Build Optimization

- [ ] Production build completes successfully
- [ ] Build warnings addressed or documented
- [ ] No console errors during build
- [ ] Static pages generated correctly
- [ ] Sitemap generated: `public/sitemap.xml`

**Commands:**
```bash
npm run build
```

### Bundle Size

- [ ] Run bundle analyzer: `npm run analyze`
- [ ] Main bundle < 250KB (gzipped)
- [ ] No duplicate dependencies in bundle
- [ ] Code splitting working for routes
- [ ] Images optimized (WebP, correct sizes)

**Commands:**
```bash
npm run analyze
```

**Bundle Size Targets:**
- First Load JS: < 250KB
- Total JS: < 500KB (all routes)

### Assets

- [ ] All images have alt text
- [ ] Images served in next-gen formats (WebP)
- [ ] Fonts optimized and self-hosted
- [ ] CSS optimized and minified
- [ ] No unused CSS in production

### Caching

- [ ] Static assets have cache headers
- [ ] API routes have appropriate cache policies
- [ ] Service worker configured (if applicable)

---

## Phase 4: SEO & Accessibility

### SEO

- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] Canonical URLs set correctly
- [ ] Robots.txt configured
- [ ] Sitemap.xml generated and accessible
- [ ] Structured data (JSON-LD) added to key pages
- [ ] 404 page customized

**Test URLs:**
- `/sitemap.xml` - accessible
- `/robots.txt` - accessible
- Test Open Graph: https://www.opengraph.xyz/

**Key SEO Files:**
- `components/seo/SEO.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

### Accessibility

- [ ] Color contrast ratios meet WCAG AA (4.5:1)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all interactive elements
- [ ] All images have alt attributes
- [ ] Semantic HTML used throughout
- [ ] ARIA labels on icon buttons
- [ ] Form inputs have labels
- [ ] Page language set: `<html lang="en">`

**Testing Tools:**
- Chrome DevTools Lighthouse
- WAVE browser extension
- axe DevTools

**Accessibility Targets:**
- Lighthouse Accessibility Score: >95
- No WAVE errors
- Keyboard navigation: 100% functional

---

## Phase 5: Environment & Configuration

### Vercel Configuration

- [ ] Project linked to correct repository
- [ ] Production domain configured: stevenalanwilson.com
- [ ] Environment variables set in Vercel dashboard
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next` (default)
- [ ] Install command: `npm ci`
- [ ] Node.js version: 22.x

### Domain & SSL

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] HTTPS redirect enabled
- [ ] www redirect configured (if applicable)
- [ ] DNS records verified

### Error Tracking

- [ ] Sentry project created (if using)
- [ ] Sentry DSN configured in environment
- [ ] Source maps uploaded to Sentry (optional)
- [ ] Error boundary tested
- [ ] Test error reporting in staging

---

## Phase 6: Build & Test

### Local Build Test

- [ ] Clean install: `rm -rf node_modules package-lock.json && npm install`
- [ ] Build succeeds: `npm run build`
- [ ] Start production server: `npm start`
- [ ] Test all routes in production mode
- [ ] No console errors in browser
- [ ] All static assets load correctly

**Commands:**
```bash
# Clean build test
rm -rf .next
npm run build
npm start
# Test at http://localhost:3000
```

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Testing

- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Large desktop (1920px+)

### Lighthouse Scores

Run Lighthouse audit in production mode (incognito):

- [ ] Performance: >90
- [ ] Accessibility: >95
- [ ] Best Practices: >95
- [ ] SEO: >95

**Command:**
```bash
# In Chrome DevTools > Lighthouse
# Select: Performance, Accessibility, Best Practices, SEO
# Mode: Navigation (Desktop & Mobile)
```

---

## Phase 7: Final Checks

### Content Review

- [ ] All placeholder content replaced
- [ ] Contact information accurate
- [ ] Social media links working
- [ ] Email links use mailto: protocol
- [ ] Phone numbers formatted correctly
- [ ] Location information current
- [ ] Copyright year current

### Functionality

- [ ] All internal links working
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] Navigation menu works on all pages
- [ ] Footer displays correctly
- [ ] Contact forms functional (if applicable)
- [ ] Error pages (404, 500) display correctly

### Git & Version Control

- [ ] All changes committed
- [ ] Commit messages clear and descriptive
- [ ] Branch merged to main/master
- [ ] Version tag created (if using semantic versioning)
- [ ] No uncommitted changes: `git status`

**Commands:**
```bash
git status
git log --oneline -5
```

### Documentation

- [ ] README.md updated
- [ ] CHANGELOG.md updated (if applicable)
- [ ] Component documentation current
- [ ] Environment variables documented in .env.example
- [ ] Deployment notes added (if special steps required)

---

## Post-Deployment

### Immediate Verification (within 15 minutes)

- [ ] Production site loads: https://stevenalanwilson.com
- [ ] SSL certificate valid (green padlock)
- [ ] All pages accessible
- [ ] No console errors in production
- [ ] Forms submit correctly (if applicable)
- [ ] Analytics tracking verified
- [ ] Sentry receiving events (if configured)

### Monitoring (within 24 hours)

- [ ] Check Vercel deployment logs
- [ ] Monitor Sentry for new errors
- [ ] Review Google Search Console
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Verify sitemap indexed by Google

### Performance Baseline

Document baseline metrics for future comparison:

- [ ] Lighthouse Performance score: ____
- [ ] First Contentful Paint (FCP): ____ ms
- [ ] Largest Contentful Paint (LCP): ____ ms
- [ ] Time to Interactive (TTI): ____ ms
- [ ] Cumulative Layout Shift (CLS): ____
- [ ] Total Blocking Time (TBT): ____ ms

### Rollback Plan

- [ ] Previous deployment available in Vercel
- [ ] Know how to rollback: Vercel Dashboard > Deployments > Redeploy
- [ ] Database backup (if applicable)
- [ ] DNS records documented

---

## Quick Reference Commands

### Pre-Deployment Commands
```bash
# Full quality check
npm run lint && npm run format:check && npm run type-check && npm test

# Build and start production
npm run build && npm start

# Security audit
npm audit

# Bundle analysis
npm run analyze
```

### Deployment Checklist Commands
```bash
# 1. Code Quality
npm run lint
npm run format:check
npm run type-check
npm test

# 2. Security
npm audit

# 3. Performance
npm run build
npm run analyze

# 4. Clean build test
rm -rf .next node_modules package-lock.json
npm install
npm run build
npm start
```

---

## Emergency Contacts

**Vercel Support:** https://vercel.com/support
**Sentry Support:** https://sentry.io/support (if using)
**Repository Issues:** https://github.com/dominion79/Saw-Front-End-App/issues

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-12-29 | Initial deployment checklist |

---

## Notes

- This checklist should be reviewed and updated quarterly
- Add project-specific items as needed
- Archive completed checklists for audit trail
- Customize for different deployment environments (staging, production)

**Last Updated:** 2025-12-29
