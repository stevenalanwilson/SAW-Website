import footerServices from '../config/footerServices'

function ServicesList() {
  return (
    <div>
      <h2 className='heading-3 text-2xl lg:text-3xl border-b-2 text-white pb-4 mb-4'>Services</h2>
      <ul className='menu'>
        {footerServices.map((service, index) => (
          <li key={index} className='mb-4 pb-4 border-b border-gray-700 last:border-b-0'>
            <h3 className='text-white font-semibold mb-1'>{service.title}</h3>
            <p className='text-gray-400 text-sm'>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesList
