import fs from 'fs'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import validator from 'validator'

import markdownService from '../../services/getMarkdownService'
import config from '../../config'

import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import SEO from '../../components/SEO'
import Post from '../../components/Post'
import LoadingSpinner from '../../components/LoadingSpinner'
import Sidebar from '../../components/Sidebar'

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
        <div className='container mx-auto'>
          <PageHero
            title={frontmatter.title}
            subtitle={
              <>
                <p className='text-2xl lg:text-3xl leading-relaxed mb-4'>
                  {frontmatter.summary}
                </p>
                {/* Post metadata */}
                <div className='mt-4'>
                  {frontmatter.author && (
                    <p className='text-gray-600 text-base mb-2'>
                      <span className='font-semibold'>Authored by:</span> {frontmatter.author}
                    </p>
                  )}
                  {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 items-center'>
                      <span className='text-gray-600 text-base font-semibold'>Tags:</span>
                      {frontmatter.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='inline-block bg-gray-900 text-white px-3 py-1 text-xs rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            }
          />

          <div className='flex flex-wrap mx-4 my-8'>
            <div className='w-full lg:w-2/3 pr-0 lg:pr-8'>
              {/* Post content */}
              <Post content={content} />
            </div>

            <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PostPage