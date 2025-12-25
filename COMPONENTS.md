# Component Documentation

This document lists all reusable components available in the application.

## Layout Components

### Layout
**File:** `components/Layout.js`
**Description:** Main layout wrapper that includes SiteHeader, ErrorBoundary, and Footer
**Usage:**
```jsx
<Layout>
  <YourContent />
</Layout>
```

### SiteHeader
**File:** `components/SiteHeader.js`
**Description:** Top navigation bar with logo and menu links
**Usage:** Used automatically within Layout component

### Footer
**File:** `components/Footer.js`
**Description:** Site footer with social links and copyright information
**Usage:** Used automatically within Layout component

### SiteTitle
**File:** `components/SiteTitle.js`
**Description:** Homepage hero section with name and introduction
**Usage:**
```jsx
<SiteTitle />
```

## Content Components

### PageHero
**File:** `components/PageHero.js`
**Description:** Page hero section with title and optional subtitle
**Props:**
- `title` (string, required): Main heading
- `subtitle` (string|JSX, optional): Subtitle text or JSX
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<PageHero
  title="About Me"
  subtitle="Welcome to my page"
/>
```

### SectionHeading
**File:** `components/SectionHeading.js`
**Description:** Consistent section heading with underline
**Props:**
- `children` (string|JSX, required): Heading content
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<SectionHeading>Overview</SectionHeading>
```

### PageTitle
**File:** `components/PageTitle.js`
**Description:** Blog post title with date and summary
**Props:**
- `title` (string, required): Post title
- `summary` (string, optional): Post summary
- `date` (string, required): Publication date

**Usage:**
```jsx
<PageTitle
  title="My Blog Post"
  summary="A brief summary"
  date="2024-12-25"
/>
```

### ListPosts
**File:** `components/ListPosts.js`
**Description:** Displays a list of blog posts
**Props:**
- `posts` (array, required): Array of post objects

**Usage:**
```jsx
<ListPosts posts={postArray} />
```

### Post
**File:** `components/Post.js`
**Description:** Renders markdown content as styled HTML
**Props:**
- `content` (string, required): Markdown content
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<Post content={markdownString} />
```

### LoadingSpinner
**File:** `components/LoadingSpinner.js`
**Description:** Full-screen fixed position loading indicator with animated spinner
**Props:**
- `message` (string, optional): Loading message (default: "Loading...")
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<LoadingSpinner message="Loading post..." />
```

**Note:** Uses fixed positioning (`fixed inset-0`) to cover the entire viewport with a high z-index (`z-50`). Ideal for page transitions and async loading states.

## Card Components

### AuthorCard
**File:** `components/AuthorCard.js`
**Description:** Introduction card for blog posts that welcomes readers and introduces the author
**Props:**
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<AuthorCard />
```

**Note:** Displays a brief author bio and welcome message. Used at the top of blog post sidebars to provide context about who wrote the content.

### ContactCard
**File:** `components/ContactCard.js`
**Description:** Dark card displaying contact information and social links
**Props:**
- `location` (string, optional): Physical location
- `links` (array, optional): Array of `{label, url}` objects
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<ContactCard
  location="Derby, England, UK"
  links={[
    { label: 'LinkedIn', url: 'https://linkedin.com/...' }
  ]}
/>
```

### StatsCard
**File:** `components/StatsCard.js`
**Description:** Light card displaying statistics
**Props:**
- `title` (string, required): Card title
- `stats` (array, optional): Array of `{label, value}` objects
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<StatsCard
  title="Professional Network"
  stats={[
    { label: 'Connections', value: '500+' }
  ]}
/>
```

### ExperienceCard
**File:** `components/ExperienceCard.js`
**Description:** Card for displaying work experience
**Props:**
- `company` (string, required): Company name
- `url` (string, required): Company website
- `title` (string, required): Job title
- `description` (string, optional): Job description
- `highlighted` (boolean, optional): Whether to highlight (bold)
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<ExperienceCard
  company="Company Name"
  url="https://company.com"
  title="Senior Developer"
  description="Led development team"
  highlighted={true}
/>
```

## Grid Components

### ExpertiseGrid
**File:** `components/ExpertiseGrid.js`
**Description:** Responsive grid for displaying expertise areas
**Props:**
- `items` (array, required): Array of `{title, description}` objects
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<ExpertiseGrid items={[
  { title: 'Skill', description: 'Skill description' }
]} />
```

## Composite Components

### Sidebar
**File:** `components/Sidebar.js`
**Description:** Sidebar combining ContactCard and StatsCard with predefined data from config
**Props:**
- `className` (string, optional): Additional CSS classes

**Usage:**
```jsx
<Sidebar />
```

**Note:** Data is loaded from `config/sidebarData.js`

## Utility Components

### SEO
**File:** `components/SEO.js`
**Description:** Manages meta tags and SEO information
**Props:**
- `title` (string, optional): Page title
- `description` (string, optional): Page description
- `image` (string, optional): OG image URL
- `url` (string, optional): Canonical URL
- `type` (string, optional): Content type (website|article)
- `publishedTime` (string, optional): Article publish time
- `modifiedTime` (string, optional): Article modified time

**Usage:**
```jsx
<SEO
  title="Page Title"
  description="Page description"
  url="https://example.com/page"
/>
```

### ErrorBoundary
**File:** `components/ErrorBoundary.js`
**Description:** React error boundary with Sentry integration
**Usage:** Used automatically within Layout component

## Configuration Files

### sidebarData.js
**File:** `config/sidebarData.js`
**Description:** Centralized contact and statistics data for Sidebar component
**Exports:**
- `contactInfo`: Location and social links
- `professionalStats`: Title and statistics array

## Component Testing

All components have comprehensive test coverage. Test files are located in `tests/components/`.

Current test coverage: **~95%**

- All components: 100% coverage
- 139 tests passing
- 21 test suites

## Viewing Component Examples

Visit `/components` on the website to see live examples of all components with usage code.
