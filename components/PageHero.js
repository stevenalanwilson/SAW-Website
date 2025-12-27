import PropTypes from 'prop-types'

export default function PageHero({ title, subtitle, className = '' }) {
  return (
    <section className={`border-black border-b border-t lg:border-t-0 py-8 mx-4 my-6 ${className}`}>
      <h1 className='heading-1 font-bold text-4xl lg:text-6xl mb-4'>{title}</h1>
      {subtitle && <div className='text-2xl lg:text-3xl leading-relaxed'>{subtitle}</div>}
    </section>
  )
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
}
