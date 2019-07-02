import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import client from '../clients/contentfulClient'

function HomePage() {
  
  async function fetchContentTypes() {
    const types = await client.getContentTypes()
    console.log(types);
    if (types.items) return types.items
    console.log('Error getting Content Types.')
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes()
      const allPosts = await fetchEntriesForContentType(contentTypes[0])
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
          console.log(p),
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
