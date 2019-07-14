import { useEffect, useState } from 'react'
import '../static/screen.scss'
import Head from 'next/head'
import Post from '../components/post'
import Header from '../components/header'
import Title from '../components/title'
import fetchContentType from '../services/fetchContentType'
import fetchEntriesForContentType from '../services/fetchEntriesForContentType'

function HomePage() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const contentArticleType = await fetchContentType('article');      
      const  allPosts = await fetchEntriesForContentType(contentArticleType.sys.id);
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>About</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono"
          type="text/css"
        />
      </Head>
      <Header />
      <Title />
      <main>
        <div className="container">
          <p>About</p>
        </div>
        <style jsx>{`

          
        .container {
              width: 1200px;
              margin: 0 auto;
              display: flex;
              flex-flow: row wrap;
          }
        `}</style>
      </main>
    </>
  )
}

export default HomePage
