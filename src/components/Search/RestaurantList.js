import React, {Component} from 'react';

import Map from '../Map/Map';
import Condition from './Condition';
import RestaurantItem from './RestaurantItem';
// import Pager from '../Pager/Pager';

class RestaurantList extends Component {

  render () {

    const search = this.props.search;
    
    const listRestaurants = (items) => {
      return items.map((restaurant, i) => {
        return (<RestaurantItem
                  key={restaurant.id} 
                  idx={i}
                  restaurant={restaurant}
                />);
      });
    };

    return (
      <main>
        <Map />
        <Condition 
          queryParams={search.queryParams}
          onChangeOrdering={this.props.onChangeOrdering}
        />
        {listRestaurants(search.items)}
        {/*
        <Pager />
        */}
      </main>
    );
  }
}

export default RestaurantList;