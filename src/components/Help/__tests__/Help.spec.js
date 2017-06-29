import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { help } from '../../../../constants';
import Help from '..';

it('should display a list of help articles', () => {
  const wrapper = shallow(<Help />);
  expect(wrapper.find('article').length).toEqual(help.length);
});
