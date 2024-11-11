import Head from 'next/head'
import SiteHeader from './siteheader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';


const Layout = props => (
  <>
    <Head />
    <SiteHeader />
    <main>
      {props.children}
    </main>
    <Footer />
    <Analytics />
  </>
)


export default Layout
