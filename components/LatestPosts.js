import Link from 'next/link'
import PropTypes from 'prop-types'

function LatestPosts({ posts = [], limit = 2 }) {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Latest Thinking</h2>
      <ul className='menu'>
        {posts.slice(0, limit).map((post, index) => (
          <li key={index} className='mb-4 pb-4 border-b border-gray-700 last:border-b-0'>
            <Link href={`/post/${post.postSlug}`} className='text-white hover:underline transition-all'>
              <h3 className='font-semibold mb-1'>{post.postMetaData.title}</h3>
            </Link>
            <p className='text-gray-400 text-sm'>{post.postMetaData.summary}</p>
            {post.postMetaData.date && (
              <p className='text-gray-500 text-xs mt-2'>
                {new Date(post.postMetaData.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </li>
        ))}
        {posts.length === 0 && (
          <li className='text-gray-400 text-sm'>No posts available yet</li>
        )}
      </ul>
    </div>
  )
}

LatestPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postSlug: PropTypes.string.isRequired,
      postMetaData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        date: PropTypes.string
      }).isRequired
    })
  ),
  limit: PropTypes.number
}

export default LatestPosts
