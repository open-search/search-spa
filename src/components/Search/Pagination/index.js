import React from 'react';
import { pagination } from '../../../../constants';

function getPageArray(current, limit, total) {
  let result = [];
  let resultPages = Array.from(new Array(total), (item, index) => index + 1);
  if (current < limit) {
    result = resultPages.slice(0, limit);
  } else if (current > (total - limit) + 1) {
    result = resultPages.slice(total - limit, total);
  } else {
    result = resultPages.slice(current - Math.ceil(limit / 2), current + Math.floor(limit / 2));
  }

  return result;
}

class Pagination extends React.Component {

  render() {

    let current = Math.floor(this.props.from / this.props.size) + 1;
    let total = Math.ceil(this.props.total / this.props.size);

    return (
      <header className="row">
        <h2>{this.props.total} results,
          <span> page {current} of {total}
         </span>
        </h2>
        <List
          current={current}
          total={total}
          size={this.props.size}
          setPagination={this.props.setPagination} />
      </header>
    );
  }

}

class List extends React.Component {
  render() {

    let pageList = getPageArray(this.props.current, pagination.limit, this.props.total)
      .map(page => {
        if (page === this.props.current) {
          return <li key={page}>{page}</li>;
        } else {
          return (<li key={page}><a style={{ cursor: 'pointer' }}
            onClick={this.props.setPagination.bind(null,
            { from: (page - 1) * this.props.size, size: this.props.size })}>{page}</a>
          </li>);
        }
      });

    return <ul>{pageList}</ul>;
  }
}

export default Pagination;
