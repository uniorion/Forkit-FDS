import React, {Component, PropTypes} from 'react';

class Rating extends Component
{
  constructor(props){
    super(props);
    this.state = {
      rating: props.defaultValue
    };
  }

  render(){
    const stars = [];
    for(let i=1; i <= this.props.max; i++)
    { 
      stars.push(
        <span
          key={i}
          className={ i <= this.state.rating ? 'rating-on' : null}
        >&#9734;</span>
      );
    }

    return (
      <div className={'rating ' + this.props.className}>
        {stars}
        <input type="hidden" />
      </div>
    );
  }
}

Rating.propTypes = {
  defaultValue: PropTypes.number,
  readonly: PropTypes.bool,
  max: PropTypes.number
};

Rating.defaultProps = {
  defaultValue: 0,
  max: 5
};

export default Rating;