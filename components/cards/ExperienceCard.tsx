import Link from 'next/link'

interface ExperienceCardProps {
  company: string
  url: string
  title: string
  description?: string
  highlighted?: boolean
  className?: string
}

/**
 * Experience card component displaying professional experience information.
 * Shows job title, company name with link, and optional description.
 */
export default function ExperienceCard({
  company,
  url,
  title,
  description,
  highlighted = false,
  className = '',
}: ExperienceCardProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className={`text-2xl lg:text-3xl mb-2 ${highlighted ? 'font-bold' : ''}`}>
        {title} at{' '}
        <Link
          href={url}
          className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'
        >
          {company}
        </Link>
      </h3>
      {description && <p className='text-xl leading-relaxed'>{description}</p>}
    </div>
  )
}
