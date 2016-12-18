import React from 'react';

const RestaurantItem = ({restaurant, idx, children}) => (
  <div className="restaurant row">
    <div className="cell-d-1-3">
      {/*<span className="item-num">{idx + 1}</span>*/}
      <div className="photo-carousel">
        <img src={restaurant.images[0].img_s} alt={restaurant.images[0].alt} />
      </div>
       {/*
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
      <div>
        <span>1</span>/<span>10</span>
      </div>
      */}
    </div>
    <div className="cell-d-1-3">
      <em>{restaurant.name}</em>
      <p>{restaurant.description}</p>
      <ul>
        <li>
          <p>평점</p>
          <em>{   restaurant.review_average.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_average).toFixed(1) 
                : restaurant.review_average}</em>
        </li>
        <li>
          <p>리뷰</p>
          <em>{   restaurant.review_count.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.review_count).toFixed(1) 
                : restaurant.review_count}</em>
        </li>
        <li>
          <p>좋아요</p>
          <em>{   restaurant.total_like.toString().indexOf('.') > -1 
                ? parseFloat(restaurant.total_like).toFixed(1) 
                : restaurant.total_like}</em>
        </li>
      </ul>
      <div>
        <button className={true ? 'active' : '' } type="button"><i></i>좋아요</button>
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