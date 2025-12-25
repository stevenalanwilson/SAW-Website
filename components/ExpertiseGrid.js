export default function ExpertiseGrid({ items, className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className='bg-gray-50 p-4 border-l-2 border-gray-900'>
          <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
          <p className='text-base'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
