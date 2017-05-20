import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Help from '../Help';
import Search from '../Search';
import NotFound from '../NotFound';

function SearchPage(props) {
  return (
    <Search
      setQuery={this.props.setQuery}
      busy={this.props.busy}
      error={this.props.error}
      results={this.props.results}
      page={this.props.page}
      setPagination={this.props.setPagination}
    />);
};

class Navigation extends Component {

  render () {
    return (
      <Router>
        <div className="content">
          <nav>
            <ul>
              <li><Link to="/">Search</Link></li>
              <li><Link to="/help">Help</Link></li>
            </ul>
          </nav>
          <main className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={SearchPage.bind(this)} />
              <Route exact path="/help" component={Help} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

};

export default Navigation;
