import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as SearchActions from '../actions/search';
import Map from '../components/Map/Map';
import Condition from '../components/Search/Condition';
import RestaurantList from '../components/Search/RestaurantList';
import RestaurantItem from '../components/Search/RestaurantItem';
import Pager from '../components/Pager/Pager';


class Search extends Component
{
  componentDidMount(){
    this.loadRestaurants(this.props.queryParams);
  }
  
  componentWillReceiveProps(nextProps){
    if( JSON.stringify(nextProps.search.queryParams) !== JSON.stringify(this.props.queryParams)){
      this.loadRestaurants(nextProps.search.queryParams);
    }
  }

  loadRestaurants(queryParams){
    this.props.actions.fetchSearchIfNeeded(queryParams);
  }

  handleChangeOrdering(e) {
    this.props.actions.handleOrdering(e.target.value);
  }

  render(){
  
    const search = this.props.search;
    
    return (
      <div>
        {/*<Map 
          items={search.items} // [ {latitude: 37.51., longitude: 127.07 }, ..]
          styleClassName="search-map" // className 명
        />*/}
        <Map 
          items={search.items}
          zoom='14'
          containerClassName="search-map" 
          mapClassName="search-map"
        />
        <div className="container">
          <main className="main grid-wrap">
            <Condition 
              queryParams={search.queryParams}
              onChangeOrdering={this.handleChangeOrdering.bind(this)}
            />
            <RestaurantList>
              {
                search.items.map((restaurant, i) => 
                  <RestaurantItem
                    key={restaurant.id} 
                    idx={i}
                    restaurant={restaurant}
                  >
                  </RestaurantItem>
                )
              }
              <Pager />
            </RestaurantList>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  queryParams: {
    pageSize:   state.search.queryParams.pageSize,
    pageNum:    state.search.queryParams.pageNum,
    search:     state.search.queryParams.search,
    ordering:   state.search.queryParams.ordering,
    filter:     state.search.queryParams.filter,
  },
  search:     state.search,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchSearchIfNeeded: SearchActions.fetchSearchIfNeeded,
    handleOrdering: SearchActions.changeOrdering,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);