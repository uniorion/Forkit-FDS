import React, {Component} from 'react';

class SearchFilter extends Component {
  render () {
    return (
      <div>
        <select>
          <option selected>평점순</option>
          <option>최근등록순</option>
          <option>좋아요순</option>
          <option>리뷰순</option>
        </select>
        <select>
          <option selected>주차 가능</option>
          <option>주차 상관없음</option>
        </select>
        <button type="button">검색 필터</button>
      </div>
    );
  }
};

export default SearchFilter;