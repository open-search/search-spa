import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { title } from '../../../../constants';
import Header from '..';

it('should have a header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toEqual(`${title}`);
});
