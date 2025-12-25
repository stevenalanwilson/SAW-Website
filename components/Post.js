import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'

export default function Post({ content, className = '' }) {
  // Process markdown content safely using rehype-react
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      jsx: React.createElement,
      jsxs: React.createElement,
      components: {
        p: (props) => <p className='text-lg leading-relaxed mb-5' {...props} />,
        h1: (props) => <h1 className='text-3xl font-bold leading-relaxed mb-5' {...props} />,
        h2: (props) => <h2 className='text-2xl font-bold leading-relaxed mb-5' {...props} />,
        h3: (props) => <h3 className='text-xl font-bold leading-relaxed mb-5' {...props} />,
        h4: (props) => <h4 className='text-lg font-bold leading-relaxed mb-5' {...props} />,
        h5: (props) => <h5 className='text-base font-bold leading-relaxed mb-5' {...props} />,
      }
    })

  const processedContent = processor.processSync(content).result

  return (
    <article className={className}>
      {processedContent}
    </article>
  )
}
