import PropTypes from 'prop-types'

/**
 * @typedef {Object} Stat
 * @property {string} label - Statistic label
 * @property {string | number} value - Statistic value
 */

/**
 * Stats card component displaying a titled list of statistics.
 * Shows label-value pairs in a vertical layout.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {Stat[]} [props.stats=[]] - Array of statistics to display
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered stats card
 */
export default function StatsCard({ title, stats = [], className = '' }) {
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

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  className: PropTypes.string,
}
