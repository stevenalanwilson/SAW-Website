// import App from 'next/app'
import React, { useEffect } from 'react'

import '../public/static/screen.scss'

function MyApp ({ Component, pageProps }) {
  const lang = 'en'
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return <Component {...pageProps} />
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
