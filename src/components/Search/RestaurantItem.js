import React from 'react';

const RestaurantItem = ({restaurant, idx, children}) => (
  <div className="restaurant row">
    <div className="cell-d-1-3">
      <span>{idx + 1}</span>
      <div>
        <img src={restaurant.images[0].img_s} alt={restaurant.images[0].alt} />
      </div>
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
      <div>
        <span>1</span>/<span>10</span>
      </div>
    </div>
    <div className="cell-d-1-3">
      <em>{restaurant.name}</em>
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
        <button type="button">좋아요</button>
      </div>
    </div>
    <div className="cell-d-1-3">
      <dl>
        <dt>태그</dt>
        <dd>
            {restaurant.tags.map(tag =>
              <span key={tag.id}>{tag.name}</span>
            )}
        </dd>
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
  </div>
);

export default RestaurantItem;