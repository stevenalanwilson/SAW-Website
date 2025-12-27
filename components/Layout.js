import Head from 'next/head'
import PropTypes from 'prop-types'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react'

export default function Layout(props) {
  return (
    <div className='bg-theme-bg text-theme-text' style={props.themeStyles}>
      <Head />
      <SiteHeader />
      <main>{props.children}</main>
      <Footer latestPosts={props.latestPosts || []} />
      <Analytics />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  latestPosts: PropTypes.array,
  themeStyles: PropTypes.object,
}
