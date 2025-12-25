import Link from 'next/link'

export default function ContactCard({ location, links = [], className = '' }) {
  return (
    <div className={`bg-gray-900 text-white p-6 border-t-4 border-white ${className}`}>
      <h2 className='text-2xl font-bold mb-4 border-b-2 border-white pb-2'>Get In Touch</h2>
      <div className='space-y-4'>
        {location && (
          <div>
            <p className='text-sm uppercase tracking-wide mb-1'>Location</p>
            <p className='text-lg'>{location}</p>
          </div>
        )}
        {links.length > 0 && (
          <div>
            <p className='text-sm uppercase tracking-wide mb-1'>Connect</p>
            <div className='space-y-2'>
              {links.map((link, index) => (
                <p key={index}>
                  <Link
                    href={link.url}
                    className='underline decoration-2 underline-offset-4 hover:no-underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
