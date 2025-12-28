# Update Component Documentation

Automatically update the COMPONENTS.md file to reflect the current state of all components in the codebase.

## Your Task

1. **Scan all components** in the `components/` directory
2. **Read each component** to understand:
   - Component name and purpose
   - Props and their types (from PropTypes and JSDoc)
   - Default values
   - Whether it's a class or functional component
3. **Update COMPONENTS.md** with:
   - Accurate component count
   - Alphabetically sorted component list
   - Complete props documentation for each component
   - Usage examples where helpful
   - Any special notes (error boundaries, wrappers, etc.)

## Format Guidelines

For each component, use this format:

```markdown
### ComponentName

**Purpose:** Brief description of what the component does

**Location:** `components/ComponentName.js`

**Props:**

- `propName` (type, required/optional) - Description
- `propName` (type, default: value) - Description

**Usage:**
\`\`\`jsx
<ComponentName
  propName="value"
  otherProp={data}
/>
\`\`\`

**Notes:**

- Any special considerations
- Dependencies on other components
- Error handling behavior
```

## Important

- Keep the existing introduction and structure
- Maintain alphabetical order
- Include all 25+ components
- Mark deprecated components if any
- Note which components are internal/utility vs user-facing
- Update the component count at the top of the file
