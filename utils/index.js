
import { BLOCKS } from '@contentful/rich-text-types'

const production = process.env.NODE_ENV === 'production'

const renderInlineImage = (file) => {
  return <div dangerouslySetInnerHTML={{ __html: `<img alt='${file.alt}' src='${file.url}' class='mb-4 border divide-gray-600' />` }} />
}

const typeographyStyling = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return renderInlineImage(node.data.target.feilds.file)
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className='heading-1 text-6xl leading-snug mb-4'>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className='heading-2 text-5xl leading-snug mb-4'>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className='heading-3 text-4xl leading-snug mb-4'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className='heading-4 text-3xl leading-snug mb-4'>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className='heading-5 text-2xl leading-snug mb-4'>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className='heading-6 text-xl leading-snug mb-4'>{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className='text-lg leading-loose mb-4'>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className='list-disc px-10 mb-4'>{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className=''>{children}</li>
    )
  }
}

export default {
  isProduction: production,

  typeographyStyling: typeographyStyling,

  formatRawArticleData: (data) => {
    return data.map(item => ({
      key: item.sys.id,
      date: item.fields.date,
      image: item.fields.thumbnail.fields.file.url,
      title: item.fields.title,
      summary: item.fields.summary
    }))
  }

}
