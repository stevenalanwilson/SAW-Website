import siteConfig from '@/config/siteConfig'
import type { AuthorCardProps } from '../../types/components'

/**
 * Author card component displaying author bio information.
 * Loads author details from site configuration.
 */
export default function AuthorCard({ className = '' }: AuthorCardProps) {
  const { greeting, introduction, tagline } = siteConfig.content.authorBio
  const { name } = siteConfig.owner

  return (
    <div className={`bg-theme-bg border-2 border-theme-text text-theme-text p-6 mb-6 ${className}`}>
      <h2 className='text-2xl font-bold mb-3'>About the Author</h2>
      <p className='text-base leading-relaxed mb-4'>
        {greeting} <strong>{name}</strong>, {introduction}
      </p>
      <p className='text-base leading-relaxed'>{tagline}</p>
    </div>
  )
}
