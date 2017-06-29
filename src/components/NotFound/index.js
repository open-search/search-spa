import React from 'react';
import { error } from '../../../constants';

class NotFound extends React.Component {

  render() {
    return (
      <section>
        {error['404']}
      </section>
    );

  }

}

export default NotFound;
