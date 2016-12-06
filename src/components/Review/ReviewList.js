import React, {Component} from 'react';
import ReviewItem from './ReviewItem';
import {Link} from 'react-router';

class ReviewList extends Component
{
  render(){
    return (
      <article>
        <h3>리뷰(33)</h3>
        <div>
          전체(33) | 5점(4) | 4점(10) | 3점(5) | 2점(10) | 1점(3)
        </div>
        <ul>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ul>
      </article>
    );
  }
}

export default ReviewList;