import React, {Component} from 'react';
// import {Link} from 'react-router';
import Rating from './Rating';

class ReviewItem extends Component
{
  renderImages(images){
    let imageList = [];
    const desktopMax = 2;
    const max = desktopMax;
    const length = images.length >= max ? max : images.length; 
    for(let i = 0; i < length; i++){
      let image = images[i];
      imageList.push(<li className={length-1 === i ? 'overlay' : null } key={image.id}><img src={image.img_t} alt="" /></li>);
    }
    return imageList;
  }

  render(){
    const { review } = this.props;
    // let imgCount = 0; 작업중
    return (
      <li>
        {/*<img src='http://lorempixel.com/100/100/people/1' alt="" /> <span>{review.author}</span>*/}
        <Rating />
        <div>
          <button>like {review.like}</button>
          <button>dislike {review.dislike}</button>
          <button>수정하기</button>
        </div>
        <h4>{review.title}</h4>
        <p>
          {review.content}
        </p>
        {/* 모바일/데스크탑 사이즈에 따라 개수 바뀜 */}
        <ul className="review-item-img-list">
          {
            review.images && this.renderImages(review.images)
          }
          
        </ul>
      </li>
    );
  }
}

export default ReviewItem;