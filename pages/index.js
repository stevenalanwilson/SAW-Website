import markdownService from '../services/getMarkdownService'

import Layout from '../components/Layout'
import SiteTitle from '../components/SiteTitle'
import ListPosts from '../components/ListPosts'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'


export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts }
  }
}

const index = props => {
  return (
    <>
      <SEO />
      <Layout>

        <header>
          <div className='container mx-auto'>
            <SiteTitle />
          </div>
        </header>

        <main>
          <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-3/4'>
                <div className='mx-4 my-6'>
                  <ListPosts posts={props.posts} />
                </div>
              </div>

              <div className='w-full md:w-1/4'>
                <div className='mx-4 my-6'>
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>

    </>
  )
}



export default index
