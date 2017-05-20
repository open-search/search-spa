import React, { Component } from 'react';

class Preview extends Component {

  render () {
    return (
      <section
        className={'preview-window' + (this.props.isOpen ? '__open' : '__closed')}
        onClick={() => this.props.hideModal()}>
        <article>{ this.props.content }</article>
      </section>
    );
  }

}

export default Preview;
