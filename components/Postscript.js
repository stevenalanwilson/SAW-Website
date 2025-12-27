import PropTypes from 'prop-types'
import PostscriptItem from './PostscriptItem'

const Postscript = (data) => {
  return (
    <section className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap' />
      </div>
    </section>
  )
}

Postscript.propTypes = {
  data: PropTypes.object,
}

export default Postscript
