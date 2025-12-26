import Head from 'next/head'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';


const Layout = props => (
  <>
    <Head />
    <SiteHeader />
    <main>
      {props.children}
    </main>
    <Footer latestPosts={props.latestPosts || []} />
    <Analytics />
  </>
)


export default Layout
