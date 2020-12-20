import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function post ({ date, id, image, title, summary }) {
  return (
    <article className='w-full md:w-2/4'>
      <div className='py-2 mx-4 mb-4 border-black border-b'>
        <figure>
          <Link href={`/post?id=${id}`}>
            <a>
              <img alt={title} src={image} className='mb-2' />
            </a>
          </Link>
          <figcaption className='italic text-gray-500 mb-2'>{title}</figcaption>
        </figure>
        <header>
          <h4 className='text-2xl heading-4  mb-2'>
            <Link href={`/post?id=${id}`}>
              <a className='underline'>{title}</a>
            </Link>
          </h4>
          <time dateTime='2007-08-29T13:58Z' className='block mb-2'><FontAwesomeIcon size='lg' icon={faCalendarAlt} /> {date}</time>
        </header>
        <p className='leading-tight mb-2'>{summary}</p>
      </div>
    </article>
  )
}
export default post
