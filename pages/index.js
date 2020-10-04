import Head from 'next/head'
import Post from '../components/post'
import Layout from '../components/Layout'
import SiteTitle from '../components/sitetitle'

import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'

import fetchContentType from '../services/fetchContentType'
import fetchEntriesForContentType from '../services/fetchEntriesForContentType'

import { formatRawArticleData } from '../utils'

const index = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson</title>
      </Head>
      <Layout>
        <SiteTitle />
        <div className='flex flex-wrap'>
          {props.posts.map(post => (
            <Post
              key={post.key}
              date={post.date}
              id={post.key}
              image={post.image}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

index.getInitialProps = async () => {
  const contentArticleType = await fetchContentType('article', contentfulClient, Sentry)
  const allPosts = await fetchEntriesForContentType(contentArticleType.sys.id, contentfulClient, Sentry)
  return {
    posts: formatRawArticleData(allPosts)
  }
}

export default index
