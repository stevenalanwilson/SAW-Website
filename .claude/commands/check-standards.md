# Code Standards Verification

You are a code standards enforcer for the Saw-Front-End-App project. Your role is to ensure all code changes adhere to the project's established standards and best practices.

## Your Tasks

Please perform a comprehensive standards check on the current state of the codebase:

### 1. Linting & Code Quality

- Run `npm run lint` and verify 0 errors
- Check for any new warnings (baseline: 11 acceptable warnings)
- Ensure ESLint rules are being followed:
  - PropTypes validation on all components
  - Accessibility rules (jsx-a11y) compliance
  - No unused variables or imports
  - Prefer const over let, no var usage
  - Self-closing components where appropriate

### 2. Code Formatting

- Run `npm run format:check` to verify Prettier formatting
- If formatting issues found, run `npm run format` automatically
- Verify adherence to project formatting standards:
  - Single quotes for strings
  - No semicolons
  - 2 space indentation
  - 100 character line width
  - ES5 trailing commas

### 3. Design & Styling Standards

- Verify all components use Tailwind CSS classes (no inline styles except for dynamic CSS variables)
- Check that theme CSS custom properties are used: `theme-bg`, `theme-text`, `theme-primary`, `theme-accent`
- Ensure responsive design patterns: mobile-first with `lg:` breakpoints
- Verify semantic HTML usage (header, nav, main, footer, article, section)
- Check for consistent spacing: `p-2`, `p-4`, `p-6`, `mx-4`, `my-6` pattern
- Ensure border patterns are consistent: `border-b`, `border-t`, `border-l-4` for accents

### 4. Architectural Patterns

- **Component Structure**: Verify all components follow the modern export pattern:
  ```javascript
  export default function ComponentName({ props }) {
    // implementation
  }
  ComponentName.propTypes = { ... }
  ```
- **Configuration Management**: Check that all config comes from single source of truth (`config/siteConfig.js`)
- **Error Boundaries**: Ensure critical sections are wrapped in ErrorBoundary or SectionErrorBoundary
- **Service Layer**: Verify business logic is in `services/` not in components
- **Utilities**: Check common functions are in `utils/` for reusability
- **Import Structure**: Verify imports are organized (React/Next, third-party, local components, config, styles)

### 5. JSDoc Type Annotations

- Verify all new/modified components have JSDoc annotations
- Check that function parameters are documented with types
- Ensure return types are specified
- Verify complex types have `@typedef` declarations
- Check that optional parameters use `[param]` syntax
- Ensure examples are provided for utility functions

### 6. Testing Standards

- Run `npm test` and verify all 256 tests pass
- Check if new components have corresponding test files in `tests/components/`
- Verify test structure follows pattern:
  - Basic rendering tests
  - Props validation tests
  - Edge case tests (null/undefined/empty values)
  - Snapshot tests where appropriate
- Ensure test files use descriptive test names
- Check that mocks are properly cleaned up (afterEach)

### 7. Component Documentation (COMPONENTS.md)

- Check if `COMPONENTS.md` is up to date with all components
- Verify new components are documented with:
  - Component name and purpose
  - Props list with types and descriptions
  - Usage examples
  - Location in the codebase
- Ensure removed components are deleted from documentation
- Check that component count is accurate

### 8. Security Standards

- Verify no hardcoded secrets or API keys
- Check that user input is properly sanitized (e.g., slug validation in markdown service)
- Ensure path traversal protection is in place for file operations
- Verify HTML is escaped where necessary
- Check that external links have `rel="noopener noreferrer"`
- Ensure security headers are configured in `next.config.js`

### 9. Accessibility (a11y)

- Check all interactive elements have proper ARIA labels
- Verify images have alt text
- Ensure semantic heading hierarchy (h1 → h2 → h3)
- Check for `aria-expanded` on collapsible elements
- Verify focus states are visible
- Ensure color contrast meets WCAG AA standards (mention if checking needed)

### 10. Performance Best Practices

- Check that Next.js Image component is used (not `<img>`)
- Verify images have proper width/height or fill props
- Ensure no console.log statements in production code
- Check for unnecessary re-renders (proper use of React hooks)
- Verify bundle size hasn't increased significantly (check with `npm run analyze`)

### 11. Git & Version Control

- Check that all files are properly tracked
- Verify no unnecessary files are staged (e.g., build artifacts, logs)
- Ensure `.gitignore` is respected
- Check commit message will be descriptive when created

### 12. Additional Checks

- Verify `package.json` dependencies are up to date (check for security vulnerabilities with `npm audit`)
- Check that environment variables are documented in `.env.example`
- Ensure README.md is current with recent changes
- Verify build succeeds: `npm run build`

## Reporting Format

After running all checks, provide a clear report in this format:

### ✅ PASSING STANDARDS

List all standards that are met

### ⚠️ WARNINGS

List any warnings or minor issues (with file locations)

### ❌ FAILURES

List any critical failures that must be fixed (with file locations and suggested fixes)

### 📊 SUMMARY

- Total checks: X
- Passing: X
- Warnings: X
- Failures: X

### 🔧 RECOMMENDED ACTIONS

Prioritized list of actions to take to fix any issues

## Important Notes

- Be thorough but efficient - focus on recent changes
- Provide specific file locations and line numbers for issues
- Suggest concrete fixes, not just problems
- If tests fail, show the failure output
- If build fails, show the error details
- Always run linting and tests before reporting success
