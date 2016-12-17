import React from 'react';

const Condition = ({queryParams, onChangeOrdering}) => (
  <div className="condition">
    <div className="row">
      <div className="cell-d-3-4">
        <h3><em>'{queryParams.search}'</em> 맛집 리스트</h3>
      </div>
      <div className="cell-d-1-4">
        <select 
          onBlur={onChangeOrdering}
          onChange={onChangeOrdering}
          value={queryParams.ordering}
        >
          <option value="-review_average">평점순</option>
          <option value="-pk">최근등록순</option>
          <option value="-total_like">좋아요순</option>
          <option value="-review_count">리뷰순</option>
        </select>
        {/*<button type="button">검색 필터</button>*/}
      </div>
    </div>
    <div className="row">
      <ul className="cell-d-1-1">
        <li><a className="active" href="">전체 (1234)</a></li>
        <li><a href="">한식 (23)</a></li>
        <li><a href="">분식 (25)</a></li>
        <li><a href="">양식 (11)</a></li>
        <li><a href="">세계음식 (2)</a></li>
        <li><a href="">뷔페 (4)</a></li>
        <li><a href="">디저트 (15)</a></li>
        <li><a href="">카페 (1)</a></li>
        <li><a href="">술집 (4)</a></li>
        <li><a href="">치킨 (3)</a></li>
      </ul>
    </div>
  </div>
);

export default Condition;