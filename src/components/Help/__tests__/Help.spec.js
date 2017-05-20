import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Help from '..';

it('renders without crashing', () => {
  shallow(<Help />);
});
