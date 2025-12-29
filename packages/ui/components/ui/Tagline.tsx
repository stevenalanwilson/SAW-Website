import type { TaglineProps } from '../../types/components'

/**
 * Tagline component displaying a centered promotional message.
 */
export default function Tagline({
  text = 'Helping organizations build resilient technical teams and accelerate digital transformation',
}: TaglineProps) {
  return (
    <div className='w-full border-t-2 border-b-2 border-theme-bg mx-4 mt-10 py-8'>
      <p className='text-center text-xl md:text-2xl font-light text-theme-bg'>{text}</p>
    </div>
  )
}
