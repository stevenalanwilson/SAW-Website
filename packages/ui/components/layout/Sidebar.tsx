import ContactCard from '../cards/ContactCard'
import StatsCard from '../cards/StatsCard'
import SectionErrorBoundary from '../error/SectionErrorBoundary'
import siteConfig from '@/config/siteConfig'
import type { SidebarProps } from '../../types/components'

/**
 * Sidebar component containing contact card and professional statistics.
 * Wraps each section in error boundaries for graceful failure handling.
 *
 * @param props - Component props
 * @param props.className - Additional CSS classes to apply
 * @returns Rendered sidebar with contact and stats cards
 */
export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <aside className={className}>
      <SectionErrorBoundary name='ContactCard' errorMessage='Contact information failed to load'>
        <ContactCard className='mb-6' />
      </SectionErrorBoundary>

      <SectionErrorBoundary name='StatsCard' errorMessage='Statistics failed to load'>
        <StatsCard title={siteConfig.stats.title} stats={siteConfig.stats.items} />
      </SectionErrorBoundary>
    </aside>
  )
}
