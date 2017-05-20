import React, { Component } from 'react';

import Navigation from '../Navigation';
import { api, pagination } from '../../constants';
import { get } from '../Utils';

class App extends Component {

  constructor() {
    super();
    this.state = {
      busy: false,
      error: '',
      results: {},
      query: {
        type: 'all',
        term: '',
      },
      page: {
        from: pagination.from,
        size: pagination.size,
      },
    };
    this.doSearch = this.doSearch.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.setPagination = this.setPagination.bind(this);
  }

  setQuery(query) {
    this.setState({ query, page: { from: pagination.from, size: pagination.size } }, this.doSearch);
  }

  setPagination(page) {
    this.setState({ page }, this.doSearch);
  }

  doSearch() {

    this.setState({ results: {}, busy: true });

    get(generateQuery(this.state))
      .then(data => {
        this.setState({ results: data, error: '', busy: false, });
      })
      .catch(error => {
        this.setState({ error: error.message, busy: false, });
      });
  }

  render() {
    return (
      <Navigation
        setQuery={this.setQuery}
        busy={this.state.busy}
        error={this.state.error}
        results={this.state.results}
        page={this.state.page}
        setPagination={this.setPagination} />
    );
  }
}

function generateQuery({ query, page }) {
  return `${api}?q=${query.term}&type=${query.type}&from=${page.from}&size=${page.size}`;
}

export default App;
