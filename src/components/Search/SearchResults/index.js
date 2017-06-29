import React from 'react';
import Result from '../Result';
import Pagination from '../Pagination';
import Preview from '../Preview';
import Spinner from '../Spinner';
import { get } from '../../Utils';
import { api } from '../../../../constants';
import wordify from 'wordify';

function generateUniqueId({ index, type, id }) {
  return `${api}/${index}/${type}/${id}`;
}

function getPre(content) {
  return (<pre dangerouslySetInnerHTML={{ __html: content }}></pre>);
}

function getWords(content) {
  return wordify.list(content).join(', ');
}

class SearchResults extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      content: <div dangerouslySetInnerHTML={{ __html: <Spinner/> }}></div>,
      isOpen: false,
    };
    this.getPagination = this.getPagination.bind(this);
    this.getById = this.getById.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getPagination (from, total, size, setPagination) {
    return (<Pagination from={from} total={total} size={size} setPagination={setPagination} />);
  }

  getById(item) {
    get(generateUniqueId(item))
      .then(data => {
        if (data && data._source && data._source.attachment && data._source.attachment.content) {
          let result = (<div>
            { getPre(data._source.attachment.content) }
            <div><h2>Word list</h2><p>{ getWords(data._source.attachment.content) }</p></div>
          </div>);
          return this.setState({ content: result, });
        }

        throw new Error('Invalid document');
      })
      .catch(error => {
        this.setState({ content: error.message, });
      });
  }

  showModal (item) {
    this.setState({ isOpen: true });
    this.getById(item);
  }

  hideModal () {
    this.setState({ item: null, isOpen: false });
  }

  render() {

    let { results, setPagination, page } = this.props;

    if (!results || !results.hits) {
      return (<div/>);
    }

    if (results.hits.total === 0) {
      return (<section><h2>No results</h2></section>);
    }

    let pagination = this.getPagination(page.from, results.hits.total, page.size, setPagination);

    return (
      <section className="row" id="results">
        {pagination}
        <section>
          {results && results.hits && results.hits.length > 0 && results.hits.hits}
          {results.hits.hits.map(item => <Result
            showModal={this.showModal}
            key={item._id}
            item={item} />) }
        </section>
        {pagination}
        <Preview
          content={this.state.content}
          isOpen={this.state.isOpen}
          hideModal={this.hideModal}
        />
      </section>
    );
  }

};

export default SearchResults;
