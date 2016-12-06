import React, {Component} from 'react';
import Header from '../components/Common/Header';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';

//Header, 지도, 페이징 컴포넌트와 검색/정렬 필터, 목록으로 구성됨

class Restaurant extends Component
{
  render(){
    return (
      <div>
        <Header/>
        <main>
          <h2>Restaurant Detail {this.props.params.id}</h2>
          <PhotoCarousel />
          <RestaurantInfo />
          
        </main>
      </div>
    );
  }
}

export default Restaurant;