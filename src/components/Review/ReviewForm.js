import React, {Component} from 'react-router';
import Rating from './Rating';

class ReviewForm extends Component
{
  render(){
    return (
      <section>
        <div>
          <img src="http://lorempixel.com/100/100/people/1" alt="" /> <span>NickName</span>
        </div>
        <form action="">
          <Rating />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="file" multiple accept="image/*" />
          <button>취소</button>
          <button>저장</button>
        </form>
      </section>
    );
  }
}

export default ReviewForm;