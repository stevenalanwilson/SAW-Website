import React, { useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

import '../public/static/screen.scss'

const LANG = 'en'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = LANG
  }, [])

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
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

export default MyApp
