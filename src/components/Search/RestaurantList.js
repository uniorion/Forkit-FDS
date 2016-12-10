import React, {Component} from 'react';

import Map from '../Map/Map';
import Search from './Search';
import RestaurantItem from './RestaurantItem';
import Pager from '../Pager/Pager';

class RestaurantList extends Component {
  render () {
    return (
      <main>
        <Map />
        <Search />
        <RestaurantItem />
        <Pager />
      </main>
    );
  }
}

export default RestaurantList;