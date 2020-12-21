import Head from 'next/head'
import SiteHeader from './siteheader'
import Footer from './Footer'

const Layout = props => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono'
        type='text/css'
      />
      <script src='https://kit.fontawesome.com/f1741a1610.js' crossOrigin='anonymous' />
    </Head>
    <SiteHeader />
    <main>
      {props.children}
    </main>
    <Footer />
  </>
)


export default Layout
