import React, {Component} from 'react';

class FoodMenu extends Component
{
  render(){
    return (
      <section>
        <h3>대표메뉴</h3>
        <ul>
          <li>
            <figure>
              <img src="http://lorempixel.com/100/75/food/1" alt="" />
              <figcaption>
                <strong>메뉴명</strong>
                <em>10,000원</em>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="http://lorempixel.com/100/75/food/2" alt="" />
              <figcaption>
                <strong>메뉴명</strong>
                <em>10,000원</em>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="http://lorempixel.com/100/75/food/3" alt="" />
              <figcaption>
                <strong>메뉴명</strong>
                <em>10,000원</em>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    );
  }
}

export default FoodMenu;