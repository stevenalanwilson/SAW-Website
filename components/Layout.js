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
    </Head>
    <SiteHeader />
    <main>
      {props.children}
    </main>
    <Footer />
  </>
)


export default Layout
