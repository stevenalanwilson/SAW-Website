import Image from 'next/image';
import Link from 'next/link';

export default function listposts({ posts }) {
  return (
    <div className='grid grid-cols-2 gap-1'>
      {
        posts.map(({ postSlug, postMetaData }) => (
          <div key={postSlug} className='border-black border-b border-t lg:border-t-0 p-4 mb-5'>
            <Link href={`/post/${postSlug}`} >
              <h1 className='text-3xl font-bold heading-4 mb-5 underline decoration-3 underline-offset-8 hover:no-underline'>{postMetaData.title}</h1>
              <Image
                width={900}
                height={340}
                alt={postMetaData.title}
                src={postMetaData.thumbnail}
                className='mb-5'
              />
            </Link>
            <p className='text-xl mb-2'>{postMetaData.summary} <Link href={`/post/${postSlug}`} className='underline decoration-3 underline-offset-8 hover:no-underline'>... read more</Link></p>
          </div>
        ))
      }
    </div>
  );
}