import Link from 'next/link'

function SiteHeader () {
  return (
    <header className='bg-gray-900 py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between saw--header'>
          <div className='w-full lg:w-1/2 p-2'>
            <Link href='/' title='Steven Alan Wilson' className='text-xl font-bold text-white'>
                Steven Alan Wilson Limited - Technical Leadership Consultant
            </Link>
          </div>
          <div className='w-full lg:w-1/2 p-2'>
            <nav className='main-menu' aria-label='Main navigation'>
              <ul className='flex justify-end flex-wrap gap-2'>
                <li>
                  <Link
                    href='/'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded transition-colors'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded transition-colors'>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader
