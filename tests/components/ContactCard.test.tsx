import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactCard from '../../components/cards/ContactCard'

// Mock the siteConfig
jest.mock('../../config/siteConfig', () => ({
  __esModule: true,
  default: {
    contact: {
      email: {
        user: 'hello',
        domain: 'stevenalanwilson.com',
      },
      locations: ['London', 'Manchester', 'Leeds', 'Derby', 'Birmingham'],
    },
    social: {
      linkedin: {
        title: 'Connect on LinkedIn',
        link: 'https://www.linkedin.com/in/stevenalanwilson/',
      },
    },
    content: {
      cta: {
        heading: 'Work With Me',
        message: 'Ready to transform your technical leadership and delivery?',
      },
    },
  },
}))

describe('ContactCard Component', () => {
  it('renders the Work With Me title', () => {
    render(<ContactCard />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Work With Me')
  })

  it('renders the elevator pitch', () => {
    render(<ContactCard />)
    expect(screen.getByText(/Ready to transform your technical leadership/i)).toBeInTheDocument()
  })

  it('renders Operating Areas heading', () => {
    render(<ContactCard />)
    expect(screen.getByText('Operating Areas')).toBeInTheDocument()
  })

  it('renders all location areas', () => {
    render(<ContactCard />)
    const locationsText = screen.getByText(/London.*Manchester.*Leeds.*Derby.*Birmingham/i)
    expect(locationsText).toBeInTheDocument()
  })

  it('renders LinkedIn button with correct link', () => {
    render(<ContactCard />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toBeInTheDocument()
    expect(linkedInButton).toHaveAttribute('href', 'https://www.linkedin.com/in/stevenalanwilson/')
  })

  it('renders email link with obfuscated email', () => {
    render(<ContactCard />)
    const emailLink = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })

  it('LinkedIn button opens in new tab', () => {
    render(<ContactCard />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveAttribute('target', '_blank')
    expect(linkedInButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies default styling', () => {
    const { container } = render(<ContactCard />)
    const card = container.querySelector('div')
    expect(card).toHaveClass(
      'bg-theme-primary',
      'text-theme-bg',
      'p-6',
      'border-t-4',
      'border-theme-bg'
    )
  })

  it('applies custom className', () => {
    const { container } = render(<ContactCard className='custom-class' />)
    const card = container.querySelector('div')
    expect(card).toHaveClass('custom-class')
  })

  it('applies correct styling to LinkedIn button', () => {
    render(<ContactCard />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveClass('bg-brand-linkedin', 'hover:bg-brand-linkedin-hover')
  })

  it('applies correct styling to email button', () => {
    render(<ContactCard />)
    const emailButton = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailButton).toHaveClass(
      'border',
      'border-theme-bg',
      'hover:bg-theme-bg',
      'hover:text-theme-primary'
    )
  })

  it('constructs email from obfuscated parts to prevent scraping', () => {
    render(<ContactCard />)
    const emailLink = screen.getByRole('link', { name: /hello@stevenalanwilson.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })
})
