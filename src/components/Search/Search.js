import React, {Component} from 'react';
import SearchFilter from './SearchFilter';
import SearchTagList from './SearchTagList';

class Search extends Component {
  render () {
    return (
      <div>
        <div>
          <p><em>'소고기'</em>맛집 리스트</p>
          <SearchFilter />
        </div>
        <div>
          <SearchTagList />
        </div>
      </div>
    );
  }
}

export default Search;