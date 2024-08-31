import Head from 'next/head'
import Layout from '../components/Layout'
import SiteTitle from '../components/sitetitle'
import Footer from '../components/Footer'


const index = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson Limited - Technical Leadership Consultancy</title>
      </Head>
      <Layout>
        
      <header>
        <div className='container mx-auto'>
          <SiteTitle />
        </div>
      </header>

      <main>
        <div className='container mx-auto'>
        </div>
      </main>

      <footer className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          </div>
        </div>
      </footer>
      </Layout>
      
    </>
  )
}



export default index
