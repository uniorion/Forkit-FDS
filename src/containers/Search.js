import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import * as SearchActions from '../actions/search';
import RestaurantList from '../components/Search/RestaurantList';

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
    return (
      <div>
        {/*
        <ul>
          <li><Link to="restaurant/1">1번</Link></li>
          <li><Link to="restaurant/2">2번</Link></li>
          <li><Link to="restaurant/3">3번</Link></li>
        </ul>
        */}
        
        <RestaurantList 
          search={this.props.search}
          onChangeOrdering={this.handleChangeOrdering.bind(this)} 
        />
        
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