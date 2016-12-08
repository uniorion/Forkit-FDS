import React, {Component} from 'react';
import FoodMenu from './FoodMenu';
import ReviewList from '../Review/ReviewList';
import Map from '../Map/Map';
// import {Link} from 'react-router';

class RestaurantInfo extends Component
{
  render(){
    return (
      <section className="grid-wrap">
        {/* 맛집 상세정보 */}
        <div className="row">
          <div className="cell-d-5-12">
            <h3>새벽집</h3>
            <p>텍스트 맛집 설명영역</p>
            <dl>
              <dt>평점</dt>
              <dd>4.8</dd>
              <dt>리뷰</dt>
              <dd>55</dd>
              <dt>좋아요</dt>
              <dd>234</dd>
            </dl>
        
            <div>
              <input type="checkbox" id="my_like" /><label htmlFor="my_like">좋아요</label>
              <button>리뷰쓰기</button>
            </div>
            <dl>
              <dt>태그</dt>
              <dd>피자, 파스타, 햄버거</dd>
              <dt>영업시간</dt>
              <dd>24시간영업, 연중무휴</dd>
              <dt>주소</dt>
              <dd>서울시 강남구 청담동 129-10</dd>
              <dt>주차</dt>
              <dd>발렛 가능</dd>
              <dt>연락처</dt>
              <dd>02-543-2121</dd>
            </dl>
          </div>
          <section className="cell-d-3-12">
            <h3>대표메뉴</h3>
            <ul>
              <li>
                <figure>
                  <img src="http://lorempixel.com/100/75/food/1" alt="" />
                  <figcaption>
                    <strong>메뉴명</strong>
                    <em>10,000원</em>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="http://lorempixel.com/100/75/food/2" alt="" />
                  <figcaption>
                    <strong>메뉴명</strong>
                    <em>10,000원</em>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="http://lorempixel.com/100/75/food/3" alt="" />
                  <figcaption>
                    <strong>메뉴명</strong>
                    <em>10,000원</em>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </section>
          <Map className="cell-d-4-12"></Map>
        </div>
        {/* 리뷰목록 */}
        <ReviewList />
      </section>
    );
  }
}

export default RestaurantInfo;