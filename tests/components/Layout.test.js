import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '../../components/Layout'

// Mock the child components
jest.mock('../../components/SiteHeader', () => {
  return function SiteHeader() {
    return <div data-testid="site-header">Site Header</div>
  }
})

jest.mock('../../components/Footer', () => {
  return function Footer() {
    return <div data-testid="footer">Footer</div>
  }
})

jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => <div data-testid="analytics">Analytics</div>
}))

describe('Layout Component', () => {
  it('renders SiteHeader component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )
    expect(screen.getByTestId('site-header')).toBeInTheDocument()
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
    expect(screen.getByTestId('footer')).toBeInTheDocument()
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
