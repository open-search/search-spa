import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Preview from '..';

it('renders without crashing', () => {
  shallow(<Preview />);
});
