import React, {Component} from 'react';

class Pager extends Component {
  render () {
    return (
      <div className="pager row">
        <div className="cell-d-1-1">
          <ul>
            <li><a href=""><i className="fa fa-chevron-left" aria-label="이전페이지"></i></a></li>
            <li><a href="" className="active">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="">6</a></li>
            <li><a href="">7</a></li>
            <li><a href="">8</a></li>
            <li><a href="">9</a></li>
            <li><a href="">10</a></li>
            <li><a href=""><i className="fa fa-chevron-right" aria-label="다음페이지"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Pager;