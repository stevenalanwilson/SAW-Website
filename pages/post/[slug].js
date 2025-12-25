import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router'
import validator from 'validator';
import dayjs from 'dayjs';



import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import addClasses from 'rehype-class-names'


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

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(addClasses, {
      'p,h1,h2,h3,h4,h5': 'leading-relaxed mb-5',
      h1: 'text-3xl font-bold',
      h2: 'text-2xl font-bold',
      p: 'text-lg'
    })
    .process(content);

  const contentHtml = processedContent.toString();
  if (!contentHtml && !frontmatter) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      frontmatter,
      contentHtml,
      slug
    }
  }


}

function Post({ frontmatter, contentHtml, slug }) {
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
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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