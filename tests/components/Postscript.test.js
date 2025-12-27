import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Postscript from '../../components/Postscript'

describe('Postscript Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Postscript />)
    expect(container).toBeInTheDocument()
  })

  it('renders a section element', () => {
    const { container } = render(<Postscript />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('has postscript class', () => {
    const { container } = render(<Postscript />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('postscript')
  })

  it('has bg-gray-800 background class', () => {
    const { container } = render(<Postscript />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-theme-primary')
  })

  it('contains container with mx-auto', () => {
    const { container } = render(<Postscript />)
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
    expect(containerDiv).toHaveClass('mx-auto')
  })

  it('contains flex wrapper', () => {
    const { container } = render(<Postscript />)
    const flexWrapper = container.querySelector('.flex.flex-wrap')
    expect(flexWrapper).toBeInTheDocument()
  })
})
