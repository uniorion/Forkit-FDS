import React, {Component} from 'react';

class SearchFilter extends Component {
  render () {
    return (
      <div>
        <select 
          onBlur={this.props.onChangeOrdering}
          onChange={this.props.onChangeOrdering}
          value={this.props.queryParams.ordering}
        >
          <option value="-review_average" selected>평점순</option>
          <option value="-pk">최근등록순</option>
          <option value="-total_like">좋아요순</option>
          <option value="-review_count">리뷰순</option>
        </select>
        <button type="button">검색 필터</button>
      </div>
    );
  }
};

export default SearchFilter;