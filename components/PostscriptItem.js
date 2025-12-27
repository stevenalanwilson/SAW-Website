import PropTypes from 'prop-types'

function PostscriptItem({ title, image, _caption, description }) {
  return (
    <div className='w-full md:w-1/4 p-2 my-6 postscript-item'>
      <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 border-theme-bg text-theme-bg pb-2 mb-6'>
        {title}
      </h1>
      <figure className='border-b border-theme-bg text-theme-bg pb-2 mb-4'>
        <picture>
          <source
            media='(min-width: 800px)'
            srcSet={image + '?fit=thumb&w=800&h=600&fm=webp&q=80'}
          />
          <source
            media='(min-width: 400px)'
            srcSet={image + '?fit=thumb&w=400&h=300&fm=webp&q=80'}
          />
          <img
            src={image + '?fit=thumb&w=400&h=300&fm=webp&q=80'}
            alt={title}
            className='my-4'
            loading='lazy'
          />
        </picture>
        <figcaption className='italic text-xs text-theme-accent mb-2'>{title}</figcaption>
      </figure>
      <p className='text-theme-bg leading-tight'>{description}</p>
    </div>
  )
}

PostscriptItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _caption: PropTypes.string,
  description: PropTypes.string.isRequired,
}

export default PostscriptItem
