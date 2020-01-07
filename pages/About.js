import '../static/screen.scss'
import Head from 'next/head'
import Layout from '../components/Layout.js'

function about () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <p>About</p>
      </Layout>
    </>
  )
}

export default about
