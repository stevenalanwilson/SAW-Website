# Claude Code Commands - Quick Reference

This project includes custom Claude Code commands to enforce coding standards automatically.

## 🚀 Quick Start

Type these commands when working with Claude Code:

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/check-standards` | Full standards verification | Before PR, weekly reviews |
| `/pre-commit` | Quick commit check | Before every commit |
| `/new-component` | Create new component | Adding new components |
| `/update-component-docs` | Update COMPONENTS.md | After component changes |

## 📋 Command Details

### `/check-standards` (3-5 min)
Comprehensive verification of:
- ✅ Linting & code quality (ESLint)
- ✅ Code formatting (Prettier)
- ✅ Design & styling standards (Tailwind, theme variables)
- ✅ Architectural patterns (component structure, imports)
- ✅ JSDoc type annotations
- ✅ Testing coverage (all 256 tests)
- ✅ Component documentation (COMPONENTS.md)
- ✅ Security standards (no secrets, sanitization)
- ✅ Accessibility (a11y, ARIA, semantic HTML)
- ✅ Performance (Image optimization, bundle size)
- ✅ Build verification

**Output:** Detailed report with passing/warnings/failures and recommended actions.

---

### `/pre-commit` (1-2 min)
Quick check before committing:
- ✅ Format check (auto-fixes if needed)
- ✅ Lint (0 errors required)
- ✅ Tests (all passing)
- ✅ Build (successful)
- ✅ Quick scan of modified files

**Output:** Simple pass/fail with specific issues to fix.

---

### `/new-component` (5-10 min)
Guided component creation:
1. Asks for component details (name, props, purpose)
2. Creates component file with JSDoc
3. Adds PropTypes validation
4. Implements theme-aware styling
5. Creates test file
6. Updates COMPONENTS.md
7. Verifies all checks pass

**Output:** Fully standards-compliant component ready to use.

---

### `/update-component-docs` (1-2 min)
Automatically updates COMPONENTS.md:
- Scans all components in `/components`
- Extracts props from PropTypes and JSDoc
- Updates component count
- Sorts alphabetically
- Adds usage examples

**Output:** Updated COMPONENTS.md file.

---

## 📖 Standards Reference

Full documentation in `.claude/STANDARDS.md`:
- Code quality rules
- Component architecture
- Styling guidelines
- Type safety (JSDoc + PropTypes)
- Testing requirements
- Accessibility standards
- Performance best practices
- Security guidelines

## 🔄 Workflow Examples

### Creating a New Feature
```
1. /new-component
   → Follow prompts to create component

2. Write your feature code
   → Component is already structured correctly

3. /pre-commit
   → Verify everything passes

4. git add . && git commit -m "feat: Add new component"
   → Husky hooks run automatically

5. /check-standards
   → Final verification before PR

6. git push && create PR
   → Ready for review!
```

### Making Changes
```
1. Edit existing components
   → Follow existing patterns

2. /update-component-docs
   → If props changed

3. /pre-commit
   → Quick verification

4. git commit
   → Hooks run automatically
```

### Weekly Code Review
```
/check-standards
→ Comprehensive health check
→ Identify technical debt
→ Ensure standards compliance
```

## ⚙️ How It Works

**Claude Code Commands** are markdown files in `.claude/commands/` that contain instructions for Claude. When you type a slash command, Claude reads the corresponding file and follows the instructions.

**Automation:** Commands can run terminal commands, read/write files, and perform comprehensive code analysis.

**Standards Enforcement:** Each command references `.claude/STANDARDS.md` for up-to-date coding standards.

## 🛠️ Customization

To modify or add commands:
1. Edit files in `.claude/commands/`
2. Follow the format of existing commands
3. Changes take effect immediately
4. Update this file with new commands

## 📚 Related Files

- `.claude/STANDARDS.md` - Complete coding standards
- `.claude/README.md` - Detailed command documentation
- `COMPONENTS.md` - Component reference
- `README.md` - Project setup and scripts
- `jsconfig.json` - JSDoc configuration
- `.eslintrc.json` - Linting rules
- `.prettierrc` - Formatting rules

## 💡 Tips

1. **Use `/pre-commit` frequently** - Catch issues early
2. **Run `/check-standards` before PRs** - Ensure quality
3. **Use `/new-component` for all new components** - Consistency
4. **Update docs with `/update-component-docs`** - Keep docs in sync
5. **Read `.claude/STANDARDS.md`** - Understand the standards

## 🐛 Troubleshooting

**Command not working?**
- Check you're in project root directory
- Verify `.claude/commands/` directory exists
- Check file has `.md` extension

**Tests failing?**
- Run `npm test` manually to see errors
- Check for missing dependencies
- Verify test files are up to date

**Build failing?**
- Run `npm run build` manually
- Check for TypeScript/JSDoc errors
- Verify all imports are correct

## 🎯 Success Criteria

Your code is ready to commit when:
- ✅ `/pre-commit` passes all checks
- ✅ All tests passing (256/256)
- ✅ 0 ESLint errors
- ✅ All files formatted correctly
- ✅ Build succeeds
- ✅ COMPONENTS.md is up to date (if applicable)

Your code is ready for PR when:
- ✅ `/check-standards` shows no failures
- ✅ All warnings addressed or documented
- ✅ Documentation updated
- ✅ Accessibility verified
- ✅ Performance acceptable

---

**Made with Claude Code** 🤖

These commands help maintain consistent, high-quality code across the project. Use them frequently!
