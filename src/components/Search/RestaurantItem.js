import React, {Component} from 'react';

class RestaurantItem extends Component {
  render () {
    return (
      <div>
        <article>
          <span>1</span>
          <div><img src="" alt="" /></div>
          <div>
            <button type="button">prev</button>
            <button type="button">next</button>
          </div>
          <div>
            <span>1</span>/<span>10</span>
          </div>
        </article>
        <div>
          <em>새벽집</em>
          <p>테이스티 로드 방영 맛집. 한우 등심, 우삼겹, 돼지 오겹살 등 소고기와 돼지고기를 모두 줄길 수 있는 곳.</p>
          <dl>
            <dt>평점</dt>
            <dd>4.8</dd>
            <dt>리뷰</dt>
            <dd>55</dd>
            <dt>좋아요</dt>
            <dd>234</dd>
          </dl>
          <div>
            <button type="button">좋아요</button>
          </div>
          <di>
            <dt>태그</dt>
            <dd>해장, 접대, 수요미식회, 무한도전맛집, 점심맛집</dd>
            <dt>영업시간</dt>
            <dd>24시간영업, 연중무휴</dd>
            <dt>주소</dt>
            <dd>청담동, 서울시 강남구 청담동 129-10</dd>
            <dt>주차</dt>
            <dd>발렛 가능</dd>
            <dt>연락처</dt>
            <dd>02-555-1234</dd>
          </di>
        </div>
      </div>
    );
  }
}

export default RestaurantItem;