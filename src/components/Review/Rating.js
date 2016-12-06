import React, {Component} from 'react';

class Rating extends Component
{
  render(){
    return (
      <div>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <input type="hidden" />
      </div>
    );
  }
}

export default Rating;