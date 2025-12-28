# Claude Code Commands

This directory contains custom commands for Claude Code to help maintain coding standards and automate common tasks.

## Available Commands

### `/check-standards`

**Comprehensive standards verification**

Performs a complete check of the codebase against all project standards including:

- Linting & code quality
- Code formatting
- Design & styling standards
- Architectural patterns
- JSDoc type annotations
- Testing coverage
- Component documentation
- Security standards
- Accessibility
- Performance best practices

**When to use:** Before creating a pull request, after major changes, or weekly code review

**Duration:** 3-5 minutes

---

### `/pre-commit`

**Quick pre-commit verification**

Fast, focused check of critical items before committing code:

- Formatting (with auto-fix)
- Linting
- Tests
- Build verification
- Quick scan of modified files

**When to use:** Before every commit (as a manual check in addition to Husky hooks)

**Duration:** 1-2 minutes

---

### `/new-component`

**Create a new component following all standards**

Guides you through creating a new component with:

- Proper file structure
- JSDoc annotations
- PropTypes validation
- Theme-aware styling
- Accessibility attributes
- Corresponding test file
- Documentation update

**When to use:** When creating any new React component

**Duration:** 5-10 minutes (depending on component complexity)

---

### `/update-component-docs`

**Update COMPONENTS.md documentation**

Automatically scans all components and updates COMPONENTS.md with:

- Current component count
- Complete prop documentation
- Usage examples
- Alphabetically sorted list

**When to use:** After adding, removing, or modifying components

**Duration:** 1-2 minutes

---

## Quick Start

1. **During development:**

   ```
   /new-component
   ```

   Follow the prompts to create a properly structured component.

2. **Before committing:**

   ```
   /pre-commit
   ```

   Verify all critical checks pass.

3. **Before pull request:**

   ```
   /check-standards
   ```

   Run comprehensive verification.

4. **After component changes:**
   ```
   /update-component-docs
   ```
   Keep documentation in sync.

## Standards Reference

See `.claude/STANDARDS.md` for complete coding standards documentation including:

- Code quality guidelines
- Component architecture patterns
- Styling standards
- Type safety requirements
- Testing requirements
- Accessibility guidelines
- Performance best practices
- Security standards
- Documentation requirements

## Integration with Git Hooks

These commands complement (not replace) the automated Husky pre-commit hooks:

**Husky runs automatically:**

- Prettier formatting
- ESLint fixes
- Jest tests (related to changes)

**Claude commands provide:**

- Comprehensive manual checks
- Guided component creation
- Documentation updates
- Standards education

## Usage Examples

### Example 1: Creating a New Component

```
User: "I need a new component to display user notifications"

You: /new-component

Claude: "I'll help you create a new notification component following all project standards.

        Please provide:
        1. Component name (PascalCase): NotificationBanner
        2. Component purpose: Display user notifications with different severity levels
        3. Required props: message (string), severity (string)
        4. Optional props: onClose (function), autoHide (boolean)
        ..."
```

### Example 2: Pre-commit Check

```
User: "I'm ready to commit my changes"

You: /pre-commit

Claude: "Running pre-commit verification...

        ✅ Formatting: All files formatted correctly
        ✅ Linting: 0 errors, 11 warnings (acceptable)
        ✅ Tests: 256/256 passing
        ✅ Build: Success

        Ready to commit! 🎉"
```

### Example 3: Standards Check Before PR

```
User: "Can you verify everything is good before I create a PR?"

You: /check-standards

Claude: "Running comprehensive standards check...

        [Detailed report of all checks]

        ✅ PASSING STANDARDS: 45/47
        ⚠️ WARNINGS: 2 (minor documentation updates recommended)
        ❌ FAILURES: 0

        Your code is ready for pull request! The warnings are optional improvements."
```

## Customization

To modify these commands:

1. Edit the markdown files in `.claude/commands/`
2. Each file contains instructions for Claude
3. Changes take effect immediately (no restart needed)

## Troubleshooting

**Command not found:**

- Ensure the file is in `.claude/commands/` directory
- Check that the file has `.md` extension
- Try typing the full command name

**Command runs but gives errors:**

- Check that you're in the project root directory
- Ensure all npm dependencies are installed (`npm install`)
- Verify git repository is initialized

**Updates not reflecting:**

- Claude Code should automatically detect changes
- If not, try restarting Claude Code or re-opening the project

## Contributing

When adding new commands:

1. Create a new `.md` file in `.claude/commands/`
2. Use a descriptive, kebab-case name (e.g., `check-security.md`)
3. Start with clear instructions for Claude
4. Include expected output format
5. Test thoroughly before committing
6. Update this README with the new command

## Related Files

- `.claude/STANDARDS.md` - Complete coding standards reference
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `jsconfig.json` - JSDoc and IDE configuration
- `COMPONENTS.md` - Component documentation
- `README.md` - Project documentation

## Support

For issues with these commands:

1. Check the STANDARDS.md file for current standards
2. Review the command file to understand what it's checking
3. Run the checks manually to debug
4. Update the command file if standards have changed
