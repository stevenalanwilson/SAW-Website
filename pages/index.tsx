import type { GetStaticProps } from 'next'
import markdownService from '../services/getMarkdownService'
import Layout from '../components/layout/Layout'
import SiteTitle from '../components/content/SiteTitle'
import ListPosts from '../components/content/ListPosts'
import SEO from '../components/ui/SEO'
import Sidebar from '../components/layout/Sidebar'

interface PostMetaData {
  title: string
  date: string
  summary: string
  thumbnail?: string
}

interface Post {
  postSlug: string
  postMetaData: PostMetaData
}

interface IndexPageProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts },
  }
}

export default function Index({ posts }: IndexPageProps) {
  return (
    <>
      <SEO />
      <Layout latestPosts={posts}>
        <header>
          <div className='container mx-auto'>
            <SiteTitle />
          </div>
        </header>

        <main>
          <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-3/4'>
                <div className='mx-4 my-6'>
                  <ListPosts posts={posts} />
                </div>
              </div>

              <div className='w-full lg:w-1/4'>
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
