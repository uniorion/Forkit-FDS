import React, { Component } from 'react';

class PhotoViewer extends Component
{
  render(){
    return (
      <article>
        <h3>사진 목록</h3>
        {/*모바일/데스크탑에 따라 개수가 바뀜, 방향키 이동 가능, 한장 좌우 넘기기, 플러그인 찾아보기*/}
        {/*하단 이미지 목록은 스크롤 넣어서 슬라이드로 처리, 방향키 및 선택된 이미지에 맞춰서 이동시켜야 함.*/}
        <ul>
          <li><button><img src="http://lorempixel.com/120/90/food/1" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/2" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/3" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/4" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/5" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/6" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/7" alt="" /></button></li>
          <li><button><img src="http://lorempixel.com/120/90/food/8" alt="" /></button></li>
        </ul>
        <div>
          <button>Left</button>
          <img src="http://lorempixel.com/120/90/food/5" alt="" />
          <button>Right</button>
        </div>
        <button>Close</button>
      </article>
    );
  }
}