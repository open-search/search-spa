import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { mount, render, shallow } from 'enzyme';

import Navigation from '..';
import Search from '../../Search';
import Help from '../../Help';

const wrapper = shallow(<Navigation />);

const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  const routeProps = route.props();
  pathMap[routeProps.path] = routeProps.component || routeProps.render;
  return pathMap;
}, {});

it('search should be default route', () => {
  expect(pathMap['/'].name).toBe('bound SearchPage');
});

it('should have a help page', () => {
  expect(pathMap['/help']).toBe(Help);
});
