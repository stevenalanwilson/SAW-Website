# Create New Component

Guide Claude to create a new component following all project standards.

## Instructions for Claude

When the user requests a new component, follow this comprehensive checklist:

### 1. Component File Creation

Create the component file in `components/[ComponentName].js` with this structure:

```javascript
import PropTypes from 'prop-types'
// Add other imports as needed

/**
 * [Component description - what it does, when to use it]
 *
 * @param {Object} props - Component props
 * @param {type} props.propName - Description
 * @param {type} [props.optionalProp=default] - Description
 * @returns {JSX.Element} Rendered component description
 */
export default function ComponentName({ propName, optionalProp = 'default' }) {
  return <div className='theme-aware-classes'>{/* Implementation */}</div>
}

ComponentName.propTypes = {
  propName: PropTypes.type.isRequired,
  optionalProp: PropTypes.type,
}
```

### 2. Standards to Follow

**Styling:**

- Use Tailwind CSS classes exclusively
- Use theme CSS variables: `bg-theme-bg`, `text-theme-text`, `bg-theme-primary`, `text-theme-accent`
- Follow mobile-first responsive design with `lg:` breakpoints
- Use consistent spacing: `p-2`, `p-4`, `p-6`, `mx-4`, `my-6`
- Use semantic HTML elements

**JSDoc:**

- Full function documentation with `@param` and `@returns`
- Use `@typedef` for complex prop types
- Include usage examples for complex components

**PropTypes:**

- Validate all props
- Mark required props with `.isRequired`
- Use specific types (string, number, bool, func, node, etc.)
- Use `PropTypes.shape` for object props
- Use `PropTypes.arrayOf` for arrays

**Accessibility:**

- Use semantic HTML (header, nav, main, section, article)
- Add ARIA labels to interactive elements
- Include alt text for images
- Ensure proper heading hierarchy
- Add focus states

### 3. Test File Creation

Create test file in `tests/components/[ComponentName].test.js`:

```javascript
import React from 'react'
import { render, screen } from '@testing-library/react'
import ComponentName from '../../components/ComponentName'

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(<ComponentName propName='value' />)
    expect(screen.getByText(/expected text/i)).toBeInTheDocument()
  })

  it('accepts and displays all required props', () => {
    render(<ComponentName propName='test value' />)
    expect(screen.getByText('test value')).toBeInTheDocument()
  })

  it('uses default values for optional props', () => {
    render(<ComponentName propName='value' />)
    // Test default behavior
  })

  it('handles edge cases gracefully', () => {
    // Test null, undefined, empty values
  })
})
```

### 4. Update Documentation

After creating the component:

1. Run `/update-component-docs` to update COMPONENTS.md
2. Verify the component is listed with full documentation

### 5. Verification Checklist

Before considering the component complete:

- [ ] Component file created with JSDoc annotations
- [ ] PropTypes validation added
- [ ] Theme-aware styling using CSS variables
- [ ] Responsive design implemented
- [ ] Accessibility attributes included
- [ ] Test file created with basic tests
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Formatting is correct (`npm run format:check`)
- [ ] COMPONENTS.md updated
- [ ] Component builds successfully (`npm run build`)

### 6. Ask User

Before creating the component, ask the user:

1. Component name (PascalCase)
2. Component purpose/description
3. Required props and their types
4. Optional props and their defaults
5. Any special styling requirements
6. Should it be wrapped in an error boundary?

### 7. Follow-up

After creation:

1. Show the user where the files were created
2. Provide usage example
3. Mention if any additional setup is needed
4. Suggest running `/check-standards` to verify everything is correct
