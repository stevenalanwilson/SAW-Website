
import Head from 'next/head'
import Layout from '../components/Layout'
import Title from '../components/Title'

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
        <Title />
        <div className='flex flex-wrap' />
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
