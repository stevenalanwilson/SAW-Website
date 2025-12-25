import ContactCard from './ContactCard'
import StatsCard from './StatsCard'
import sidebarData from '../config/sidebarData'

export default function Sidebar({ className = '' }) {
  return (
    <aside className={className}>
      <ContactCard
        location={sidebarData.contactInfo.location}
        links={sidebarData.contactInfo.links}
        className="mb-6"
      />

      <StatsCard
        title={sidebarData.professionalStats.title}
        stats={sidebarData.professionalStats.stats}
      />
    </aside>
  )
}
