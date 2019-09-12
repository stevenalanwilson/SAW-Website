import React from 'react'
import Title from '../../components/Title'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Title />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
