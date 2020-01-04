import Link from 'next/link'
import footerContactInfo from '../config/footerContactInfo'
import footerQuotes from '../config/footerQuotes'
import footerCopyrightInfo from '../config/footerCopyrightInfo'
import randomQuoteGenerator from '../services/randomQuoteGenerator'

const randomQuote = randomQuoteGenerator(footerQuotes)

function Footer () {
  return (
    <footer className='bg-gray-900 footer'>
      <div className='container  mx-auto'>
        <div className='flex flex-wrap -mx-2'>
          <div className='flex w-full md:w-1/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h3 className='heading-3  text-4xl border-b-2 text-white pb-4 mb-4'>Sitemap</h3>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b-2'>
                  <Link href='/'>
                    <a className='text-white'>Home</a>
                  </Link>
                </li>
                <li className='mb-4 pb-4 border-b-2'>
                  <Link href='/about'>
                    <a className='text-white'>About</a>
                  </Link>
                </li>
                <li className='mb-4 pb-4 border-b-2'>
                  <Link href='/hello'>
                    <a className='text-white'>Say hello</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-1/4 p-2'>
            <div className='p-2 border-white w-full border-b-2 mx-4 py-6'>
              <h3 className='heading-3 text-4xl border-b-2 text-white pb-4 mb-4'>Contact Info</h3>
              <ul className='menu'>
                <li className='mb-4 pb-4 border-b-2'><p className='text-white'>t. {footerContactInfo.number}</p></li>
                <li className='mb-4 pb-4 border-b-2'><p className='text-white'><i className='fa fa-facebook-official' aria-hidden='true' /> <a href={footerContactInfo.twitter[0].link} title={footerContactInfo.twitter[0].title}>{footerContactInfo.twitter[0].title}</a></p></li>
                <li className='mb-4 pb-4 border-b-2'><p className='text-white'><i className='fa fa-twitter' aria-hidden='true' /> <a href={footerContactInfo.facebook[0].title} target='_blank' title={footerContactInfo.facebook[0].title}>{footerContactInfo.facebook[0].title}</a></p></li>
              </ul>
            </div>
          </div>
          <div className='flex w-full md:w-2/4 p-2'>
            <div className='border-white w-full border-b-2 mx-4 py-6'>
              <h3 className='heading-3 text-4xl border-b-2 text-white pb-4 mb-4'>About Steven</h3>
              <p className='text-white leading-loose'>Hello, my name is Steven Wilson and I am a freelance full-stack digital developer and designer based in Derby UK. I’ve been in the industry for over 10 years and have had the pleasure of working with some of the UK's top creative agencies and also the UK's biggest brands such as Speedo International and Sainsburys.</p>
              <p className='text-white leading-loose'>I have a passion for UI design, learning new technologies and experimenting with mixing the digital world with the physical world. In my spare time I like to cook for family and friends, game on my Xbox and spend time with my family.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full quote border-white border-b-2 py-6'>
            <h4 className='text-center  text-2xl text-white'>{randomQuote}</h4>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full copyright  py-6'>
            <p className='text-center text-white'>{footerCopyrightInfo.title} <i className='fa fa-copyright' aria-hidden='true' /> {footerCopyrightInfo.date} | <a href={footerCopyrightInfo.url} title={footerCopyrightInfo.url}>{footerCopyrightInfo.url}</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
