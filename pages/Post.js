import '../static/screen.scss'
import theme from '../styles/theme'

import Head from 'next/head'
import Layout from '../components/Layout'
import Sociallinks from '../components/widgets/Sociallinks'

import contentfulClient from '../clients/contentfulClient'
import Sentry from '../log/sentry'

import fetchEntity from '../services/fetchEntry'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Post = props => {
  return (
    <>
      <Head>
        <title>Steven Alan Wilson {props.content.title}</title>
      </Head>
      <Layout>
        <div className='main'>
          <h1>{props.content.title}</h1>

          {props.body}

        </div>
        <div className='sidebar'>

          <Sociallinks />

          <div className='content-box borders bottom three'>
            <h2 className='underline'>Articles</h2>
          </div>
        </div>
      </Layout>
      <style jsx>{`
                .main {
                  flex: 0 0 72%;
                  margin: 0 1% 2%;
                  padding: ${theme.spacing.basePadding}/2 0;
                }
                .sidebar {
                  flex: 0 0 24%;
                  margin: 0 1% 2%;
                  padding: ${theme.spacing.basePadding}/2 0;
                }
                h2.underline {
                  border-bottom: 1px solid ${theme.colours.black};
                  line-height: 1;
                  padding-bottom: ${theme.spacing.basePadding};
                  margin-bottom: ${theme.spacing.baseMargin};
                }
              `}
      </style>
    </>
  )
}

const renderInlineImage = file => <div dangerouslySetInnerHTML={{ __html: `<img alt="${file.alt}" src="${file.url}"/>` }} />

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      return renderInlineImage(node.data.target.fields.file)
    }
  }
}
Post.getInitialProps = async (context) => {
  const { id } = context.query
  const entity = await fetchEntity(id, Sentry, contentfulClient)
  return {
    content: entity.fields,
    body: documentToReactComponents(entity.fields.body, options)
  }
}
export default Post
