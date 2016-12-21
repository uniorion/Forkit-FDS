import React, {Component} from 'react';
import logo from '../../images/logo.png';

class Footer extends Component 
{
  render () {
    return (
      <footer className="footer">
        <div className="footer-content grid-wrap">
        <div className=" m-hidden">
          <div className="row grid-center">
            <div className="cell-d-1-2">
              <p className="">&copy; 2016 <span>Forkit</span></p>
              <ul>
                <li><a href="">ForkIt 소개</a></li>
                <li><a href="">이용약관</a></li>
                <li><a href="">개인정보취급방침</a></li>
                <li><a href="">문의하기</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-hidden">
            <div className="row grid-center">
              <div className="cell-m-1-1">
                <p className="">&copy; 2016 <span>Forkit</span></p>
              </div>
              <div className="cell-m-1-1">
                <ul>
                  <li><a href="">ForkIt 소개</a></li>
                  <li><a href="">이용약관</a></li>
                  <li><a href="">개인정보취급방침</a></li>
                  <li><a href="">문의하기</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;