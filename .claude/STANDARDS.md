# Saw-Front-End-App - Coding Standards & Guidelines

This document defines the coding standards, architectural patterns, and best practices for the Saw-Front-End-App project.

## Table of Contents

1. [Code Quality](#code-quality)
2. [Component Architecture](#component-architecture)
3. [Styling Standards](#styling-standards)
4. [Type Safety](#type-safety)
5. [Testing Requirements](#testing-requirements)
6. [Accessibility](#accessibility)
7. [Performance](#performance)
8. [Security](#security)
9. [Documentation](#documentation)
10. [Git Workflow](#git-workflow)

---

## Code Quality

### Linting

- **ESLint**: Zero errors required, max 11 acceptable warnings
- **Run**: `npm run lint` before committing
- **Auto-fix**: `npm run lint:fix` for automatic corrections

### Formatting

- **Tool**: Prettier (automatically applied via pre-commit hooks)
- **Configuration**:
  - Single quotes (`'string'`)
  - No semicolons
  - 2 spaces indentation
  - 100 character line width
  - ES5 trailing commas
- **Run**: `npm run format` or `npm run format:check`

### Code Style

- **Variables**: Use `const` by default, `let` only when reassignment needed, never `var`
- **Functions**: Prefer arrow functions for callbacks, named functions for components
- **Destructuring**: Use destructuring for props and state
- **No console.log**: Remove before committing (except in error handlers)

---

## Component Architecture

### Component Structure

```javascript
import PropTypes from 'prop-types'
// External imports
// Local component imports
// Config imports

/**
 * JSDoc comment describing component
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default function ComponentName({ prop1, prop2 = 'default' }) {
  // Hooks (if any)
  // Event handlers
  // Derived state

  return <div>{/* JSX */}</div>
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
}
```

### File Organization

```
/components     - Reusable UI components
/pages         - Next.js pages (routes)
/config        - Configuration files (single source of truth)
/services      - Business logic and data processing
/utils         - Pure utility functions
/styles        - Global styles and theme
/public        - Static assets
/tests         - Test files mirroring component structure
```

### Naming Conventions

- **Components**: PascalCase (`ContactCard.js`)
- **Utilities**: camelCase (`randomQuote.js`)
- **Config**: camelCase (`siteConfig.js`)
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: kebab-case (Tailwind utilities)

### Component Patterns

1. **Functional Components**: Always use function components, not class components (except ErrorBoundary)
2. **Props Destructuring**: Destructure props in function signature with defaults
3. **PropTypes**: Always validate props
4. **Error Boundaries**: Wrap critical sections with `SectionErrorBoundary`
5. **Single Responsibility**: Each component should do one thing well

### Configuration Management

- **Single Source of Truth**: All site config in `config/siteConfig.js`
- **Legacy Exports**: Use legacy config files only for backward compatibility
- **Import Pattern**: Always import from `siteConfig.js` when possible

---

## Styling Standards

### Tailwind CSS

- **Primary Tool**: Use Tailwind utility classes exclusively
- **No inline styles**: Except for dynamic CSS custom properties
- **Theme Variables**: Use CSS custom properties for theming

### Theme CSS Variables

```css
--theme-bg        /* Background color */
--theme-text      /* Text color */
--theme-primary   /* Primary accent color */
--theme-accent    /* Secondary accent color */
```

**Usage in Tailwind**:

```jsx
<div className='bg-theme-bg text-theme-text'>
  <h1 className='text-theme-primary'>Title</h1>
  <p className='text-theme-accent'>Accent text</p>
</div>
```

### Responsive Design

- **Mobile-First**: Design for mobile, enhance for desktop
- **Breakpoints**: Use `lg:` prefix for desktop (1024px+)
- **Pattern**:
  ```jsx
  <div className="text-sm lg:text-xl">
    <!-- Mobile: small, Desktop: extra large -->
  </div>
  ```

### Spacing Patterns

- **Padding**: `p-2` (small), `p-4` (medium), `p-6` (large)
- **Margins**: `mx-4` (horizontal), `my-6` (vertical)
- **Consistent**: Use same spacing values throughout app

### Borders & Accents

- **Bottom border**: `border-b` or `border-b-2`
- **Top border**: `border-t` or `border-t-2`
- **Left accent**: `border-l-4` for highlight/emphasis
- **Theme aware**: `border-theme-bg`, `border-theme-primary`

### Semantic HTML

Always use semantic elements:

- `<header>` for site header
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for blog posts
- `<section>` for content sections
- `<aside>` for sidebar content
- `<footer>` for footer

---

## Type Safety

### JSDoc Annotations

All functions and components must have JSDoc comments.

#### Component Example:

```javascript
/**
 * Contact card component displaying contact information.
 *
 * @param {Object} props - Component props
 * @param {'card' | 'inline'} [props.variant='card'] - Visual variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} Rendered contact card component
 */
export default function ContactCard({ variant = 'card', className = '' }) {
  // ...
}
```

#### Utility Function Example:

```javascript
/**
 * Selects a random quote from an array.
 *
 * @param {string[]} quotes - Array of quote strings
 * @returns {string} A randomly selected quote
 * @example
 * const selected = randomQuote(['Quote 1', 'Quote 2'])
 */
const randomQuote = (quotes) => {
  // ...
}
```

#### Type Definitions:

```javascript
/**
 * @typedef {Object} Post
 * @property {string} postSlug - URL slug
 * @property {PostMetaData} postMetaData - Metadata
 */
```

### PropTypes

Always validate props with PropTypes:

```javascript
ComponentName.propTypes = {
  // Required props
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

  // Optional props
  className: PropTypes.string,
  isActive: PropTypes.bool,

  // Complex types
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),

  // Node (any renderable content)
  children: PropTypes.node,

  // Union types
  variant: PropTypes.oneOf(['card', 'inline']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
```

---

## Testing Requirements

### Test Coverage

- **All components** must have test files
- **Location**: `tests/components/[ComponentName].test.js`
- **Minimum tests**:
  1. Renders without crashing
  2. Displays all required props
  3. Uses default values correctly
  4. Handles edge cases (null, undefined, empty)

### Test Structure

```javascript
import React from 'react'
import { render, screen } from '@testing-library/react'
import ComponentName from '../../components/ComponentName'

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(<ComponentName requiredProp='value' />)
  })

  it('displays required props correctly', () => {
    render(<ComponentName title='Test Title' />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('handles null values gracefully', () => {
    render(<ComponentName items={null} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
})
```

### Testing Commands

- `npm test` - Run all tests
- `npm run test:watch` - Watch mode
- `npm run test:coverage` - Coverage report
- `npm run test:upSnap` - Update snapshots

### Test Quality

- **Descriptive names**: Use clear test descriptions
- **Arrange-Act-Assert**: Follow AAA pattern
- **Clean up**: Use `afterEach` to clean up
- **No test interdependencies**: Each test should be independent
- **Mock external dependencies**: Mock API calls, services

---

## Accessibility

### Requirements

All components must be accessible:

1. **Semantic HTML**: Use proper elements (`<button>` not `<div onClick>`)
2. **ARIA Labels**: Add to interactive elements without text
3. **Alt Text**: All images must have descriptive alt text
4. **Heading Hierarchy**: Follow h1 → h2 → h3 order
5. **Focus States**: Ensure keyboard navigation works
6. **Color Contrast**: WCAG AA minimum (4.5:1 for text)

### Examples

```jsx
// Good: Semantic button with aria-label
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="..."
>
  <CloseIcon aria-hidden="true" />
</button>

// Good: Image with alt text
<img src={src} alt="Steven Wilson speaking at tech conference" />

// Good: Navigation with aria-label
<nav aria-label="Main navigation">
  <ul>...</ul>
</nav>

// Good: Expandable menu
<button
  aria-expanded={isOpen}
  aria-label="Toggle menu"
>
  Menu
</button>
```

### Accessibility Linting

- ESLint `jsx-a11y` plugin catches common issues
- Run `npm run lint` to check

---

## Performance

### Image Optimization

- **Use Next.js Image**: Always use `next/image`, never `<img>`
- **Required props**: `width`, `height`, or `fill`
- **Formats**: WebP with fallback (automatic)
- **Lazy loading**: Enabled by default

```jsx
import Image from 'next/image'

// Fixed size
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>

// Fill container
<Image
  src="/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Bundle Optimization

- **Tree-shaking**: Import only what's needed
- **Dynamic imports**: Use `React.lazy()` for heavy components
- **Code splitting**: Automatic with Next.js page-based routing
- **Bundle analysis**: Run `npm run analyze` to check sizes

### React Performance

- **Avoid inline functions**: Define handlers outside render when possible
- **Memoization**: Use `useMemo` and `useCallback` judiciously
- **Key props**: Always provide stable keys for lists
- **Conditional rendering**: Use early returns to avoid unnecessary renders

---

## Security

### Input Validation

- **Sanitize user input**: Use validator library
- **Escape HTML**: Prevent XSS attacks
- **Path traversal protection**: Validate file paths (see `loadMarkdownFileUsingSlug`)

### Secrets Management

- **No hardcoded secrets**: Use environment variables
- **`.env.local`**: Store sensitive values (gitignored)
- **`.env.example`**: Document required variables (committed)

### External Links

```jsx
// Always include rel attribute for external links
<a href='https://external-site.com' target='_blank' rel='noopener noreferrer'>
  External Link
</a>
```

### Security Headers

Configured in `next.config.js`:

- X-Frame-Options
- X-Content-Type-Options
- Content Security Policy (if applicable)

---

## Documentation

### Component Documentation

- **COMPONENTS.md**: Keep updated with all components
- **Update when**: Adding, removing, or modifying components
- **Run**: `/update-component-docs` after changes

### Code Comments

- **JSDoc**: Required for all functions
- **Inline comments**: Use sparingly, prefer self-documenting code
- **TODO comments**: Include ticket number or issue link
- **Complex logic**: Explain "why", not "what"

### README Updates

- Update README.md when:
  - Adding new scripts
  - Changing build process
  - Updating dependencies
  - Modifying environment variables

---

## Git Workflow

### Pre-commit Hooks

Husky automatically runs on `git commit`:

1. **Prettier**: Formats staged files
2. **ESLint**: Fixes linting issues
3. **Jest**: Runs tests for changed files

### Commit Messages

- **Format**: `[Type] Brief description`
- **Types**: feat, fix, docs, style, refactor, test, chore
- **Examples**:
  - `feat: Add dark mode toggle component`
  - `fix: Resolve mobile menu not closing`
  - `docs: Update JSDoc for ContactCard component`

### Pull Requests

- Run `/check-standards` before creating PR
- Ensure all tests pass
- Build succeeds
- No linting errors
- Update documentation

---

## Quick Reference Checklist

Before committing code:

- [ ] JSDoc annotations added
- [ ] PropTypes validation included
- [ ] Tests created and passing
- [ ] Linting passes (0 errors)
- [ ] Formatting correct
- [ ] COMPONENTS.md updated (if applicable)
- [ ] Accessibility attributes included
- [ ] Theme CSS variables used
- [ ] Responsive design implemented
- [ ] No console.log statements
- [ ] Build succeeds
- [ ] Documentation updated

---

## Automated Checks

Use these Claude Code commands:

- `/check-standards` - Comprehensive standards verification
- `/new-component` - Create component following all standards
- `/update-component-docs` - Update COMPONENTS.md

## Questions?

Refer to:

- This document for standards
- README.md for setup and scripts
- COMPONENTS.md for component reference
- ESLint/Prettier configs for specific rules
