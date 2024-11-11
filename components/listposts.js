import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function listposts({ posts }) {
  return (
    <div className='grid grid-cols-1 gap-1'>
      {
        posts.map(({ postSlug, postMetaData }) => (
          <div key={postSlug} className='border-black border-b border-t lg:border-t-0 p-4 mb-5'>
            <Link href={`/post/${postSlug}`} >
              <h1 className='text-6xl font-bold heading-4 mb-5 underline decoration-3 underline-offset-8 hover:no-underline w-2/3'>{postMetaData.title}</h1>
              <p className='text-xl font-bold heading-4 mb-10 w-2/3'>{dayjs(postMetaData.date).format('D MMMM YYYY')}</p>
              <Image
                width={1000}
                height={240}
                alt={postMetaData.title}
                src={postMetaData.thumbnail}
                className='mb-5 w-full' 
              />
            </Link>
            <p className='text-xl mb-2 w-5/6 leading-relaxed'>{postMetaData.summary} <Link href={`/post/${postSlug}`} className='underline decoration-3 underline-offset-8 hover:no-underline'>... read more</Link></p>
          </div>
        ))
      }
    </div>
  );
}