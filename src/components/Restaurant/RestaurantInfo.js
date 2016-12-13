import React from 'react';
import FoodMenu from './FoodMenu';
import Map from '../Map/Map';

const RestaurantInfo = ({ restaurant, children }) => (
  <section className="grid-wrap restaurant">
    {/* 맛집 상세정보 */}
    
    <div className="row">
      <div className="cell-d-2-3 padding10">
        <div className="row">
          <div className="cell-d-1-2">
            <h3>{restaurant.name}</h3>
            <p className="description">{restaurant.description}</p>
            <dl className="score">
              <dt>평점</dt>
              <dd>{restaurant.review_average.toFixed(1)}</dd>
              <dt>리뷰</dt>
              <dd>{restaurant.review_count}</dd>
              <dt>좋아요</dt>
              <dd>{restaurant.total_like}</dd>
            </dl>
          </div>
          <div className="cell-d-1-2">
            <input type="checkbox" id="my_like" checked={restaurant.mylike} /><label htmlFor="my_like">좋아요</label>
            <button>리뷰쓰기</button>
          </div>
        </div>
        <div className="row">
          <div className="cell-d-1-2">
            <dl>
              <dt>태그</dt>
              <dd>{restaurant.tags.map(tag => tag.name).join(', ')}</dd>
              <dt>영업시간</dt>
              <dd>{restaurant.operation_hour}</dd>
              <dt>주소</dt>
              <dd>{restaurant.address}</dd>
              <dt>주차</dt>
              <dd>{restaurant.desc_parking}</dd>
              <dt>연락처</dt>
              <dd>{restaurant.phone}</dd>
            </dl>
          </div>
          <FoodMenu className="cell-d-1-2" menus={restaurant.menus} />
        </div>
      </div>
      <Map className="cell-d-1-3"></Map>
    </div>
    {/* 리뷰목록 */}
    {children}
  </section>
);

// RestaurantInfo.propTypes = {
//   restaurant: PropTypes.shape({
//     name: PropTypes.string,
//     review_average: PropTypes.number.isRequired,
//     review_count: PropTypes.number.isRequired,
//     // review_score: PropTypes.number.isRequired,
//     total_like: PropTypes.number.isRequired,
//     latitude: PropTypes.number.isRequired,
//     longitude: PropTypes.number.isRequired
//   }).isRequired
// };

export default RestaurantInfo;