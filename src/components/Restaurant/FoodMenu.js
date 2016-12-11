import React, {Component} from 'react';
import locale from '../../util/localeKR';

class FoodMenu extends Component
{
  render(){
    const { menus } = this.props;
    return (
      <section className={this.props.className + ' food-menu'}>
        <h3>대표메뉴</h3>
        <ul>
          {
            menus &&
            menus.map(menu =>
              <li key={menu.id}>
                <figure>
                  <img src={menu.img} alt={menu.description} />
                  <figcaption>
                    <strong>{menu.name}</strong>
                    <em>{locale.numberFormat(menu.price)}원</em>
                  </figcaption>
                </figure>
              </li>
            )
          }
          {/*
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
          */}
        </ul>
      </section>
    );
  }
}

export default FoodMenu;