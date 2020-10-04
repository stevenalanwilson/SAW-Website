import Link from 'next/link'

function header () {
  return (
    <header className='bg-gray-900 py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between saw--header'>
          <div className='w-1/4 p-2'>
            <a href='/' title='Steven Alan Wilson' className='text-xl font-bold text-white'>
                Steven Alan Wilson
            </a>
          </div>
          <div className='w-3/4 p-2'>
            <nav className='main-menu' id='mm'>
              <ul className='flex justify-end'>
                <li className='p-2'>
                  <Link href='/'>
                    <a className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>Home</a>
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/about'>
                    <a className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>About</a>
                  </Link>
                </li>
                <li className='p-2'>
                  <Link href='/hello'>
                    <a className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>Say hello</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <a href='#' title='Open menu' id='mt' className='mob-menu cta button hvr-grow'><i className='fa fa-bars' aria-hidden='true' /></a>
        </div>
      </div>
    </header>
  )
}

export default header
