import theme from '../styles/theme'

function PostscriptItem ({ title, image, caption, description }) {
  return (
    <div className='w-full md:w-1/4 p-2 my-6 postscript-item'>
      <h3 className='heading-3 text-4xl border-b-2 text-white pb-2 mb-6'>{title}</h3>
      <figure className='border-b-2 text-white pb-2 mb-4'>
        <img alt={title} src={image} className='my-4' />
        <figcaption className='italic text-gray-500 mb-2'>{title}</figcaption>
      </figure>
      <p className='text-white leading-tight'>{description}</p>
    </div>
  )
}

export default PostscriptItem
