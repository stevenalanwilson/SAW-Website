import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

/**
 * Section heading component with consistent styling for section titles.
 */
export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b-2 border-black pb-2 ${className}`}>
      {children}
    </h2>
  )
}
