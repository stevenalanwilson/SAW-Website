import Link from 'next/link'
import siteConfig from '../../config/siteConfig'

/**
 * Site title component displaying the hero section with introduction.
 * Shows site name, greeting, current role, and previous company roles.
 *
 * @returns {JSX.Element} Rendered site title and hero section
 */
export default function SiteTitle() {
  const { name } = siteConfig.site
  const { greeting, introduction, description } = siteConfig.content.hero
  const { position, company, companyUrl, location } = siteConfig.content.hero.currentRole
  const previousRoles = siteConfig.content.hero.previousRoles

  // Helper function to format the separator between company names
  const getCompanySeparator = (index, total) => {
    if (index === 0) return ''
    if (index === total - 1) return ', and the '
    return ', '
  }

  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='w-full p-2 border-black lg:border-b lg:border-t lg:border-t-0 lg:py-4 mx-4 lg:my-6 mt-6 lg:my-1'>
          <h1 className='heading-1 font-bold text-3xl lg:text-6xl'>{name}</h1>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <div className='flex flex-wrap w-full lg:w-3/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <h2 className='heading-2 leading-tight text-4xl mr-40'>
              {greeting} <strong>{introduction}</strong> {description}
            </h2>
          </div>
        </div>

        <div className='flex flex-wrap w-full lg:w-1/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <p className='text-xl'>
              Currently a{' '}
              <strong>
                {position} at{' '}
                <Link
                  href={companyUrl}
                  className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'
                >
                  {company}
                </Link>
              </strong>{' '}
              in {location}. Previously held key technical leadership roles at{' '}
              {previousRoles.map((role, index) => (
                <span key={index}>
                  {getCompanySeparator(index, previousRoles.length)}
                  <Link
                    href={role.url}
                    className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'
                  >
                    {role.company}
                  </Link>
                </span>
              ))}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
