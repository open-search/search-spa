import React, { Component } from 'react';

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      type: 'all',
    };
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(event) {
    event.preventDefault();
    const query = {
      term: this.term.value,
      type: this.state.type,
    };
    this.props.setQuery(query);
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form action="/search" method="get" onSubmit={this.doSearch}>
          <input
            ref={input => this.term = input}
            type="search" name="search"
            placeholder="Search term" />
          <button
            type="submit"
            id="search-submit"
            className="button-primary">Search</button>
        </form>
      </div>
    );
  }

};

export default SearchForm;
