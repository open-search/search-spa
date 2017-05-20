import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Result from '..';

it('renders without crashing', () => {
  shallow(<Result />);
});
