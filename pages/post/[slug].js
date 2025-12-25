import fs from 'fs'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import validator from 'validator'

import markdownService from '../../services/getMarkdownService'
import config from '../../config'

import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'
import Post from '../../components/Post'
import LoadingSpinner from '../../components/LoadingSpinner'

export async function getStaticPaths() {
  const postsFolder = fs.readdirSync('posts')
  const paths = markdownService.loadMarkdownStaticPaths(postsFolder)
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const sanitizedSlug = validator.escape(slug);
  const MarkdownfileName = markdownService.loadMarkdownFileUsingSlug(sanitizedSlug)
  const { data: frontmatter, content } = matter(MarkdownfileName);

  if (!content || !frontmatter) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }


}

function PostPage({ frontmatter, content, slug }) {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingSpinner message="Loading post..." />
  }

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        url={`${config.siteUrl}/post/${slug}`}
        image={frontmatter.thumbnail || '/static/og-image.jpg'}
        type="article"
        publishedTime={frontmatter.date}
      />
      <Layout>

        <header>
          <div className='container mx-auto'>
            <PageTitle title={frontmatter.title} summary={frontmatter.summary} date={frontmatter.date} />
          </div>
        </header>

        <main>
          <div className='container mx-auto'>
            <div className='max-w-3xl mx-auto p-4 pb-10'>
              <Post content={content} />
            </div>
          </div>
        </main>
      </Layout>

    </>
  )
}

export default PostPage