import React from 'react';
import Map from '../Map/Map';
import LikeButton from './LikeButton';

const RestaurantInfo = ({ restaurant, children }) => (
  <section className="main grid-wrap restaurant">
    {/* 맛집 상세정보 */}
    
    <div className="row">
      <div className="restaurant-info cell-d-2-3 cell-m-1-1">
        <div className="row">
          <div className="cell-d-1-1 cell-m-1-1">
            <h3>{restaurant.name}</h3>
            <p className="description">{restaurant.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="celld-1-2 cell-m-1-1">
            <dl className="restaurant-score">
              <dt>평점</dt>
              <dd>{restaurant.review_average.toFixed(1)}</dd>
              <dt>리뷰</dt>
              <dd>{restaurant.review_count}</dd>
              <dt>좋아요</dt>
              <dd>{restaurant.total_like}</dd>
            </dl>
          </div>
          <div className="restaurant-button-group cell-d-1-2 cell-m-1-1">
            <LikeButton className='button' mylike={false} toggleLike={null} />
            <button className="button"><i className="fa fa-pencil" aria-hidden="true"></i> 리뷰쓰기</button>
          </div>
        </div>
        <div className="row">
          <div className="cell-d-1-1 cell-m-1-1">
            <ul className="restaurant-info-detail">
              <li><i className="fa fa-tags" aria-label="태그"></i> <span>{restaurant.tags.map(tag => tag.name).join(', ')}식당, 베트남, 세계음식식당, 베트남, 세계음식식당, 베트남, 세계음식식당, 베트남, 세계음식</span></li>
              <li><i className="fa fa-clock-o" aria-label="영업시간"></i> <span>{restaurant.operation_hour}</span></li>
              <li><i className="fa fa-map-marker" aria-label="주소"></i> <span>{restaurant.address}</span></li>
              <li><i className="fa fa-car" aria-label="주차"></i> <span>{restaurant.desc_parking}</span></li>
              <li><i className="fa fa-phone" aria-label="연락처"></i> <span>{restaurant.phone}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Map 
       items={[restaurant]}
       zoom='14'
       containerClassName="cell-d-1-3 cell-m-1-1 restaurant-map" 
       mapClassName="cell-d-1-3 cell-m-1-1 restaurant-map"
     />
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