import { expect, withTheme } from '../setup'
import React from 'react'
import NextButton from '../../src/components/NextButton'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { getDefaultTheme } from '../../src/lib/theme'

import Button from '../../src/components/Button'

let onClick = null
beforeEach(() => {
  onClick = jest.fn()
})

it('renders correctly', () => {
  const tree = renderer
    .create(withTheme(<NextButton onClick={onClick}>Foobar</NextButton>))
    .toJSON()
  jestExpect(tree).toMatchSnapshot()
})

it('forwards props', () => {
  const wrapper = shallow(<NextButton theme={getDefaultTheme()} onClick={onClick}>Foobar</NextButton>).dive()
  expect(wrapper.find(Button).first()).to.have.prop('onClick').equal(onClick)
  expect(wrapper.find(Button).first()).to.have.prop('className')
  expect(wrapper.find('span').first()).to.have.text('Foobar')
})
