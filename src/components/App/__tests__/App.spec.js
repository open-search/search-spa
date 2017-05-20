import React from 'react';
import { mount, render, shallow } from 'enzyme';
import App from '..';

it('renders without crashing', () => {
  shallow(<App />);
});
