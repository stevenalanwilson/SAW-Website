import PropTypes from 'prop-types'

function Tagline({
  text = 'Helping organizations build resilient technical teams and accelerate digital transformation',
}) {
  return (
    <div className='w-full border-t-2 border-b-2 border-theme-bg mx-4 mt-10 py-8'>
      <p className='text-center text-xl md:text-2xl font-light text-theme-bg'>{text}</p>
    </div>
  )
}

Tagline.propTypes = {
  text: PropTypes.string,
}

export default Tagline
