import Link from 'next/link'

function Hero() {
  return (
    <section>
       <div className='w-full p-2 border-black border-b border-t lg:border-t-0 py-4 mx-4 my-6 lg:my-1'>
          <h1 className='heading-1 text-3xl lg:text-4xl'>
          <Link
            href='/'
            className='underline decoration-rose-800'>
              Technical Leadership Principles.
          </Link>
          </h1>
          <p>A</p>
        </div>
    </section>
  )
}

export default Hero
