import siteConfig from '@/config/siteConfig'

/**
 * Services list component displaying available services with descriptions.
 * Loads service data from site configuration.
 */
export default function ServicesList() {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 border-theme-footer-text text-theme-footer-text pb-4 mb-4'>
        Services
      </h2>
      <ul className='menu'>
        {siteConfig.services.map((service, index) => (
          <li key={index} className='mb-4 pb-4 border-b border-theme-footer-text last:border-b-0'>
            <h3 className='font-semibold mb-1 text-theme-footer-text'>{service.title}</h3>
            <p className='text-sm text-theme-footer-text opacity-80'>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
