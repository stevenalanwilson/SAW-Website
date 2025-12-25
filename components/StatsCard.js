export default function StatsCard({ title, stats = [], className = '' }) {
  return (
    <div className={`bg-gray-50 p-6 border-l-4 border-gray-900 ${className}`}>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='space-y-3'>
        {stats.map((stat, index) => (
          <div key={index} className='flex justify-between items-center'>
            <span className='text-lg'>{stat.label}</span>
            <span className='text-2xl font-bold'>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
