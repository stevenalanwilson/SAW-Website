import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
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
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.thumbnail.fields.file.url}
              title={p.fields.title}
            />
          ))
        : null}
    </>
  )
}

export default HomePage
