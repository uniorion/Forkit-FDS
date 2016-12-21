import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import {Link} from 'react-router';
import * as SearchActions from '../../actions/search';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/logo.png';

class Header extends Component
{
  handleOnSearch(keyword) {
    this.props.actions.handleSearchChange(keyword);
  }
  
  render(){
    return (
      <header className="header">
        <div className="header-content grid-wrap">
          <div className="row">
            <div className="cell-d-1-4 cell-m-1-6 header-logo-wrap">
              <Link to="/"><img src={logo} alt="포크가 그려진 로고"/><span>Forkit</span></Link>
            </div>
            <SearchBar className="cell-d-1-2 cell-m-4-6 header-search"
              search={this.props.search}
              onSearch={this.handleOnSearch.bind(this)}
            />
            <UserInfo className="cell-d-1-4 cell-m-1-6" />
          </div>
        </div>
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