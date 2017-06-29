import React, { Component } from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Spinner from './Spinner';
let Error = props => (
  props.message ? <div className="error">{props.message}</div> : null
);

class Search extends Component {

  render () {
    return (<section>
      <SearchForm setQuery={this.props.setQuery} />
      <Spinner busy={this.props.busy} />
      <Error message={this.props.error} />
      <SearchResults
        results={this.props.results}
        page={this.props.page}
        setPagination={this.props.setPagination} />
    </section>);
  }

};

export default Search;
