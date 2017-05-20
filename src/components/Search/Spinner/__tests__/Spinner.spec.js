import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Spinner from '..';

it('renders without crashing', () => {
  shallow(<Spinner />);
});
