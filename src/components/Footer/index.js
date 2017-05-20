import React from 'react';
import { title, year } from '../../constants';

class Footer extends React.Component {

  render () {
    return (
      <footer className="row">
        <p>&copy; {title} {year}</p>
      </footer>
    );
  }

};

export default Footer;
