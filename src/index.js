import React from 'react';
import { render } from 'react-dom';

import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';

import App from './components/App';

render(<App />, document.querySelector('#main'));
