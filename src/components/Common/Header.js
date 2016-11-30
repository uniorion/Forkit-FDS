import React, {Component} from 'react';
import UserInfo from './UserInfo';
import {Link} from 'react-router';

//인덱스 페이지를 제외한 나머지 페이지의 헤더 컴포넌트
//로고, SearchBar, UserInfo 포함

class Header extends Component
{
  render(){
    return (
      <div>
        <Link to="/">Logo</Link>
        <Link to="mypage">My Page</Link>
      </div>
    );
  }
}

export default Header;