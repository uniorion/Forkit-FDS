import React, {Component} from 'react';
// import {Link} from 'react-router';
import Rating from './Rating';
import toDateTimeString from '../../util/toDateTimeString';

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
      <li className="review-item row">
        <div className="review-user cell-d-1-12">
          <figure>
            <img src='http://lorempixel.com/50/50/people/1' alt="" />
            <figcaption><span>{review.author}</span></figcaption>
          </figure>
        </div>
        <div className="review-content cell-d-11-12">
          <Rating defaultValue={review.score} readonly={true} /> <time dateTime={review.created_date}>{toDateTimeString(new Date(review.created_date))}</time>
          <div className="review-item-btn-wrap">
            <button className="button "><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {review.like}</button>
            <button className="button "><i className="fa fa-thumbs-o-down" aria-hidden="true"></i> {review.dislike}</button>
            {/*<button>수정하기</button>*/}
          </div>
          <h5>{review.title}</h5>
          <p>
            {review.content}
          </p>
          {/* 모바일/데스크탑 사이즈에 따라 개수 바뀜 */}
          <ul className="review-item-img-list">
            {
              review.images && this.renderImages(review.images)
            }
          </ul>
        </div>
      </li>
    );
  }
}

export default ReviewItem;