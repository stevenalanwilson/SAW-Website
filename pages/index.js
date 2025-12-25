import markdownService from '../services/getMarkdownService'

import Head from 'next/head'
import Layout from '../components/Layout'
import SiteTitle from '../components/SiteTitle'
import ListPosts from '../components/ListPosts'


export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts }
  }
}

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
                <ListPosts posts={props.posts} />
              </div>
            </div>
          </div>
        </main>
      </Layout>

    </>
  )
}



export default index
