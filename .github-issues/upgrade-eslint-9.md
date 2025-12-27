# Upgrade to ESLint 9

## Description

Upgrade from ESLint 8.57.1 to ESLint 9.x once the React ecosystem has stabilized.

## Context

During the Next.js 16 upgrade, we encountered circular dependency issues with `eslint-plugin-react` when trying to use ESLint 9. We've temporarily stayed on ESLint 8.57.1 with `eslint-config-next@15.5.9` for compatibility.

## Tasks

- [ ] Monitor ESLint 9 compatibility in React ecosystem
- [ ] Check if `eslint-plugin-react` has resolved circular dependency issues
- [ ] Test migration to flat config format (`eslint.config.js`)
- [ ] Upgrade `eslint-config-next` to v16+ (requires ESLint 9)
- [ ] Update ESLint configuration to use flat config
- [ ] Run full test suite and verify CI passes
- [ ] Update documentation

## Dependencies

- Waiting for: `eslint-plugin-react` ESLint 9 compatibility
- Related to: Next.js 16+ which prefers ESLint 9

## Labels

`enhancement`, `dependencies`, `future-upgrade`

## Priority

Medium - Can wait for ecosystem maturity
