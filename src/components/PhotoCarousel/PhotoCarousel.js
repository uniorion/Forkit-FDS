import React, {Component} from 'react';
// import {Link} from 'react-router';
import Slider from 'react-slick';

class PhotoCarousel extends Component
{
  constructor(props){
    super(props);
    // this.next = this.next.bind(this);
    // this.previous = this.previous.bind(this);
  }
  next(){
    this.refs.slider.slickNext();
  }
  previous(){
    this.refs.slider.slickPrev();
  }
  render(){
    // return (
    //   <article className="photo-carousel">
    //     <img src="http://lorempixel.com/400/300/food/1" alt="" />
    //     <img src="http://lorempixel.com/400/300/food/2" alt="" />
    //     <img src="http://lorempixel.com/400/300/food/3" alt="" />
    //     <img src="http://lorempixel.com/400/300/food/4" alt="" />
    //   </article>
    // );
    let settings = {
      accessibility: true,
      // adaptiveHeight: true,
      arrows: false,
      dots: true,
      // dotsClass: 'slider-dot',
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: 'ease',
      easing: 'ease-out',
      touchThreshold: 5,
      responsive: [ 
        { 
          breakpoint: 1024, 
          settings: 
          { 
            slidesToShow: 1, 
            slidesToScroll: 1,
            swipe: true,
            swipeToSlide: true
          }
        }
        // ,
        // { breakpoint: 100000, settings: 'unslick' } 
      ]
    };
    return(
      <article className="photo-carousel">
        { this.props.images ?
          <Slider ref="slider" {...settings}>
            {
              this.props.images.map(img => 
                <div key={img.id}><img src={img.img_t} alt={img.alt} /></div>
              )
            }
            {/*
            <div><img src="http://lorempixel.com/400/300/food/1" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/2" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/3" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/4" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/5" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/6" alt="" /></div>
            */}
          </Slider>
          : null
        }
        <button className="slider-btn-prev" onClick={() => this.previous()}>Previous</button>
        <button className="slider-btn-next" onClick={() => this.next()}>Next</button>
      </article>
    );
  }
}

export default PhotoCarousel;