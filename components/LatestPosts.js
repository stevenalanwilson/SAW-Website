import Link from 'next/link'

function LatestPosts({ posts = [], limit = 2 }) {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Latest Thinking</h2>
      <ul className='menu'>
        {posts.slice(0, limit).map((post, index) => (
          <li key={index} className='mb-4 pb-4 border-b border-gray-700 last:border-b-0'>
            <Link href={`/post/${post.postSlug}`} className='text-white hover:text-gray-300 transition-colors'>
              <h3 className='font-semibold mb-1'>{post.postMetaData.title}</h3>
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
            </Link>
          </li>
        ))}
        {posts.length === 0 && (
          <li className='text-gray-400 text-sm'>No posts available yet</li>
        )}
      </ul>
    </div>
  )
}

export default LatestPosts
