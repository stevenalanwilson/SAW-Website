import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkWithMe from '../../components/features/WorkWithMe'

// Mock the siteConfig
jest.mock('../../config/siteConfig', () => ({
  __esModule: true,
  default: {
    contact: {
      email: {
        user: 'hello',
        domain: 'stevenalanwilson.com',
        full: 'hello@stevenalanwilson.com',
      },
      phone: {
        prefix: '+44',
        number: '7720846954',
        full: '+447720846954',
        display: '+44 7720846954',
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

describe('WorkWithMe Component', () => {
  it('renders the Work With Me heading', () => {
    render(<WorkWithMe />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Work With Me')
  })

  it('renders the elevator pitch', () => {
    render(<WorkWithMe />)
    expect(screen.getByText(/Ready to transform your technical leadership/i)).toBeInTheDocument()
  })

  it('renders the Operating Areas heading', () => {
    render(<WorkWithMe />)
    expect(screen.getByText('Operating Areas')).toBeInTheDocument()
  })

  it('renders all locations', () => {
    render(<WorkWithMe />)
    const locationsText = screen.getByText(/London.*Manchester.*Leeds.*Derby.*Birmingham/i)
    expect(locationsText).toBeInTheDocument()
  })

  it('renders LinkedIn button with correct link', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toBeInTheDocument()
    expect(linkedInButton).toHaveAttribute('href', 'https://www.linkedin.com/in/stevenalanwilson/')
  })

  it('renders email link with obfuscated email', () => {
    render(<WorkWithMe />)
    const emailLink = screen.getByRole('link', {
      name: /Send email to hello@stevenalanwilson.com/i,
    })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })

  it('LinkedIn button opens in new tab', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveAttribute('target', '_blank')
    expect(linkedInButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct styling to LinkedIn button', () => {
    render(<WorkWithMe />)
    const linkedInButton = screen.getByRole('link', { name: /Connect on LinkedIn/i })
    expect(linkedInButton).toHaveClass('bg-brand-linkedin', 'hover:bg-brand-linkedin-hover')
  })

  it('applies correct styling to email button', () => {
    render(<WorkWithMe />)
    const emailButton = screen.getByRole('link', {
      name: /Send email to hello@stevenalanwilson.com/i,
    })
    expect(emailButton).toHaveClass(
      'border',
      'border-theme-footer-text',
      'hover:bg-theme-footer-text',
      'hover:text-theme-primary'
    )
  })

  it('constructs email from obfuscated parts', () => {
    render(<WorkWithMe />)
    const emailLink = screen.getByRole('link', {
      name: /Send email to hello@stevenalanwilson.com/i,
    })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@stevenalanwilson.com')
  })
})
