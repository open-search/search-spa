import React from 'react';

class Result extends React.Component {

  constructor (props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }

  getContent (item) {
    if (item.highlight && item.highlight['attachment.content']) {
      return item.highlight['attachment.content'].map((highlight, index) =>
        <p className={item._type} key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
      );
    }

    return null;
  }

  render() {
    if (this.props.item === undefined) {
      return (<article>Invalid result</article>);
    }

    let { _source, _type, _index, _id } = this.props.item;

    return (
      <article>
        <h3>{_source.title || 'Missing Title'}</h3>
        { this.getContent(this.props.item) }
        <ul>
          <li>Download <a target="_blank"
            href={_source.download}>{_source.title}</a> (pdf)
          </li>
          <li className="preview-link"><a onClick={() =>
            this.props.showModal({ index: _index, type: _type, id: _id })
          }>
            (see preview)</a></li>
          <li className="{_type}">{_type}</li>
        </ul>
      </article>
    );
  }

};

export default Result;
