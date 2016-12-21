import React, { Component } from 'react';
import {Link} from 'react-router';
//우측 상단에 로그인하지 않은 경우 로그인 버튼, 로그인한 경우는 프로필사진과 닉네임을 보여주고 클릭시 마이페이지 이동

class UserInfo extends Component
{
  renderLogin() {
    return <button><span>로그인 </span><i className="fa fa-user-circle-o" aria-hidden="true"></i></button>;
  }

  renderUserInfo() {
    return <Link to="mypage">Kim</Link>;
  }

  render(){
    let authenticate = false;
    
    return (
      <div className={'user-info ' + this.props.className}>
        {
          authenticate ? this.renderUserInfo() : this.renderLogin()
        }
      </div>
    );
  }
}

export default UserInfo;