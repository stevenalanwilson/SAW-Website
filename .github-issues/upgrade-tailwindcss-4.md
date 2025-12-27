# Upgrade to TailwindCSS v4

## Description

Upgrade from TailwindCSS 3.4.6 to v4.x once it reaches stable release.

## Context

TailwindCSS v4 is currently in beta and includes significant breaking changes and performance improvements. We should wait for the stable release before upgrading.

## Benefits

- Improved build performance
- Better developer experience
- New features and utilities
- Oxide engine for faster builds

## Tasks

- [ ] Wait for TailwindCSS v4 stable release
- [ ] Review v4 migration guide and breaking changes
- [ ] Update `tailwind.config.js` to new format (if changed)
- [ ] Test all components for visual regressions
- [ ] Update PostCSS configuration if needed
- [ ] Run build and verify bundle size
- [ ] Update CI/CD pipeline
- [ ] Run full test suite

## Breaking Changes to Review

- Configuration format changes
- Removed/deprecated utilities
- Plugin API changes
- JIT mode changes (if any)

## Labels

`enhancement`, `dependencies`, `future-upgrade`, `design`

## Priority

Medium - Wait for stable release
