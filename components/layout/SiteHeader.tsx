import Link from 'next/link'
import { useState } from 'react'
import siteConfig from '../../config/siteConfig'
import NavigationMenu from '../ui/NavigationMenu'

/**
 * Site header component with responsive navigation menu.
 * Displays site title and navigation with mobile burger menu toggle.
 *
 * @returns Rendered header with navigation
 */
export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = siteConfig.navigation.main
  const { title, name } = siteConfig.site

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-theme-primary text-theme-bg py-2 sticky top-0 z-50'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between saw--header'>
          <div className='w-full lg:w-1/2 p-0 lg:p-2 mx-4'>
            <Link
              href='/'
              title={name}
              className='text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:underline hover:no-underline lg:hover:underline transition-all text-theme-bg'
            >
              {title}
            </Link>
          </div>

          {/* Burger menu button - visible on mobile, hidden on lg+ */}
          <button
            onClick={toggleMenu}
            className='lg:hidden p-2 focus:outline-none focus:ring-2 rounded text-theme-bg border-theme-bg'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
              <NavigationMenu items={menuItems} />
            </nav>
          </div>
        </div>

        {/* Mobile menu - shown when burger menu is clicked */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className='mobile-menu' aria-label='Mobile navigation'>
            <NavigationMenu
              items={menuItems}
              mobile={true}
              onItemClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
