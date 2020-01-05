import '../static/screen.scss'

import Head from 'next/head'
import Layout from '../components/Layout'

import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'

import fetchEntity from '../services/fetchEntry'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const Post = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson {props.content.title}</title>
      </Head>
      <Layout>
        <div className='flex'>
          <div className='w-3/4 p-2 main'>
            <h1>{props.content.title}</h1>
            {documentToReactComponents(props.content.body, options)}
          </div>
          <div className='w-1/4 p-2 sidebar'>
            <div className='content-box borders bottom three'>
              <h2 className='underline'>Articles</h2>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}

const renderInlineImage = file => <div dangerouslySetInnerHTML={{ __html: `<img alt="${file.alt}" src="${file.url}"/>` }} />

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return renderInlineImage(node.data.target.fields.file)
    }
  }
}
Post.getInitialProps = async (context) => {
  const { id } = context.query
  const entity = await fetchEntity(id, Sentry, contentfulClient)
  return {
    content: entity.fields
  }
}
export default Post
