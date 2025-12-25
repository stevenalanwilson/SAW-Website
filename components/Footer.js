import Link from 'next/link'
import footerContactInfo from '../config/footerContactInfo'
import footerCopyrightInfo from '../config/footerCopyrightInfo'
import footerQuotes from '../config/footerQuotes'
import utils from '../utils'

function Footer() {
  const randomQuote = utils.randomQuote(footerQuotes)
  return (
    <footer className='bg-gray-900 footer'>
      <div className='container  mx-auto'>
        <div className='flex flex-wrap'>
          <div className='flex hidden lg:block w-full md:w-1/2 lg:w-1/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3  text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>Sitemap</h1>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b'>
                  <Link href='/' className='text-white'>Home</Link>
                </li>
                <li className='mb-4 pb-4 border-b'>
                    <Link href='/about' className='text-white'>About</Link>
                </li>
                <li className='mb-4 pb-4 border-b'>
                    <Link href='/hello' className='text-white'>Say hello</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/4 p-2'>
            <div className='p-2 border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>Contact Info</h1>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b'>
                  <p className='text-white'><i className='fa fa-twitter' aria-hidden='true' />
                    <Link href={footerContactInfo.twitter[0].link} title={footerContactInfo.twitter[0].title}>{footerContactInfo.twitter[0].title}</Link>
                  </p>
                </li>
                <li className='mb-4 pb-4 border-b'>
                  <p className='text-white'><i className='fa fa-facebook-official' aria-hidden='true' />
                    <Link href={footerContactInfo.facebook[0].link} target='_blank' title={footerContactInfo.facebook[0].title}>{footerContactInfo.facebook[0].title}</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-2/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>About me</h1>
              <p className='text-white leading-loose'>I am a seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services. I have successfully led multidisciplinary teams, including designers, developers, content strategists, delivery managers, and product managers, to create impactful services for both the UK Government and various commercial organizations.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full quote border-white border-b-2 mx-4 py-6'>
            <p className='text-center text-2xl text-white'>{randomQuote}</p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full copyright mx-4 py-6'>
            <p className='text-center text-white'>{footerCopyrightInfo.title} <i className='fa fa-copyright' aria-hidden='true' /> {footerCopyrightInfo.date} | <Link href={footerCopyrightInfo.url} title={footerCopyrightInfo.url}>{footerCopyrightInfo.url}</Link></p>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer
