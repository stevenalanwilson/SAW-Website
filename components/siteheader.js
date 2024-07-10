import Link from 'next/link'

function SiteHeader () {
  return (
    <header className='bg-gray-900 py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between saw--header'>
          <div className='w-full lg:w-2/4 p-2'>
            <a href='/' title='Steven Alan Wilson' className='text-xl font-bold text-white'>
                Steven Alan Wilson Limited - Technical Consultant
            </a>
          </div>
          <div className='hidden lg:block lg:w-2/4 p-2'>
            <nav className='main-menu' id='mm'>
              <ul className='flex justify-end'>
                <li className='p-2'>
                  <Link
                    href='/'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>
                    Home
                  </Link>
                </li>
                <li className='p-2'>
                  <Link
                    href='/about'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>
                    About
                  </Link>
                </li>
                <li className='p-2'>
                  <Link
                    href='/hello'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded'>
                    Say hello
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <a href='#' title='Open menu' id='mt' className='mob-menu cta button hvr-grow'><i className='fa fa-bars' aria-hidden='true' /></a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader
