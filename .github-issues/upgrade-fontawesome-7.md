# Upgrade FontAwesome to v7

## Description

Upgrade FontAwesome packages from v6/v7 mixed versions to consistent v7.x.

## Current State

```json
"@fortawesome/fontawesome-svg-core": "^6.6.0",
"@fortawesome/free-brands-svg-icons": "^7.1.0",
"@fortawesome/free-solid-svg-icons": "^6.6.0",
"@fortawesome/react-fontawesome": "^0.2.2"
```

## Context

Currently have mixed versions of FontAwesome packages. v7 includes breaking changes that need careful review. Also need to upgrade `@fortawesome/react-fontawesome` to v3.1.1+ (currently on deprecated 0.2.x).

## Tasks

- [ ] Review FontAwesome v7 migration guide
- [ ] Identify breaking changes in icon names/imports
- [ ] Upgrade all FontAwesome packages to v7.x
  - [ ] `@fortawesome/fontawesome-svg-core`: 6.6.0 → 7.x
  - [ ] `@fortawesome/free-brands-svg-icons`: Already on 7.1.0 ✓
  - [ ] `@fortawesome/free-solid-svg-icons`: 6.6.0 → 7.x
  - [ ] `@fortawesome/react-fontawesome`: 0.2.2 → 3.1.1+
- [ ] Update icon imports across codebase
- [ ] Test all pages for icon rendering
- [ ] Verify icon sizing and styling
- [ ] Run full test suite
- [ ] Update snapshots if needed

## Breaking Changes

- Review renamed/removed icons
- React FontAwesome v3 API changes
- Icon prop changes

## Files to Check

Search for FontAwesome usage:

```bash
grep -r "FontAwesome" --include="*.js" --include="*.jsx"
grep -r "faIcon" --include="*.js" --include="*.jsx"
```

## Labels

`enhancement`, `dependencies`, `future-upgrade`, `breaking-change`

## Priority

Medium - Current setup works but should consolidate versions
