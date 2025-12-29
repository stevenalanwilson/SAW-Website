import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/error/ErrorBoundary'
import { validateEnv } from '../config/env'

import '../public/static/screen.css'

const LANG = 'en'

// Validate environment variables at startup (server-side only)
// This will throw an error if required variables are missing
if (typeof window === 'undefined') {
  validateEnv()
}

function MyApp({ Component, pageProps }: AppProps) {
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
