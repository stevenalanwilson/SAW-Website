import PropTypes from 'prop-types'
import siteConfig from '../config/siteConfig'

/**
 * Author card component displaying author bio information.
 * Loads author details from site configuration.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @returns {JSX.Element} Rendered author card with bio information
 */
export default function AuthorCard({ className = '' }) {
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

AuthorCard.propTypes = {
  className: PropTypes.string,
}
