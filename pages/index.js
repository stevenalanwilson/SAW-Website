import Head from 'next/head'
import Post from '../components/post'
import Layout from '../components/Layout'
import SiteTitle from '../components/sitetitle'
import PostscriptItem from '../components/PostscriptItem'

import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'

import fetchContentType from '../services/fetchContentType'
import fetchEntriesForContentType from '../services/fetchEntriesForContentType'

import untils from '../utils'


const index = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson</title>
      </Head>
      <Layout>
      <section>
        <div className='container mx-auto'>
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
        </div>
      </section>

      <section className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {props.activities.map(activity => (
              <PostscriptItem
                title={activity.activity}
                key={activity.key}
                image={activity.image}
                caption={activity.description}
                description={activity.description}
              />
            ))}
          </div>
        </div>
      </section>
      </Layout>
      
    </>
  )
}

index.getInitialProps = async () => {
  const contentArticleType = await fetchContentType('article', contentfulClient, Sentry)
  const allPosts = await fetchEntriesForContentType(contentArticleType.sys.id, contentfulClient, Sentry)
  const contentActivityType = await fetchContentType('activity', contentfulClient, Sentry)
  const allActivities = await fetchEntriesForContentType(contentActivityType.sys.id, contentfulClient, Sentry)
  return {
    activities: untils.formatRawActivityData(allActivities),
    posts: untils.formatRawArticleData(allPosts)
  }
}

export default index
