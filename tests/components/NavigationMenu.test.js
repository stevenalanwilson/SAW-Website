import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavigationMenu from '../../components/NavigationMenu'

const mockMenuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

describe('NavigationMenu Component', () => {
  describe('Desktop Navigation', () => {
    it('renders all menu items', () => {
      render(<NavigationMenu items={mockMenuItems} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('renders links with correct href attributes', () => {
      render(<NavigationMenu items={mockMenuItems} />)
      const homeLink = screen.getByRole('link', { name: 'Home' })
      const aboutLink = screen.getByRole('link', { name: 'About' })

      expect(homeLink).toHaveAttribute('href', '/')
      expect(aboutLink).toHaveAttribute('href', '/about')
    })

    it('applies desktop styling classes', () => {
      const { container } = render(<NavigationMenu items={mockMenuItems} />)
      const list = container.querySelector('ul')

      expect(list).toHaveClass('flex', 'justify-end', 'flex-wrap', 'gap-2')
    })

    it('applies desktop link classes', () => {
      render(<NavigationMenu items={mockMenuItems} />)
      const homeLink = screen.getByRole('link', { name: 'Home' })

      expect(homeLink).toHaveClass('text-white', 'py-4', 'hover:scale-105')
    })
  })

  describe('Mobile Navigation', () => {
    it('renders all menu items in mobile mode', () => {
      render(<NavigationMenu items={mockMenuItems} mobile={true} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('applies mobile styling classes', () => {
      const { container } = render(<NavigationMenu items={mockMenuItems} mobile={true} />)
      const list = container.querySelector('ul')

      expect(list).toHaveClass('flex', 'flex-col', 'gap-2', 'py-4')
    })

    it('applies mobile link classes', () => {
      render(<NavigationMenu items={mockMenuItems} mobile={true} />)
      const homeLink = screen.getByRole('link', { name: 'Home' })

      expect(homeLink).toHaveClass('block', 'text-white')
    })

    it('calls onItemClick when link is clicked', () => {
      const mockOnClick = jest.fn()
      render(<NavigationMenu items={mockMenuItems} mobile={true} onItemClick={mockOnClick} />)

      const homeLink = screen.getByRole('link', { name: 'Home' })
      fireEvent.click(homeLink)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onItemClick if not provided', () => {
      // Should not throw error
      render(<NavigationMenu items={mockMenuItems} mobile={true} />)
      const homeLink = screen.getByRole('link', { name: 'Home' })

      expect(() => fireEvent.click(homeLink)).not.toThrow()
    })
  })

  describe('Edge Cases', () => {
    it('handles single menu item', () => {
      const singleItem = [{ href: '/', label: 'Home' }]
      render(<NavigationMenu items={singleItem} />)

      expect(screen.getByText('Home')).toBeInTheDocument()
    })

    it('handles empty items array', () => {
      const { container } = render(<NavigationMenu items={[]} />)
      const list = container.querySelector('ul')

      expect(list).toBeInTheDocument()
      expect(list.children).toHaveLength(0)
    })

    it('handles items with special characters in labels', () => {
      const specialItems = [
        { href: '/test', label: 'Test & More' },
        { href: '/quotes', label: 'Item with "quotes"' },
      ]
      render(<NavigationMenu items={specialItems} />)

      expect(screen.getByText('Test & More')).toBeInTheDocument()
      expect(screen.getByText('Item with "quotes"')).toBeInTheDocument()
    })

    it('handles long menu item labels', () => {
      const longItems = [
        {
          href: '/long',
          label: 'This is a very long menu item label that might wrap',
        },
      ]
      render(<NavigationMenu items={longItems} />)

      expect(screen.getByText(/very long menu item/i)).toBeInTheDocument()
    })

    it('uses href as key for list items', () => {
      const { container } = render(<NavigationMenu items={mockMenuItems} />)
      const listItems = container.querySelectorAll('li')

      expect(listItems).toHaveLength(3)
    })
  })

  describe('Styling', () => {
    it('applies base classes to all links', () => {
      render(<NavigationMenu items={mockMenuItems} />)
      const links = screen.getAllByRole('link')

      links.forEach((link) => {
        expect(link).toHaveClass('text-white', 'py-3', 'px-5')
      })
    })

    it('applies hover classes to all links', () => {
      render(<NavigationMenu items={mockMenuItems} />)
      const links = screen.getAllByRole('link')

      links.forEach((link) => {
        expect(link).toHaveClass('hover:text-black', 'hover:bg-white', 'rounded')
      })
    })
  })
})
