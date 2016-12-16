import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import UserInfo from './UserInfo';
import {Link} from 'react-router';

import * as SearchActions from '../../actions/search';
import SearchBar from '../SearchBar/SearchBar';

class Header extends Component
{
  handleOnSearch(keyword) {
    this.props.actions.handleSearchChange(keyword);
  }
  
  render(){
    return (
      <header>
        <Link to="/">Logo</Link>
        <SearchBar 
          search={this.props.search}
          onSearch={this.handleOnSearch.bind(this)}
        />
        <Link to="mypage">My Page</Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search.queryParams.search
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    handleSearchChange: SearchActions.seachInputChange
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);