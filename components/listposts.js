import Image from 'next/image';
import Link from 'next/link';

export default function listposts ({ posts }) {
  return (
  <div className='w-full p-2 m-2'>
    {   
      posts.map(({ slug, frontmatter }) => (
        <div key={ slug }>
          <Link href={ `/post/${slug}` } >
              {/* <Image
                width={ 650 }
                height={ 340 }
                alt={ frontmatter.title }
                src={ `/${frontmatter.thumbnail}` }
              /> */}
              <h1 className='text-2xl heading-4  mb-2'>{ frontmatter.title }</h1>
          </Link>
        </div>
      ))
    }
  </div>
);
}