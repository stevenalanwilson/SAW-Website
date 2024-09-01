import Image from 'next/image';
import Link from 'next/link';

export default function listposts ({ posts }) {
  return (
  <div className='w-full p-2 m-2'>
    {   
      posts.map(({ slug, postMetaData }) => (
        <div key={ slug }>
          <Link href={ `/post/${slug}` } >
          <h1 className='text-2xl heading-4  mb-2'>{ postMetaData.title }</h1>
              <Image
                width={ 650 }
                height={ 340 }
                alt={ postMetaData.title }
                src={ postMetaData.thumbnail }
              />
          </Link>
          <p>{ postMetaData.summary }</p>
        </div>
      ))
    }
  </div>
);
}