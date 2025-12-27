import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import * as prod from 'react/jsx-runtime'

export default function Post({ content, className = '' }) {
  // Process markdown content safely using rehype-react
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      ...prod,
      components: {
        /* eslint-disable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */
        p: (props) => <p className='text-lg leading-relaxed mb-5' {...props} />,
        h1: (props) => <h1 className='text-3xl font-bold leading-relaxed mb-5' {...props} />,
        h2: (props) => <h2 className='text-2xl font-bold leading-relaxed mb-5' {...props} />,
        h3: (props) => <h3 className='text-xl font-bold leading-relaxed mb-5' {...props} />,
        h4: (props) => <h4 className='text-lg font-bold leading-relaxed mb-5' {...props} />,
        h5: (props) => <h5 className='text-base font-bold leading-relaxed mb-5' {...props} />,
        ul: (props) => <ul className='list-disc list-inside mb-5' {...props} />,
        ol: (props) => <ol className='list-decimal list-inside mb-5' {...props} />,
        li: (props) => <li className='text-lg leading-relaxed mb-2' {...props} />,
        a: (props) => <a className='text-blue-600 hover:underline' {...props} />,
        /* eslint-enable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */
        img: (props) => (
          <span className='block mb-5 relative w-full' style={{ aspectRatio: '16/9' }}>
            <Image
              src={props.src || ''}
              alt={props.alt || ''}
              fill
              className='object-contain'
              sizes='100vw'
            />
          </span>
        ),
        blockquote: (props) => (
          <blockquote className='border-l-4 border-gray-300 pl-4 italic mb-5' {...props} />
        ),
        code: (props) => <code className='bg-gray-100 px-2 py-1 rounded text-sm' {...props} />,
        pre: (props) => <pre className='bg-gray-100 p-4 rounded overflow-x-auto mb-5' {...props} />,
      },
    })

  const processedContent = processor.processSync(content).result

  return <article className={className}>{processedContent}</article>
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
}
