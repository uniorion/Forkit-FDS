import React, {Component} from 'react';

class Pager extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li><a href="">6</a></li>
          <li><a href="">7</a></li>
          <li><a href="">8</a></li>
          <li><a href="">9</a></li>
          <li><a href="">10</a></li>
        </ul>
        <div>
          <button type="button">이전페이지</button>
          <button type="button">다음페이지</button>
        </div>
        <div>
          <button type="button">이전 10페이지</button>
          <button type="button">다음 10페이지</button>
        </div>
      </div>
    );
  }
}

export default Pager;