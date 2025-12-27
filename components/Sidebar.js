import PropTypes from 'prop-types'
import ContactCard from './ContactCard'
import StatsCard from './StatsCard'
import SectionErrorBoundary from './SectionErrorBoundary'
import sidebarData from '../config/sidebarData'

export default function Sidebar({ className = '' }) {
  return (
    <aside className={className}>
      <SectionErrorBoundary name="ContactCard" errorMessage="Contact information failed to load">
        <ContactCard className="mb-6" />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="StatsCard" errorMessage="Statistics failed to load">
        <StatsCard
          title={sidebarData.professionalStats.title}
          stats={sidebarData.professionalStats.stats}
        />
      </SectionErrorBoundary>
    </aside>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string
}
