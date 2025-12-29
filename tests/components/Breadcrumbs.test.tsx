import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'

describe('Breadcrumbs', () => {
  const mockItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Article Title', url: '/blog/article-title' },
  ]

  it('renders breadcrumb navigation with all items', () => {
    const component = renderer.create(<Breadcrumbs items={mockItems} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders null when no items provided', () => {
    const { container } = render(<Breadcrumbs items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders null when items is undefined', () => {
    const { container } = render(<Breadcrumbs items={undefined} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders correct number of breadcrumb items', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(3)
  })

  it('applies custom className when provided', () => {
    const { container } = render(<Breadcrumbs items={mockItems} className='custom-class' />)
    const nav = container.querySelector('nav')
    expect(nav.className).toContain('custom-class')
  })

  it('marks last item with aria-current="page"', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const listItems = container.querySelectorAll('li')
    const lastItem = listItems[listItems.length - 1]
    expect(lastItem.getAttribute('aria-current')).toBe('page')
  })

  it('does not mark non-last items with aria-current', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const listItems = container.querySelectorAll('li')
    expect(listItems[0].hasAttribute('aria-current')).toBe(false)
    expect(listItems[1].hasAttribute('aria-current')).toBe(false)
  })

  it('renders last item as span without link', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const listItems = container.querySelectorAll('li')
    const lastItem = listItems[2]
    const spans = lastItem.querySelectorAll('span')
    const link = lastItem.querySelector('a')

    // Find the span with the text content (not the separator)
    const textSpan = Array.from(spans).find((span) => span.textContent === 'Article Title')
    expect(textSpan).toBeTruthy()
    expect(link).toBeNull()
  })

  it('renders non-last items as links', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const firstItem = container.querySelectorAll('li')[0]
    const secondItem = container.querySelectorAll('li')[1]

    expect(firstItem.querySelector('a')).toBeTruthy()
    expect(firstItem.querySelector('a').getAttribute('href')).toBe('/')
    expect(secondItem.querySelector('a')).toBeTruthy()
    expect(secondItem.querySelector('a').getAttribute('href')).toBe('/blog')
  })

  it('includes proper ARIA label on nav element', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const nav = container.querySelector('nav')
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb navigation')
    expect(nav.getAttribute('role')).toBe('navigation')
  })

  it('renders separators between items', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const separators = container.querySelectorAll('span.mr-2')
    // Should have 2 separators for 3 items (separators before item 2 and 3)
    expect(separators.length).toBeGreaterThanOrEqual(2)
  })

  it('renders single item breadcrumb', () => {
    const singleItem = [{ name: 'Home', url: '/' }]
    const { container } = render(<Breadcrumbs items={singleItem} />)
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(1)
  })

  it('renders with correct title attribute on links', () => {
    const { container } = render(<Breadcrumbs items={mockItems} />)
    const firstLink = container.querySelector('a')
    expect(firstLink.getAttribute('title')).toBe('Navigate to Home')
  })
})
