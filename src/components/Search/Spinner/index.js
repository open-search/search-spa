import React from 'react';

export default props => (
  props.busy ? (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>) : null
);
