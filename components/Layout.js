import Head from 'next/head'
import SiteHeader from './siteheader'
import Postscript from './Postscript'
import Footer from './footer'

const Layout = props => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono'
        type='text/css'
      />
      <script src='https://kit.fontawesome.com/f1741a1610.js' crossorigin='anonymous' />
    </Head>
    <SiteHeader />
    <main>
      <div className='container mx-auto'>
        {props.children}
      </div>
    </main>

    <Postscript />
    <Footer />
  </>
)

export default Layout
