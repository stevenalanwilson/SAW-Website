# Steven Alan Wilson - Monorepo

This repository contains the ecosystem of websites for Steven Alan Wilson, managed as a **Monorepo** using NPM Workspaces. It includes the main technical consultancy website ("Limited") and the creative portfolio ("Creative"), sharing a common UI library and "Master Theme".

[![Node](https://img.shields.io/badge/node-24.x-brightgreen)]() [![Next.js](https://img.shields.io/badge/next.js-16.1.1-black)]() [![React](https://img.shields.io/badge/react-19.2.3-blue)]() [![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)]()

---

## Table of Contents

- [Architecture & Structure](#architecture--structure)
- [Applications](#applications)
- [Shared UI & Master Theme](#shared-ui--master-theme)
- [Configuration](#configuration)
- [Quick Start](#quick-start)
- [Development Workflow](#development-workflow)
- [Testing & Quality](#testing--quality)
- [Deployment](#deployment)

---

## Architecture & Structure

This project uses **NPM Workspaces** to manage multiple applications and packages within a single repository.

### Workspace Structure

| Path                | Package         | Description                                                                                   |
| ------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| **`apps/limited`**  | `@saw/limited`  | **Consultancy Site** (stevenalanwilson.com). Focused on high-performance, accessible content. |
| **`apps/creative`** | `@saw/creative` | **Creative Portfolio**. Showcases design and creative technology work.                        |
| **`packages/ui`**   | `@saw/ui`       | **Master Theme**. Shared UI components, types, and base configuration.                        |

---

## Applications

### 1. Limited (`apps/limited`)

The primary destination for technical leadership consultancy.

- **Features**: Markdown-based blog, case studies, expertise showcase.
- **Tech**: Next.js (SSG), Tailwind CSS.

### 2. Creative (`apps/creative`)

A portfolio site leveraging the same underlying technology but with a distinct content focus.

- **Features**: Portfolio gallery, visual design showcase.
- **Tech**: Next.js (SSG), Tailwind CSS.

---

## Shared UI & Master Theme (`packages/ui`)

The `@saw/ui` package is the heart of the monorepo. It contains reusable components that ensure visual consistency across both sites while allowing for content customization.

### Key Resources

- **Components**: `components/layout` (Header, Footer), `components/ui` (Buttons, SEO), `components/content` (Post, Hero).
- **Types**: Shared TypeScript definitions (`types/site.ts`, `types/components.ts`).
- **Styles**: Base Tailwind configuration and CSS variables for dynamic theming.

**Usage:**
Components are imported using the `@/components` alias, which resolves to this package.

---

## Configuration

Each application maintains its own independent configuration while using the shared UI components. This allows the same "Master Theme" to display different site titles, navigation, and social links depending on which app is running.

- **Limited Config**: `apps/limited/config/siteConfig.ts`
- **Creative Config**: `apps/creative/config/siteConfig.ts`

### How it works (Dependency Injection)

```
┌─────────────────────────────────────────────────────────────┐
│                    Monorepo Structure                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐              ┌──────────────┐             │
│  │ apps/limited │              │apps/creative │             │
│  │              │              │              │             │
│  │ ┌──────────┐ │              │ ┌──────────┐ │             │
│  │ │  Config  │ │              │ │  Config  │ │             │
│  │ │  @/config│ │              │ │  @/config│ │             │
│  │ └────┬─────┘ │              │ └────┬─────┘ │             │
│  └──────│───────┘              └──────│───────┘             │
│         │                              │                     │
│         └──────────┬───────────────────┘                     │
│                    │ imports via path aliases               │
│                    ▼                                         │
│         ┌────────────────────┐                               │
│         │   packages/ui      │                               │
│         │                    │                               │
│         │  ┌──────────────┐  │                               │
│         │  │  Components  │  │  Shared Master Theme          │
│         │  │  - Layout    │  │  Uses injected config         │
│         │  │  - Footer    │  │  from each app                │
│         │  │  - Header    │  │                               │
│         │  └──────────────┘  │                               │
│         │                    │                               │
│         │  ┌──────────────┐  │                               │
│         │  │    Types     │  │  Shared TypeScript            │
│         │  │  - Site      │  │  definitions                  │
│         │  │  - Component │  │                               │
│         │  └──────────────┘  │                               │
│         └────────────────────┘                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Dependency Injection Flow:**

1. **Shared Components** Import: `import siteConfig from '@/config/siteConfig'`
2. **Build-Time Resolution**:
   - In **Limited**, `@/config` → `apps/limited/config` (stevenalanwilson.com)
   - In **Creative**, `@/config` → `apps/creative/config` (creative.stevenalanwilson.com)
3. **Result**: A single `Footer` component renders "Steven Alan Wilson Limited" on one site and "Steven Alan Wilson Creative" on the other.

**Path Alias Resolution** (defined in each app's `tsconfig.json`):

```json
{
  "paths": {
    "@/components/*": ["../../packages/ui/components/*"],
    "@/types/*": ["../../packages/ui/types/*"],
    "@/config/*": ["config/*"] // App-specific!
  }
}
```

---

## Quick Start

### Prerequisites

- **Node.js** 24.x or higher
- **npm** (comes with Node.js)

### Installation

```bash
# Install dependencies for all workspaces
npm install
```

### Development Scripts

Run these scripts from the root directory:

| Script                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev:limited`  | Start Limited site (http://localhost:3000)  |
| `npm run dev:creative` | Start Creative site (http://localhost:3000) |
| `npm run build`        | Build all apps and packages                 |
| `npm run test`         | Run tests across all workspaces             |
| `npm run lint`         | Run linting across all workspaces           |

---

## Development Workflow

### Technology Stack

- **Framework**: Next.js 16.1.1 (App Router & Pages Router supported)
- **Language**: TypeScript 5.9.3 & React 19.2.3
- **Styling**: Tailwind CSS 3.4.6 with CSS Custom Properties for theming
- **Testing**: Jest 30.2.0, React Testing Library
- **Quality**: ESLint, Prettier, Husky (pre-commit hooks)
- **Build**: TypeScript Project References for incremental builds

### Build System

The monorepo uses **TypeScript Project References** for optimal build performance:

```
Build Order:
  1. packages/ui (shared components & types)
     ↓ generates .d.ts files
  2. apps/limited & apps/creative (in parallel)
     ↓ reference packages/ui
  3. Production builds
```

**Build Commands:**

- `npm run build` - Build all workspaces (UI package first, then apps)
- `npm run typecheck` - Type-check all projects
- `npx tsc --build packages/ui` - Build UI package declarations only

**Benefits:**

- Incremental builds (only rebuild what changed)
- Better IDE performance and type-checking
- Faster CI/CD pipelines

### Making Changes

1. **UI Changes**: Edit components in `packages/ui`. Run `npx tsc --build packages/ui` to regenerate type declarations if needed. Changes propagate to both apps immediately.
2. **Content/Config**: Edit files in `apps/*/config/` or `apps/*/pages/`.

### Theming System

The UI uses a dynamic theming system based on CSS variables.

- **Themes**: Light (default) & Dark.
- **Blog Posts**: Can define a custom theme in frontmatter (e.g., `theme: dark`).

---

## Testing & Quality

### Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

- **260+ Tests**: High coverage (>96%) ensuring reliability.
- **Type Safety**: Full TypeScript strict mode enabled.
- **Linting**: Automated checks for accessibility (a11y) and code style.

---

## Deployment

Both applications are configured for deployment on **Vercel**.

- **Limited**: Deploys from `apps/limited`
- **Creative**: Deploys from `apps/creative`

Vercel automatically detects the monorepo structure.

---

**Built with Next.js, React, and Tailwind CSS**
