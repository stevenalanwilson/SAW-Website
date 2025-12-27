export default function ExpertiseGrid({ items = [], className = '' }) {
  // Handle null/undefined items gracefully
  if (!items || !Array.isArray(items)) {
    return <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}></div>
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {items.map((item, index) => {
        // Skip items without valid data
        if (!item) return null

        return (
          <div key={index} className='bg-gray-50 p-4 border-l-2 border-gray-900'>
            <h3 className='font-bold text-lg mb-2'>{item.title || ''}</h3>
            <p className='text-base'>{item.description || ''}</p>
          </div>
        )
      })}
    </div>
  )
}
