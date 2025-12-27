import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

export default function ListPosts({ posts = [] }) {
  // Handle null/undefined posts gracefully
  if (!posts || !Array.isArray(posts)) {
    return <div className='grid grid-cols-1 gap-1' />
  }

  return (
    <div className='grid grid-cols-1 gap-1'>
      {posts.map(({ postSlug, postMetaData }, index) => {
        // Skip posts without required data
        if (!postSlug || !postMetaData) return null

        const title = postMetaData.title || 'Untitled'
        const date = postMetaData.date || new Date().toISOString()
        const thumbnail = postMetaData.thumbnail || '/images/placeholder.jpg'
        const summary = postMetaData.summary || ''

        return (
          <article
            key={postSlug || index}
            className='border-black border-b border-t lg:border-t-0 p-4 mb-5'
          >
            <h1 className='text-6xl font-bold heading-4 mb-5 w-2/3'>
              <Link
                href={`/post/${postSlug}`}
                className='underline decoration-3 underline-offset-8 hover:no-underline'
              >
                {title}
              </Link>
            </h1>
            <p className='text-xl font-bold heading-4 mb-10 w-2/3'>
              <time dateTime={date}>
                {dayjs(date).isValid() ? dayjs(date).format('D MMMM YYYY') : 'Invalid Date'}
              </time>
            </p>
            <Link href={`/post/${postSlug}`} className='block mb-5'>
              <Image width={1000} height={240} alt={title} src={thumbnail} className='w-full' />
            </Link>
            <p className='text-xl mb-4 w-5/6 leading-relaxed'>{summary}</p>
            <Link
              href={`/post/${postSlug}`}
              className='inline-block bg-gray-900 text-white font-semibold py-3 px-6 hover:bg-gray-800 transition-colors duration-200'
              aria-label={`Read more about ${title}`}
            >
              Read More →
            </Link>
          </article>
        )
      })}
    </div>
  )
}

ListPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postSlug: PropTypes.string,
      postMetaData: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        summary: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    })
  ),
}
