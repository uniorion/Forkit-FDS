import React, {Component} from 'react';

class LikeButton extends Component {

  render() {
    //스페이스바 눌렀을때 체크되도록
    // <input type="checkbox" id={this.props.id} checked={this.props.like} /><label htmlFor={this.props.id}>좋아요</label>
    return (
      <button className={this.props.className} aria-checked={this.props.restaurant.mylike} onClick={() => this.props.toggleLike(this.props.restaurant.id)} onKeyUp={(e) => console.log(e.keyCode)} type="button" role="checkbox">좋아요</button>
    );
  }
}

export default LikeButton;