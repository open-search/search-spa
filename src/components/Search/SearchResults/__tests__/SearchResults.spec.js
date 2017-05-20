import React from 'react';
import { mount, render, shallow } from 'enzyme';
import SearchResults from '..';

it('renders without crashing', () => {
  shallow(<SearchResults />);
});
