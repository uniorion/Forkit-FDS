import React, {Component} from 'react';
import ReviewItem from './ReviewItem';
// import {Link} from 'react-router';

class ReviewList extends Component
{
  render(){
    const { reviews } = this.props;
    return (
      <article className="review-list">
        <h4>리뷰({reviews.length})</h4>
        {/*<div>전체(33) | 5점(4) | 4점(10) | 3점(5) | 2점(10) | 1점(3)</div>*/}
        <ul>
          {this.props.children}
        </ul>
      </article>
    );
  }
}

export default ReviewList;