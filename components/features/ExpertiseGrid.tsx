interface ExpertiseItem {
  title?: string
  description?: string
}

interface ExpertiseGridProps {
  items?: ExpertiseItem[]
  className?: string
}

/**
 * Expertise grid component displaying areas of expertise in a responsive grid layout.
 * Handles null/undefined items gracefully.
 */
export default function ExpertiseGrid({ items = [], className = '' }: ExpertiseGridProps) {
  // Handle null/undefined items gracefully
  if (!items || !Array.isArray(items)) {
    return <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`} />
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {items.map((item, index) => {
        // Skip items without valid data
        if (!item) return null

        return (
          <div
            key={index}
            className='bg-theme-bg p-4 border-l-2 border-theme-primary text-theme-text'
          >
            <h3 className='font-bold text-lg mb-2'>{item.title || ''}</h3>
            <p className='text-base'>{item.description || ''}</p>
          </div>
        )
      })}
    </div>
  )
}
