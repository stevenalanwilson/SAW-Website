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
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/4 p-2 sitemap py-6'>
            <h3 className='heading-3  text-4xl text-white  mb-2'>Sitemap</h3>
            <ul className='menu'>
              <li>
                <Link href='/'>
                  <a className='text-white'>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className='text-white'>About</a>
                </Link>
              </li>
              <li>
                <Link href='/hello'>
                  <a className='text-white'>Say hello</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 p-2 contact-info  py-6'>
            <h3 className='heading-3 text-4xl text-white mb-2'>Contact Info</h3>
            <ul className='menu'>
              <li><p className='text-white'>t. {footerContactInfo.number}</p></li>
              <li><p className='text-white'><i className='fa fa-facebook-official' aria-hidden='true' /> <a href={footerContactInfo.twitter[0].link} title={footerContactInfo.twitter[0].title}>{footerContactInfo.twitter[0].title}</a></p></li>
              <li><p className='text-white'><i className='fa fa-twitter' aria-hidden='true' /> <a href={footerContactInfo.facebook[0].title} target='_blank' title={footerContactInfo.facebook[0].title}>{footerContactInfo.facebook[0].title}</a></p></li>
            </ul>
          </div>
          <div className='w-full md:w-2/4 p-2 about  py-6'>
            <h3 className='heading-3  text-4xl text-white mb-2'>About Steven</h3>
            <p className='text-white leading-loose'>Hello, my name is Steven Wilson and I am a freelance full-stack digital developer and designer based in Derby UK. I’ve been in the industry for over 10 years and have had the pleasure of working with some of the UK's top creative agencies and also the UK's biggest brands such as Speedo International and Sainsburys.</p>
            <p className='text-white leading-loose'>I have a passion for UI design, learning new technologies and experimenting with mixing the digital world with the physical world. In my spare time I like to cook for family and friends, game on my Xbox and spend time with my family.</p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full quote  py-6'>
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
