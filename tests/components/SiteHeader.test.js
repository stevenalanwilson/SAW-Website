import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SiteHeader from '../../components/SiteHeader'

describe('SiteHeader Component', () => {
  it('renders site title/logo', () => {
    render(<SiteHeader />)
    expect(screen.getByText('Steven Alan Wilson Limited - Technical Leadership Consultant')).toBeInTheDocument()
  })

  it('renders navigation menu', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('renders Home link', () => {
    render(<SiteHeader />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThan(0)
    expect(homeLinks[0]).toHaveAttribute('href', '/')
  })

  it('renders About link', () => {
    render(<SiteHeader />)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks.length).toBeGreaterThan(0)
    expect(aboutLinks[0]).toHaveAttribute('href', '/about')
  })

  it('logo links to homepage', () => {
    render(<SiteHeader />)
    const logoLink = screen.getByRole('link', { name: 'Steven Alan Wilson Limited - Technical Leadership Consultant' })
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
