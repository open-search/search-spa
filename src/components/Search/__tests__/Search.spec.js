import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Search from '..';

it('renders without crashing', () => {
  shallow(<Search />);
});
