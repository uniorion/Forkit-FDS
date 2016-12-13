import React from 'react';
import FoodMenu from './FoodMenu';
import ReviewList from '../Review/ReviewList';
import Map from '../Map/Map';
// import {Link} from 'react-router';

const RestaurantInfo = ({ restaurant }) => (
  <section className="grid-wrap">
    {/* 맛집 상세정보 */}
    <div className="row">
      <div className="cell-d-5-12">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <dl>
          <dt>평점</dt>
          <dd>{restaurant.review_average}</dd>
          <dt>리뷰</dt>
          <dd>{restaurant.review_count}</dd>
          <dt>좋아요</dt>
          <dd>{restaurant.total_like}</dd>
        </dl>
    
        <div>
          <input type="checkbox" id="my_like" checked={restaurant.mylike} /><label htmlFor="my_like">좋아요</label>
          <button>리뷰쓰기</button>
        </div>
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
      <FoodMenu className="cell-d-3-12" menus={restaurant.menus} />
      <Map className="cell-d-4-12"></Map>
    </div>
    {/* 리뷰목록 */}
    {restaurant.reviews && 
    <ReviewList reviews={restaurant.reviews} />
    }
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