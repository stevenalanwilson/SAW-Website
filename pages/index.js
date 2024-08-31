import fs from 'fs';
import matter from 'gray-matter';

import Head from 'next/head'
import Layout from '../components/Layout'
import SiteTitle from '../components/sitetitle'
import ListPosts from "../components/listposts"

const createPageSlug = postFile => postFile.replace('.md', '')

const loadPosts = files => files.map((fileName) => {
  const slug = createPageSlug(fileName)
  const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
  const { data: frontmatter } = matter(readFile)
  return {
    slug,
    frontmatter
  };  
})

const getPosts = async () => {
  try {
    const files = fs.readdirSync('posts')
    return loadPosts(files)
  } catch (error) {
    throw error
  }
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { 
    props: { posts } 
  }
};

const index = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson Limited - Technical Leadership Consultancy</title>
      </Head>
      <Layout>
        
      <header>
        <div className='container mx-auto'>
          <SiteTitle />
        </div>
      </header>

      <main>
        <div className='container mx-auto'>
          <ListPosts posts={props.posts}/>
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



export default index
