import Link from 'next/link'
import { useState } from 'react'

function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-gray-900 py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between saw--header'>
          <div className='w-full lg:w-1/2 p-0 lg:p-2'>
            <Link href='/' title='Steven Alan Wilson' className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white hover:underline hover:no-underline lg:hover:underline transition-all'>
                Steven Alan Wilson Limited - Technical Leadership Consultant
            </Link>
          </div>

          {/* Burger menu button - visible on mobile, hidden on lg+ */}
          <button
            onClick={toggleMenu}
            className='lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop menu - hidden on mobile, visible on lg+ */}
          <div className='hidden lg:block w-full lg:w-1/2 p-2'>
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
                <li>
                  <Link
                    href='/components'
                    className='text-white py-4 px-5 hover:text-black hover:bg-white rounded transition-colors'>
                    Components
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile menu - shown when burger menu is clicked */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className='mobile-menu' aria-label='Mobile navigation'>
            <ul className='flex flex-col gap-2 py-4'>
              <li>
                <Link
                  href='/'
                  className='block text-white py-3 px-5 hover:text-black hover:bg-white rounded transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='block text-white py-3 px-5 hover:text-black hover:bg-white rounded transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/components'
                  className='block text-white py-3 px-5 hover:text-black hover:bg-white rounded transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Components
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader
