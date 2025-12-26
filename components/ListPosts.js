import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function ListPosts({ posts }) {
  return (
    <div className='grid grid-cols-1 gap-1'>
      {
        posts.map(({ postSlug, postMetaData }) => (
          <article key={postSlug} className='border-black border-b border-t lg:border-t-0 p-4 mb-5'>
            <h1 className='text-6xl font-bold heading-4 mb-5 w-2/3'>
              <Link
                href={`/post/${postSlug}`}
                className='underline decoration-3 underline-offset-8 hover:no-underline'
              >
                {postMetaData.title}
              </Link>
            </h1>
            <p className='text-xl font-bold heading-4 mb-10 w-2/3'>
              <time dateTime={postMetaData.date}>
                {dayjs(postMetaData.date).format('D MMMM YYYY')}
              </time>
            </p>
            <Link href={`/post/${postSlug}`} className='block mb-5'>
              <Image
                width={1000}
                height={240}
                alt={postMetaData.title}
                src={postMetaData.thumbnail}
                className='w-full'
              />
            </Link>
            <p className='text-xl mb-4 w-5/6 leading-relaxed'>{postMetaData.summary}</p>
            <Link
              href={`/post/${postSlug}`}
              className='inline-block bg-gray-900 text-white font-semibold py-3 px-6 hover:bg-gray-800 transition-colors duration-200'
              aria-label={`Read more about ${postMetaData.title}`}
            >
              Read More →
            </Link>
          </article>
        ))
      }
    </div>
  );
}