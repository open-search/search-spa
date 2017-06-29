import React from 'react';
import { mount, render } from 'enzyme';
import Search from '..';

it('should have SearchForm element', () => {
  const search = mount(<Search />);
  expect(search.find('form').length).toEqual(1);
});

it('should have a spinner element', () => {
  const search = mount(<Search />);
  expect(search.find('.spinner').length).toEqual(0);
  search.setProps({ busy: true });
  expect(search.find('.spinner').length).toEqual(1);
});

it('should have an error element', () => {
  const search = mount(<Search />);
  search.setProps({ error: 'custom message' });
  expect(search.find('.error').length).toEqual(1);
  expect(search.find('.error').text()).toEqual('custom message');
});

it('should have a serach results element', () => {
  const search = mount(<Search />);
  expect(search.find('#results').length).toEqual(0);
  search.setProps({ results: { hits: { total: 0 } } });
  expect(search.find('h2').text()).toEqual('No results');
});
