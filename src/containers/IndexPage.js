import React, { Component } from 'react';
import {Link, Router, hashHistory} from 'react-router';

//대문페이지
//SearchBar, 로고, UserInfo, 배경이미지로, Footer 구성

class IndexPage extends Component {
  render(){
    return (
      <div>
        <Link to="mypage">My Page</Link>
        <h2>Index Search</h2>
        <button onClick={this._searchRestaurants.bind(this)}>Search</button>
      </div>
    );
  }

  _searchRestaurants(){
    hashHistory.push('/search');
  }
}

export default IndexPage;