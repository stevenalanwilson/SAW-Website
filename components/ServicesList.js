import footerServices from '../config/footerServices'

/**
 * Services list component displaying available services with descriptions.
 * Loads service data from footer services configuration.
 *
 * @returns {JSX.Element} Rendered services list
 */
export default function ServicesList() {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 border-theme-bg text-theme-bg pb-4 mb-4'>
        Services
      </h2>
      <ul className='menu'>
        {footerServices.map((service, index) => (
          <li key={index} className='mb-4 pb-4 border-b border-theme-accent last:border-b-0'>
            <h3 className='font-semibold mb-1 text-theme-bg'>{service.title}</h3>
            <p className='text-sm text-theme-accent'>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
