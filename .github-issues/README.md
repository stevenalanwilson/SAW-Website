# GitHub Issues for Future Upgrades

This directory contains issue templates for future dependency upgrades that were deferred during the Next.js 16 upgrade.

## How to Create Issues

### Option 1: Manual Creation (Web Interface)

1. Go to https://github.com/stevenalanwilson/SAW-Website/issues/new
2. Copy the content from one of the markdown files below
3. Paste into the issue description
4. Extract the title from the `# ` heading
5. Add labels as specified in the template
6. Add to project: https://github.com/users/stevenalanwilson/projects/2

### Option 2: Using GitHub CLI

If you have `gh` authenticated, you can run:

```bash
cd /Users/stevenwilson/Projects/Saw-Front-End-App/.github-issues

# Create ESLint 9 upgrade issue
gh issue create \
  --title "Upgrade to ESLint 9" \
  --body-file upgrade-eslint-9.md \
  --label "enhancement,dependencies,future-upgrade" \
  --repo stevenalanwilson/SAW-Website

# Create TailwindCSS v4 upgrade issue
gh issue create \
  --title "Upgrade to TailwindCSS v4" \
  --body-file upgrade-tailwindcss-4.md \
  --label "enhancement,dependencies,future-upgrade,design" \
  --repo stevenalanwilson/SAW-Website

# Create FontAwesome v7 upgrade issue
gh issue create \
  --title "Upgrade FontAwesome to v7" \
  --body-file upgrade-fontawesome-7.md \
  --label "enhancement,dependencies,future-upgrade,breaking-change" \
  --repo stevenalanwilson/SAW-Website
```

## Issues to Create

1. **upgrade-eslint-9.md** - Upgrade to ESLint 9
   - Priority: Medium
   - Labels: enhancement, dependencies, future-upgrade

2. **upgrade-tailwindcss-4.md** - Upgrade to TailwindCSS v4
   - Priority: Medium
   - Labels: enhancement, dependencies, future-upgrade, design

3. **upgrade-fontawesome-7.md** - Upgrade FontAwesome to v7
   - Priority: Medium
   - Labels: enhancement, dependencies, future-upgrade, breaking-change

## After Creating Issues

After creating these issues on GitHub:

1. Add them to your project board: https://github.com/users/stevenwilson/projects/2
2. Set appropriate milestones if needed
3. Delete this `.github-issues` directory (or commit it for future reference)
