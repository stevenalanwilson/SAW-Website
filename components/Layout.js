import Head from 'next/head'
import PropTypes from 'prop-types'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react'

const Layout = (props) => (
  <>
    <Head />
    <SiteHeader />
    <main>{props.children}</main>
    <Footer latestPosts={props.latestPosts || []} />
    <Analytics />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  latestPosts: PropTypes.array,
}

export default Layout
