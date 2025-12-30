import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '../../components/layout/Layout'

// Mock the child components
jest.mock('../../components/layout/SiteHeader', () => {
  return function SiteHeader() {
    return <header data-testid='site-header'>Site Header</header>
  }
})

jest.mock('../../components/layout/Footer', () => {
  return function Footer() {
    return <footer data-testid='footer'>Footer</footer>
  }
})

jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => <div data-testid='analytics'>Analytics</div>,
}))

describe('Layout Component', () => {
  it('renders SiteHeader component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders Footer component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders Analytics component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )
    expect(screen.getByTestId('analytics')).toBeInTheDocument()
  })
})
