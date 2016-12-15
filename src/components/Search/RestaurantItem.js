import React from 'react';

const RestaurantItem = ({restaurant, idx, children}) => (
  <div>
    <div>
      <span>{idx + 1}</span>
      <div><img src="" alt="" /></div>
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
      <div>
        <span>1</span>/<span>10</span>
      </div>
    </div>
    <div>
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
      <di>
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
      </di>
    </div>
  </div>
);

export default RestaurantItem;