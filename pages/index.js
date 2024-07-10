import Head from 'next/head'
import Layout from '../components/Layout'
import SiteTitle from '../components/sitetitle'


const index = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson Limited - Technical Leadership Consultancy</title>
      </Head>
      <Layout>
      <section>
        <div className='container mx-auto'>
          <SiteTitle />
          <div className='flex flex-wrap'>
           
          </div>
        </div>
      </section>

      <section className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          
          </div>
        </div>
      </section>
      </Layout>
      
    </>
  )
}



export default index
