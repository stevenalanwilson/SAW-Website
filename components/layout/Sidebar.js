import PropTypes from 'prop-types'
import ContactCard from '../cards/ContactCard'
import StatsCard from '../cards/StatsCard'
import SectionErrorBoundary from '../error/SectionErrorBoundary'
import sidebarData from '../../config/sidebarData'

/**
 * Sidebar component containing contact card and professional statistics.
 * Wraps each section in error boundaries for graceful failure handling.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered sidebar with contact and stats cards
 */
export default function Sidebar({ className = '' }) {
  return (
    <aside className={className}>
      <SectionErrorBoundary name='ContactCard' errorMessage='Contact information failed to load'>
        <ContactCard className='mb-6' />
      </SectionErrorBoundary>

      <SectionErrorBoundary name='StatsCard' errorMessage='Statistics failed to load'>
        <StatsCard
          title={sidebarData.professionalStats.title}
          stats={sidebarData.professionalStats.stats}
        />
      </SectionErrorBoundary>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
}
