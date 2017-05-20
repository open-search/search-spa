import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { error } from '../../../constants';
import NotFound from '..';

it('renders without crashing', () => {
  shallow(<NotFound />);
});

it('should have a not found message', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.text()).toEqual(`${error['404']}`);
});
