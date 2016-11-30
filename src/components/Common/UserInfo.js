import React, { Component } from 'react';
//우측 상단에 로그인하지 않은 경우 로그인 버튼, 로그인한 경우는 프로필사진과 닉네임을 보여주고 클릭시 마이페이지 이동

class UserInfo extends Component
{
  render(){
    return (
      <Link to="mypage">My Page</Link>
    );
  }
}

export default UserInfo;