import React, {Component} from 'react';
import {Link} from 'react-router';
import Rating from './Rating';

class ReviewItem extends Component
{
  render(){
    return (
      <li>
        <section>
          <Rating />
          <h4>리뷰 타이틀</h4>
          <div>
            <button>like 123</button>
            <button>dislike 50</button>
            <button>수정하기</button>
          </div>
          <p>
            육즙 대박 방풍나물 깻잎절임에 와사비 갈치속젓 넣어 싸먹으니 이곳은 천국 양이 적어 그후에 목살 1인분 먹었는데 나쁘지않았지만 삼겹살만큼은 아니었고.. 그래도 맛있 게 잘먹고 왔어여! 육즙 대박 방풍나물 깻잎절임에 와사비 갈치속젓 넣어 싸먹으니 이곳은 천국 양이 적어 그후에 목살 1인분 먹었는데 나쁘지않았지만 삼겹살만큼은 아니 었고.. 그래도 맛있게 잘먹고 왔어여!
          </p>
          <ul>
            <li><img src="http://lorempixel.com/200/150/food/5" alt="" /></li>
            <li><img src="http://lorempixel.com/200/150/food/6" alt="" /></li>
            <li><img src="http://lorempixel.com/200/150/food/7" alt="" /></li>
            <li><img src="http://lorempixel.com/200/150/food/8" alt="" /></li>
            <li><img src="http://lorempixel.com/200/150/food/9" alt="" /></li>
            <li><img src="http://lorempixel.com/200/150/food/10" alt="" /></li>
            <li className="overay"><Link to=""><img src="http://lorempixel.com/200/150/food/1" alt="" /></Link></li>
          </ul>
        </section>
      </li>
    );
  }
}

export default ReviewItem;