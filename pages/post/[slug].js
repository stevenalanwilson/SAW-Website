import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router'
import validator from 'validator';
import React from 'react';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from 'rehype-react';

import markdownService from '../../services/getMarkdownService'

import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import SEO from '../../components/SEO'

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

function Post({ frontmatter, content, slug }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4'></div>
          <p className='text-xl text-gray-700'>Loading post...</p>
        </div>
      </div>
    )
  }

  // Process markdown content safely using rehype-react
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      jsx: React.createElement,
      jsxs: React.createElement,
      components: {
        p: (props) => <p className='text-lg leading-relaxed mb-5' {...props} />,
        h1: (props) => <h1 className='text-3xl font-bold leading-relaxed mb-5' {...props} />,
        h2: (props) => <h2 className='text-2xl font-bold leading-relaxed mb-5' {...props} />,
        h3: (props) => <h3 className='text-xl font-bold leading-relaxed mb-5' {...props} />,
        h4: (props) => <h4 className='text-lg font-bold leading-relaxed mb-5' {...props} />,
        h5: (props) => <h5 className='text-base font-bold leading-relaxed mb-5' {...props} />,
      }
    })

  const processedContent = processor.processSync(content).result

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        url={`https://stevenalanwilson.com/post/${slug}`}
        image={frontmatter.thumbnail || '/static/og-image.jpg'}
        type="article"
      />
      <Layout>

        <header>
          <div className='container mx-auto'>
            <PageTitle title={frontmatter.title} summary={frontmatter.summary} date={frontmatter.date} />
          </div>
        </header>

        <main>
          <div className='container mx-auto flex'>
            <div className='flex flex-wrap w-1/4 p-4 pb-10'>
            </div>
            <div className='flex flex-wrap w-2/4 p-4 pb-10'>
              {processedContent}
            </div>
            <div className='flex flex-wrap w-1/4 p-4 pb-10'>
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

export default Post;