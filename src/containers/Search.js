import React, { Component, PropTypes } from 'react';
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
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  componentDidMount(){
    this.loadRestaurants();
  }
  
  componentWillReceiveProps(nextProps){
    if( JSON.stringify(nextProps.search.queryParams) !== JSON.stringify(this.props.queryParams)){
      this.loadRestaurants();
    }
  }

  loadRestaurants(){
    const { actions } = this.props;
    actions.fetchSearchIfNeeded(this.props.queryParams);
  }

  handleChangeOrdering(e) {
    const { actions } = this.props;
    actions.handleOrdering(e.target.value);
  }

  render(){
  
    const search = this.props.search;
    
    return (
      <div>
        <Map />
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  queryParams: {
    pageSize:   state.search.queryParams.pageSize,
    pageNum:    state.search.queryParams.pageNum,
    keyword:    state.search.queryParams.keyword,
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