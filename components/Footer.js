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
              <h1 className='heading-3 text-2xl lg:text-4xl border-b-2 text-white pb-4 mb-4'>About Steven</h1>
              <p className='text-white leading-loose'>Hi, I'm Steve, and this is my digital garden.</p>

              <p className='text-white leading-loose'>I use this space as a platform to publish my ideas, thoughts and creative outputs.</p>

              <p className='text-white leading-loose'>I've spent my career in digital, starting as a designer, then a developer and then into leadership. so most of the content I post is about digital and leadership.</p>

              <p className='text-white leading-loose'>I'm a creative at heart, so I also use this space as a creative outlet.</p>

              <p className='text-white leading-loose'>I hope you like my content and please feel free to send me a message to say hello.</p>

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
    </footer>
  )
}

export default Footer
