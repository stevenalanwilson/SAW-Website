import Link from 'next/link'

interface PostMetaData {
  title: string
  summary: string
  date?: string
}

interface Post {
  postSlug: string
  postMetaData: PostMetaData
}

interface LatestPostsProps {
  posts?: Post[]
  limit?: number
}

/**
 * Latest posts component displaying a limited list of recent blog posts.
 * Shows post title, summary, and publication date with links to full articles.
 */
export default function LatestPosts({ posts = [], limit = 2 }: LatestPostsProps) {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 border-theme-bg text-theme-bg pb-4 mb-4'>
        Latest Thinking
      </h2>
      <ul className='menu'>
        {posts.slice(0, limit).map((post) => (
          <li
            key={post.postSlug}
            className='mb-4 pb-4 border-b border-theme-accent last:border-b-0'
          >
            <Link
              href={`/post/${post.postSlug}`}
              className='hover:underline transition-all text-theme-bg'
              title={post.postMetaData.title}
            >
              <h3 className='font-semibold mb-1'>{post.postMetaData.title}</h3>
            </Link>
            <p className='text-sm text-theme-accent'>{post.postMetaData.summary}</p>
            {post.postMetaData.date && (
              <p className='text-xs mt-2 text-theme-accent'>
                {new Date(post.postMetaData.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </li>
        ))}
        {posts.length === 0 && (
          <li className='text-sm text-theme-accent'>No posts available yet</li>
        )}
      </ul>
    </div>
  )
}
