import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as SearchActions from '../actions/search';
import RestaurantList from '../components/Search/RestaurantList';

class Search extends Component
{
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  componentDidMount(){
    this.loadRestaurant();
  }
  
  componentWillReceiveProps(nextProps){
  }

  loadRestaurant(){
    const { actions } = this.props;
    actions.fetchSearchIfNeeded();
  }

  render(){
    return (
      <div>
        <h1>totalCount : {this.props.totalCount}</h1>
        <ul>
          <li><Link to="restaurant/1">1번</Link></li>
          <li><Link to="restaurant/2">2번</Link></li>
          <li><Link to="restaurant/3">3번</Link></li>
        </ul>
        
        <RestaurantList restaurant={this.props.restaurant} />
        
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.search.isFetching,
    totalCount: state.search.totalCount,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchSearchIfNeeded: SearchActions.fetchSearchIfNeeded
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);