import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { pagination } from '../../../../constants';
import Pagination from '..';

it('renders without crashing', () => {
  shallow(<Pagination />);
});

it('renders a list', () => {
  const from = 0;
  const total = 10;
  const size = 1;
  const callback = jasmine.createSpy();
  const wrapper = mount(<Pagination
    from={from} total={total} size={size} setPagination={callback} />);
  expect(wrapper.find('h2').text()).toEqual('10 results, page 1 of 10');
  expect(wrapper.find('ul').text()).toEqual('12345678910');
});
