import React, {Component} from 'react';
// import {Link} from 'react-router';
import Slider from 'react-slick';

const DESKTOP_SLIDE_COUNT = 4;
const MOBILE_SLIDE_COUNT = 3;
const MOBILE_SLIDE_BREAKPOINT = 600;

class PhotoCarousel extends Component
{
  // constructor(props){
    // super(props);
    // this.next = this.next.bind(this);
    // this.previous = this.previous.bind(this);
  // }
  next(){
    this.refs.slider.slickNext();
  }
  previous(){
    this.refs.slider.slickPrev();
  }

  fillDefaultSlides(){
    let imageCount = this.props.images ? this.props.images.length : 0;
    let maxCount = MOBILE_SLIDE_BREAKPOINT > window.innerWidth ? MOBILE_SLIDE_COUNT : DESKTOP_SLIDE_COUNT;

    let defaultSlides = [];
    for(let i=0, l=maxCount-imageCount; i < l; i++){
      defaultSlides.push(<div className='default-slide' key={`default_${i}`}>default</div>);
    }
    return defaultSlides;
  }

  render(){
  
    let settings = {
      accessibility: true,
      // adaptiveHeight: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: DESKTOP_SLIDE_COUNT,
      slidesToScroll: 4,
      cssEase: 'ease',
      easing: 'ease-out',
      touchThreshold: 5,
      responsive: [ 
        { 
          breakpoint: MOBILE_SLIDE_BREAKPOINT, 
          settings: 
          { 
            dots: false,
            slidesToShow: MOBILE_SLIDE_COUNT, 
            slidesToScroll: 1,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10
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
                <div key={img.id}><img src={img.img_s} alt={img.alt} /></div>
              )
            }
            {this.fillDefaultSlides()}
            {/*
            <div key="k1"><img src="http://lorempixel.com/400/300/food/1" alt="" /></div>
            <div key="k2"><img src="http://lorempixel.com/400/300/food/2" alt="" /></div>
            <div key="k3"><img src="http://lorempixel.com/400/300/food/3" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/4" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/5" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/6" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/1" alt="" /></div>
            <div><img src="http://lorempixel.com/400/300/food/2" alt="" /></div>
            */}
          </Slider>
          : null
        }
        <button className="slider-btn-prev m-hidden" onClick={() => this.previous()}>Previous</button>
        <button className="slider-btn-next m-hidden" onClick={() => this.next()}>Next</button>
      </article>
    );
  }
}

export default PhotoCarousel;