import siteConfig from '../config/siteConfig'

export default function AuthorCard({ className = '' }) {
  const { greeting, introduction, tagline } = siteConfig.content.authorBio
  const { name, title } = siteConfig.owner

  return (
    <div className={`bg-white border-2 border-gray-900 p-6 mb-6 ${className}`}>
      <h2 className='text-2xl font-bold mb-3'>About the Author</h2>
      <p className='text-base leading-relaxed mb-4'>
        {greeting} <strong>{name}</strong>, {introduction}
      </p>
      <p className='text-base leading-relaxed'>
        {tagline}
      </p>
    </div>
  )
}
