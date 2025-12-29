# VS Code Setup for Monorepo Testing

## Issue

VS Code Jest extension doesn't work well with npm workspaces monorepos.

## Solutions

### Option 1: Run Tests from Terminal (Recommended)

The most reliable way is to use the integrated terminal:

```bash
# All tests across all workspaces
npm test

# Specific workspace
npm test --workspace=@saw/ui
npm test --workspace=@saw/limited
npm test --workspace=@saw/creative

# Watch mode for a workspace
cd apps/limited && npm test -- --watch
```

### Option 2: Configure VS Code Jest Extension (Limited Support)

If you want VS Code test integration, you can configure it to work with one workspace at a time:

1. **Copy the example settings:**

   ```bash
   cp -r .vscode.example .vscode
   ```

2. **Edit `.vscode/settings.json`** to change `jest.rootPath`:
   - For limited app: `"jest.rootPath": "apps/limited"`
   - For creative app: `"jest.rootPath": "apps/creative"`
   - For UI package: `"jest.rootPath": "packages/ui"`

3. **Reload VS Code:** `Cmd+Shift+P` → "Reload Window"

**Limitations:**

- Can only show tests from one workspace at a time
- Need to manually change `jest.rootPath` to switch workspaces
- Test sidebar will only show the selected workspace

### Option 3: Use VS Code Multi-Root Workspaces

1. **Create a VS Code workspace file** (`.code-workspace`):

   ```json
   {
     "folders": [
       { "path": "apps/limited", "name": "Limited App" },
       { "path": "apps/creative", "name": "Creative App" },
       { "path": "packages/ui", "name": "UI Package" }
     ]
   }
   ```

2. **Open the workspace:** File → Open Workspace from File

3. Each folder will have its own Jest integration

## Why This is Complicated

VS Code's Jest extension was designed for single-project repositories. In a monorepo:

- Each workspace has its own `jest.config.js` using `next/jest`
- Tests can't run from the monorepo root (Next.js config conflicts)
- The extension doesn't understand npm workspaces natively

**Bottom line:** Terminal testing works perfectly. VS Code integration is limited but optional.
