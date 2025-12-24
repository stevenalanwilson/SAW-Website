import postsController from '../controllers/postsController'

import Head from 'next/head'
import Layout from '../components/Layout'
import SiteTitle from '../components/SiteTitle'
import ListPosts from "../components/ListPosts"


export async function getStaticProps() {
  const posts = await postsController.getAllPosts()
  return {
    props: { posts }
  }
};

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
            <div className='flex'>
              <div className='flex flex-wrap w-full md:w-3/4'>
                <div className=''>
                <ListPosts posts={props.posts} />
                </div>
              </div>

              <div className='flex flex-wrap w-full md:w-1/4'>
                <div className=''>
                </div>
              </div>
            </div>

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
