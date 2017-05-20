import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { title, year } from '../../../constants';
import Footer from '..';

it('Footer renders without crashing', () => {
  shallow(<Footer />);
});

it('Footer should have footer element', () => {
  const footer = shallow(<Footer />);
  expect(footer.text()).toEqual(`© ${title} ${year}`);
});
