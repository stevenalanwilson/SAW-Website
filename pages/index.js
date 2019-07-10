import { useEffect, useState } from 'react'
import '../static/screen.scss'
import Head from 'next/head'
import Post from '../components/post'
import Header from '../components/header'
import Title from '../components/title'
import fetchContentType from '../services/fetchContentType'
import fetchEntriesForContentType from '../services/fetchEntriesForContentType'

function HomePage() {
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono"
          type="text/css"
        />
      </Head>
      <Header />
      <Title />
      
    </>
  )
}

export default HomePage
