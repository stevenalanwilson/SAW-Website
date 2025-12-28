import markdownService from '../services/getMarkdownService'

import Layout from '../components/layout/Layout'
import SiteTitle from '../components/content/SiteTitle'
import ListPosts from '../components/content/ListPosts'
import SEO from '../components/ui/SEO'
import Sidebar from '../components/layout/Sidebar'

export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts },
  }
}

const index = (props) => {
  return (
    <>
      <SEO />
      <Layout latestPosts={props.posts}>
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
