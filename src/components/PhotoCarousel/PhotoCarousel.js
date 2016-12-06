import React, {Component} from 'react';
import {Link} from 'react-router';

class PhotoCarousel extends Component
{
  render(){
    return (
      <article>
        <figure>
          <img src="http://lorempixel.com/400/300/food/1" alt="" />
        </figure>
        <figure>
          <img src="http://lorempixel.com/400/300/food/2" alt="" />
        </figure>
        <figure>
          <img src="http://lorempixel.com/400/300/food/3" alt="" />
        </figure>
        <figure>
          <img src="http://lorempixel.com/400/300/food/4" alt="" />
        </figure>
      </article>
    );
  }
}

export default PhotoCarousel;