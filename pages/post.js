import Head from 'next/head'
import Layout from '../components/Layout'
import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'
import fetchEntity from '../services/fetchEntry'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown'
import untils from '../utils'

const post = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson {props.title}</title>
      </Head>
      <Layout>
        <div className='container mx-auto'>
          <div className='flex'>
            <div className='w-full bg-gray-300 bg-auto bg-center h-64 my-5' style={{ backgroundImage: 'url(' + props.img + ')' }} />
          </div>
          <div className='flex'>
            <div className='w-3/4 pb-2 px-2 main'>
              <h1 className='heading-1 font-bold text-6xl leading-tight mb-4'>{props.title}</h1>
              {documentToReactComponents(props.body, untils.typeographyStyling)}
            </div>
            <div className='w-1/4 p-2 sidebar'>
              <div className='content-box borders bottom three'>
                <h2 className='underline'>Articles</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

post.getInitialProps = async (context) => {
  const { id } = context.query
  const entity = await fetchEntity(id, Sentry, contentfulClient)
  const body = await richTextFromMarkdown(entity.fields.body, node => (
    {
      nodeType: 'embedded-asset-block',
      content: [],
      data: {
        target: {
          feilds: {
            file: {
              url: node.url
            }
          },
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: '.........'
          }
        }
      }
    }
  ))

  return {
    title: entity.fields.title,
    body: body,
    img: entity.fields.thumbnail.fields.file.url
  }
}
export default post
