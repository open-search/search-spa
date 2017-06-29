import React from 'react';
import { mount, render, shallow } from 'enzyme';
import SearchForm from '..';

it('submits form when button is clicked', () => {
  const callback = jasmine.createSpy();
  const wrapper = mount(<SearchForm setQuery={callback} />);
  wrapper.find('[type="submit"]').get(0).click();
  expect(callback).toHaveBeenCalled();
});
