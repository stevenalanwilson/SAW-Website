import Link from 'next/link'
import type { BreadcrumbsProps } from '../../types/components'

/**
 * Breadcrumb navigation component for hierarchical site navigation.
 * Displays a trail of links showing the user's location in the site hierarchy.
 * Includes proper ARIA labels for accessibility.
 */
export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav
      aria-label='Breadcrumb navigation'
      className={`text-sm mb-4 pb-4 border-b-2 border-theme-text ${className}`}
      role='navigation'
    >
      <ol className='flex flex-wrap items-center space-x-2'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.url}-${index}`}
              className='flex items-center'
              aria-current={isLast ? 'page' : undefined}
            >
              {index > 0 && <span className='mr-2 text-theme-text opacity-50'>/</span>}

              {isLast ? (
                <span className='text-theme-text font-semibold'>{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className='text-theme-primary hover:underline transition-all'
                  title={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
