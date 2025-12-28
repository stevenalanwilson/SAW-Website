import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock the unified library and its dependencies
jest.mock('unified', () => ({
  unified: () => ({
    use: jest.fn().mockReturnThis(),
    processSync: (content) => ({ result: <div data-testid='processed-content'>{content}</div> }),
  }),
}))
jest.mock('remark-parse', () => jest.fn())
jest.mock('remark-rehype', () => jest.fn())
jest.mock('rehype-react', () => jest.fn())

import Post from '../../components/content/Post'

describe('Post Component', () => {
  it('renders as an article element', () => {
    const { container } = render(<Post content='Test content' />)
    const article = container.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Post content='Test' className='custom-class' />)
    const article = container.querySelector('article')
    expect(article).toHaveClass('custom-class')
  })

  it('processes markdown content', () => {
    const { getByTestId } = render(<Post content='# Test Heading' />)
    expect(getByTestId('processed-content')).toBeInTheDocument()
  })

  it('handles empty content', () => {
    const { container } = render(<Post content='' />)
    const article = container.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('renders content inside article', () => {
    const { container } = render(<Post content='Sample markdown' />)
    const article = container.querySelector('article')
    expect(article).toContainElement(article.querySelector('[data-testid="processed-content"]'))
  })
})
