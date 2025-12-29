# VS Code Setup for Monorepo Testing

## Issue

VS Code Jest extension may not recognize tests in the monorepo structure.

## Solution

1. **Copy the example VS Code settings:**

   ```bash
   cp -r .vscode.example .vscode
   ```

2. **Reload VS Code window:**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Reload Window" and press Enter

3. **Verify tests appear in Testing sidebar:**
   - Click the beaker/flask icon in the sidebar
   - You should see all test suites organized by workspace

## What This Does

The configuration tells VS Code's Jest extension:

- Use `npm test` command for running tests
- Understand the monorepo project structure
- Auto-run tests only when files are saved
- Show test failures in peek view

## Alternative: Run Tests from Terminal

If VS Code integration doesn't work, you can always run tests from the terminal:

```bash
# All tests
npm test

# Specific workspace
npm test --workspace=@saw/ui
npm test --workspace=@saw/limited
npm test --workspace=@saw/creative
```
