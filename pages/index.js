import { useEffect, useState } from 'react'
import '../static/screen.scss'

import Head from 'next/head'
import Post from '../components/Post'
import Layout from '../components/Layout'
import Title from '../components/Title'

import fetchContentType from '../services/fetchContentType'
import fetchEntriesForContentType from '../services/fetchEntriesForContentType'

import { formatRawArticleData } from '../utils'

const HomePage = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson</title>
      </Head>
      <Layout>
        <Title />
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
      </Layout>
    </>
  )
}

HomePage.getInitialProps = async () => {
  const contentArticleType = await fetchContentType('article')
  const allPosts = await fetchEntriesForContentType(contentArticleType.sys.id)
  return {
    posts: formatRawArticleData(allPosts)
  }
}

export default HomePage
