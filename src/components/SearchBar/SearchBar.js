import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchKeywordValue: ''
    };
  }

  componentDidMount(){
    if(this.props.search) {
      this.setState({searchKeywordValue: this.props.search});
    }
  }

  handleChange(e) {
    this.setState({
      searchKeywordValue: e.target.value
    });
  }
   
  handleKeyPress(e) {
    if ( e.charCode === 13 ) {
      this.search();
    }
  }

  handleClick(e) {
    this.search();
  }

  search(){
    const SEARCHPATH = '/search';

    if(SEARCHPATH !== this.props.currentLocation.pathname)
    {
      browserHistory.push(SEARCHPATH);
    }

    this.props.onSearch(this.state.searchKeywordValue);
  }

  render() {
    return (<div className={this.props.className}>
              <input 
                type="search" 
                placeholder="지역, 음식, 또는 음식점 이름"
                value={this.state.searchKeywordValue}
                onKeyPress={this.handleKeyPress.bind(this)}
                onChange={this.handleChange.bind(this)}
              />
              <button onClick={(e) => this.handleClick(e)}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
    );
  }
}

export default SearchBar;

