import React from 'react';
import { title } from '../../../constants';

class Header extends React.Component {

  render () {
    return (
      <header className="row">
        <h1>{title}</h1>
      </header>
    );
  }

};

export default Header;
