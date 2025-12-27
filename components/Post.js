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
  // Components now use CSS custom properties for theming
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      ...prod,
      components: {
        /* eslint-disable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */
        p: (props) => <p className='text-lg leading-relaxed mb-5 text-theme-text' {...props} />,
        h1: (props) => (
          <h1 className='text-3xl font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h2: (props) => (
          <h2
            className='text-2xl font-bold leading-relaxed mb-5 border-l-4 border-theme-accent pl-4 text-theme-primary'
            {...props}
          />
        ),
        h3: (props) => (
          <h3 className='text-xl font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h4: (props) => (
          <h4 className='text-lg font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h5: (props) => (
          <h5 className='text-base font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        ul: (props) => <ul className='list-disc list-inside mb-5 text-theme-text' {...props} />,
        ol: (props) => <ol className='list-decimal list-inside mb-5 text-theme-text' {...props} />,
        li: (props) => <li className='text-lg leading-relaxed mb-2 text-theme-text' {...props} />,
        a: (props) => (
          <a
            className='font-semibold hover:underline transition-colors text-theme-primary'
            {...props}
          />
        ),
        /* eslint-enable jsx-a11y/heading-has-content, jsx-a11y/anchor-has-content */
        img: (props) => (
          <span className='block mb-5 relative w-full' style={{ aspectRatio: '16/9' }}>
            <Image
              src={props.src || ''}
              alt={props.alt || ''}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 66vw'
            />
          </span>
        ),
        blockquote: (props) => (
          <blockquote
            className='border-l-4 border-theme-accent bg-theme-bg text-theme-text pl-4 py-2 italic mb-5'
            {...props}
          />
        ),
        code: (props) => (
          <code className='px-2 py-1 rounded text-sm bg-theme-accent text-theme-bg' {...props} />
        ),
        pre: (props) => (
          <pre
            className='p-4 rounded overflow-x-auto mb-5 bg-theme-accent text-theme-bg'
            {...props}
          />
        ),
      },
    })

  const processedContent = processor.processSync(content).result

  return <article className={className}>{processedContent}</article>
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
}
