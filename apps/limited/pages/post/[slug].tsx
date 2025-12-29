import type { GetStaticPaths, GetStaticProps } from 'next'
import type { CSSProperties } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import validator from 'validator'

import markdownService from '@/services/getMarkdownService'
import config from '@/config/siteConfig'
import { getTheme } from '@/config/articleThemes'

import Layout from '@/components/layout/Layout'
import PageHero from '@/components/content/PageHero'
import SEO from '@/components/ui/SEO'
import Post from '@/components/content/Post'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Sidebar from '@/components/layout/Sidebar'
import AuthorCard from '@/components/cards/AuthorCard'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SectionErrorBoundary from '@/components/error/SectionErrorBoundary'

interface PostMetaData {
  title: string
  date: string
  summary: string
  thumbnail?: string
}

interface PostData {
  postSlug: string
  postMetaData: PostMetaData
}

interface Frontmatter {
  title: string
  summary: string
  thumbnail?: string
  date: string
  author?: string
  tags?: string[]
  theme?:
    | string
    | {
        primary: string
        accent: string
        background: string
        text: string
      }
}

interface PostPageProps {
  frontmatter: Frontmatter
  content: string
  slug: string
  posts: PostData[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsFolder = fs.readdirSync('posts')
  const paths = markdownService.loadMarkdownStaticPaths(postsFolder)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const sanitizedSlug = validator.escape(slug)
  const MarkdownfileName = markdownService.loadMarkdownFileUsingSlug(sanitizedSlug)
  const { data: frontmatter, content } = matter(MarkdownfileName)

  if (!content || !frontmatter) {
    return {
      notFound: true,
    }
  }

  const posts = markdownService.getAllMarkdownPosts()

  return {
    props: {
      frontmatter: frontmatter as Frontmatter,
      content,
      slug,
      posts,
    },
  }
}

export default function PostPage({ frontmatter, content, slug, posts = [] }: PostPageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingSpinner message='Loading post...' />
  }

  // Get theme configuration
  // Priority: explicit theme in frontmatter > auto-detect from tags > default
  const theme = getTheme(frontmatter.theme, frontmatter.tags)

  // Create CSS custom properties for this article's theme
  const themeStyles: CSSProperties = {
    '--theme-primary': theme.primary,
    '--theme-accent': theme.accent,
    '--theme-bg': theme.background,
    '--theme-text': theme.text,
  } as CSSProperties

  // Create breadcrumb trail
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Articles', url: '/' },
    { name: frontmatter.title, url: `/post/${slug}` },
  ]

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        url={`${config.site.url}/post/${slug}`}
        image={frontmatter.thumbnail || '/static/og-image.jpg'}
        type='article'
        publishedTime={frontmatter.date}
        author={frontmatter.author}
        keywords={frontmatter.tags || []}
        breadcrumbs={breadcrumbs}
      />
      <Layout latestPosts={posts} themeStyles={themeStyles}>
        {/* CSS variables are set at Layout level */}
        <div className='container mx-auto'>
          <div className='mx-4 mt-6 hidden lg:block'>
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <PageHero
            title={frontmatter.title}
            subtitle={
              <>
                <p className='text-2xl lg:text-3xl leading-relaxed mb-4'>{frontmatter.summary}</p>
                {/* Post metadata */}
                <div className='mt-4'>
                  {frontmatter.author && (
                    <p className='text-base mb-2 text-theme-text'>
                      <span className='font-semibold'>Authored by:</span> {frontmatter.author}
                    </p>
                  )}
                  {frontmatter.tags && frontmatter.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 items-center mb-4'>
                      <span className='text-base font-semibold text-theme-text'>Tags:</span>
                      {frontmatter.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='inline-block px-3 py-1 text-xs bg-theme-primary text-theme-bg'
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
              <SectionErrorBoundary name='Post' errorMessage='Post content failed to load'>
                <Post content={content} />
              </SectionErrorBoundary>
            </div>

            <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
              <SectionErrorBoundary
                name='AuthorCard'
                errorMessage='Author information failed to load'
              >
                <AuthorCard />
              </SectionErrorBoundary>
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
