import Head from 'next/head'
import Layout from '../components/layout'
import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'
import fetchEntity from '../services/fetchEntry'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown'
import { BLOCKS } from '@contentful/rich-text-types'

const post = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson {props.title}</title>
      </Head>
      <Layout>
        <div className='flex'>
          <div className='w-3/4 p-2 main'>
            <h1 className='heading-2 font-bold text-6xl'>{props.title}</h1>
            {documentToReactComponents(props.body, options)}
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

const renderInlineImage = file => <div dangerouslySetInnerHTML={{ __html: `<img alt='${file.alt}' src='${file.url}' class='mb-4' />` }} />

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return renderInlineImage(node.data.target.feilds.file)
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className='heading-1 text-6xl'>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className='heading-2 text-5xl'>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className='heading-3 text-4xl'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className='heading-4 text-3xl'>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className='heading-5 text-2xl'>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className='heading-6 text-xl'>{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <h6 className='leading-loose mb-4'>{children}</h6>
    )
  }
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
    body: body
  }
}
export default post
