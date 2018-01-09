import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('changes state after click', () => {
  const app = mount(<App />)
  const button = app.find('button')
  let inactiveCount = app.find('.inactive').length
  button.simulate('submit') // https://github.com/airbnb/enzyme/issues/308
  let newInactiveCount = app.find('.inactive').length
  expect(inactiveCount).toEqual(newInactiveCount + 1)
})