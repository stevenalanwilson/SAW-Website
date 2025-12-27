# Pre-Commit Verification

Quick verification before committing code. This is a faster, focused version of `/check-standards` that only checks the most critical items.

## Your Tasks

Run these checks quickly and report results:

### 1. Critical Quality Checks (Required)
```bash
# Formatting
npm run format:check

# Linting
npm run lint

# Tests
npm test
```

### 2. Quick Code Review
Scan recently modified files for:
- Missing JSDoc annotations on new functions
- Missing PropTypes on new components
- Console.log statements (should be removed)
- Hardcoded values that should be in config
- Any TODO comments without issue numbers

### 3. Component Documentation
If any components were added/modified/removed:
- Check if COMPONENTS.md needs updating
- Suggest running `/update-component-docs` if needed

### 4. Build Verification
```bash
npm run build
```

## Report Format

Provide a quick summary:

### ✅ Ready to Commit
All critical checks passed.

**OR**

### ❌ Issues Found
- List specific issues that must be fixed
- Provide quick fix commands if applicable

### 📝 Suggestions (Optional)
- Non-critical improvements
- Documentation updates needed

## Speed
This should complete in under 2 minutes. Focus on:
- Automated checks (lint, format, test, build)
- Quick scan of modified files
- Critical issues only

## Auto-fix
If formatting issues found, automatically run:
```bash
npm run format
```

Then re-check.
