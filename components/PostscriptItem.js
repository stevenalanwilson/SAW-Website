import theme from '../styles/theme'

function PostscriptItem ({ title, image, caption, description }) {
  return (
    <div className='w-full md:w-1/4 p-2 my-6 postscript-item'>
      <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-2 mb-6'>{title}</h1>
      <figure className='border-b text-white pb-2 mb-4'>
        <picture>
          <source media='(min-width: 800px)' srcset={image + '?fit=thumb&w=800&h=600&fm=webp&q=80'} />
          <source media='(min-width: 400px)' srcset={image + '?fit=thumb&w=400&h=300&fm=webp&q=80'} />
          <img src={image + '?fit=thumb&w=400&h=300&fm=webp&q=80'} alt='Source sets are awesome!' className='my-4' />
        </picture>
        <figcaption className='italic text-xs	text-gray-200 mb-2'>{title}</figcaption>
      </figure>
      <p className='text-white leading-tight'>{description}</p>
    </div>
  )
}

export default PostscriptItem
