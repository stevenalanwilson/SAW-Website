import Link from 'next/link'
import footerContactInfo from '../config/footerContactInfo'
import footerQuotes from '../config/footerQuotes'
import footerCopyrightInfo from '../config/footerCopyrightInfo'
import utils from '../utils'

const randomQuote = utils.randomQuote(footerQuotes)

function Footer() {
  return (
    <footer className='bg-gray-900 footer'>
      <div className='container  mx-auto'>
        <div className='flex flex-wrap'>
          <div className='flex hidden lg:block w-full md:w-1/2 lg:w-1/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3  text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>Sitemap</h1>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b'>
                  <Link href='/'>
                    <a className='text-white'>Home</a>
                  </Link>
                </li>
                {/* <li className='mb-4 pb-4 border-b'>
                  <Link href='/about'>
                    <a className='text-white'>About</a>
                  </Link>
                </li>
                <li className='mb-4 pb-4 border-b'>
                  <Link href='/hello'>
                    <a className='text-white'>Say hello</a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/4 p-2'>
            <div className='p-2 border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>Contact Info</h1>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b'><p className='text-white'><i className='fa fa-facebook-official' aria-hidden='true' /> <a href={footerContactInfo.twitter[0].link} title={footerContactInfo.twitter[0].title}>{footerContactInfo.twitter[0].title}</a></p></li>
                <li className='mb-4 pb-4 border-b'><p className='text-white'><i className='fa fa-twitter' aria-hidden='true' /> <a href={footerContactInfo.facebook[0].title} target='_blank' title={footerContactInfo.facebook[0].title}>{footerContactInfo.facebook[0].title}</a></p></li>
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-2/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>About me</h1>
              <p className='text-white leading-loose'>I am an experienced technologist and leader, with over 20 years of experience in the design and development of  digital products and services. I have led product teams of designers, developers, content strategists, delivery and product managers to build services for the UK Government and commercial organisations.</p>
              <p className='text-white leading-loose'>I've had much success as a technologist and enjoy working collaboratively to empower others to grow. I enjoy the challenge of working in an ever-changing field where different opportunities are always presenting themselves.</p>
              <p className='text-white leading-loose'>I'm also a creative person and enjoy exercising my creativity on digital content, I'm a photographer, illustrator and digital creative. I like coming up with logos, flyers, posters and other interesting visuals.</p>
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
            <p className='text-center text-white'>{footerCopyrightInfo.title} <i className='fa fa-copyright' aria-hidden='true' /> {footerCopyrightInfo.date} | <a href={footerCopyrightInfo.url} title={footerCopyrightInfo.url}>{footerCopyrightInfo.url}</a></p>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
