import type { StatsCardProps } from '../../types/components'

interface Stat {
  label: string
  value: string | number
}

interface ExtendedStatsCardProps extends Omit<StatsCardProps, 'stats'> {
  title: string
  stats?: Stat[]
}

/**
 * Stats card component displaying a titled list of statistics.
 * Shows label-value pairs in a vertical layout.
 */
export default function StatsCard({ title, stats = [], className = '' }: ExtendedStatsCardProps) {
  return (
    <div className={`bg-theme-bg border-l-4 border-theme-text text-theme-text p-6 ${className}`}>
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
