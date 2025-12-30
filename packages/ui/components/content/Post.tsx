import Image from 'next/image'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import * as prod from 'react/jsx-runtime'
import type { ComponentPropsWithoutRef } from 'react'

interface PostProps {
  content: string
  className?: string
}

/**
 * Post component that renders markdown content as styled React components.
 * Processes markdown using unified/remark/rehype pipeline and applies theme-aware styling.
 */
export default function Post({ content, className = '' }: PostProps) {
  // Process markdown content safely using rehype-react
  // Components now use CSS custom properties for theming
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      ...prod,
      components: {
        p: (props: ComponentPropsWithoutRef<'p'>) => (
          <p className='text-lg leading-relaxed mb-5 text-theme-text' {...props} />
        ),
        h1: (props: ComponentPropsWithoutRef<'h1'>) => (
          <h1 className='text-3xl font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h2: (props: ComponentPropsWithoutRef<'h2'>) => (
          <h2
            className='text-2xl font-bold leading-relaxed mb-5 border-l-4 border-theme-accent pl-4 text-theme-primary'
            {...props}
          />
        ),
        h3: (props: ComponentPropsWithoutRef<'h3'>) => (
          <h3 className='text-xl font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h4: (props: ComponentPropsWithoutRef<'h4'>) => (
          <h4 className='text-lg font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        h5: (props: ComponentPropsWithoutRef<'h5'>) => (
          <h5 className='text-base font-bold leading-relaxed mb-5 text-theme-primary' {...props} />
        ),
        ul: (props: ComponentPropsWithoutRef<'ul'>) => (
          <ul className='list-disc list-inside mb-5 text-theme-text' {...props} />
        ),
        ol: (props: ComponentPropsWithoutRef<'ol'>) => (
          <ol className='list-decimal list-inside mb-5 text-theme-text' {...props} />
        ),
        li: (props: ComponentPropsWithoutRef<'li'>) => (
          <li className='text-lg leading-relaxed mb-2 text-theme-text' {...props} />
        ),
        a: (props: ComponentPropsWithoutRef<'a'>) => (
          <a
            className='font-semibold hover:underline transition-colors text-theme-primary'
            {...props}
          />
        ),

        img: (props: ComponentPropsWithoutRef<'img'>) => (
          <span className='block mb-5 relative w-full' style={{ aspectRatio: '16/9' }}>
            <Image
              src={typeof props.src === 'string' ? props.src : ''}
              alt={props.alt || ''}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 66vw'
            />
          </span>
        ),
        blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
          <blockquote
            className='border-l-4 border-theme-accent bg-theme-bg text-theme-text pl-4 py-2 italic mb-5'
            {...props}
          />
        ),
        code: (props: ComponentPropsWithoutRef<'code'>) => (
          <code
            className='px-2 py-1 rounded text-sm bg-theme-accent text-theme-accent-text'
            {...props}
          />
        ),
        pre: (props: ComponentPropsWithoutRef<'pre'>) => (
          <pre
            className='p-4 rounded overflow-x-auto mb-5 bg-theme-accent text-theme-accent-text'
            {...props}
          />
        ),
      },
    })

  const processedContent = processor.processSync(content).result

  return <article className={className}>{processedContent}</article>
}
