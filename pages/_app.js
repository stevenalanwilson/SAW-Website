import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Inter } from 'next/font/google'
import ErrorBoundary from '../components/ErrorBoundary'

import '../public/static/screen.scss'

const LANG = 'en'

// Configure Inter font with optimal settings
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = LANG
  }, [])

  return (
    <ErrorBoundary>
      <div className={inter.variable}>
        <Component {...pageProps} />
      </div>
    </ErrorBoundary>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
