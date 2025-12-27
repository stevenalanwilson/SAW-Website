import Link from 'next/link'
import PropTypes from 'prop-types'

function NavigationMenu({ items, mobile = false, onItemClick }) {
  const baseClasses =
    'text-theme-bg py-3 px-5 hover:text-black hover:bg-white rounded transition-all duration-500 ease-in-out hover:shadow-lg'
  const desktopClasses = `${baseClasses} py-4 hover:scale-105`
  const mobileClasses = `block ${baseClasses}`

  const listClasses = mobile ? 'flex flex-col gap-2 py-4' : 'flex justify-end flex-wrap gap-2'

  return (
    <ul className={listClasses}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={mobile ? mobileClasses : desktopClasses}
            onClick={onItemClick}
            title={item.title || item.label}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  mobile: PropTypes.bool,
  onItemClick: PropTypes.func,
}

export default NavigationMenu
