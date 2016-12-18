import React, {Component} from 'react';

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
      this.props.onSearch(this.state.searchKeywordValue);
    }
  }

  render() {
    return (<div>
              <input 
                type="text" 
                placeholder="지역, 음식, 또는 음식점 이름"
                value={this.state.searchKeywordValue}
                onKeyPress={this.handleKeyPress.bind(this)}
                onChange={this.handleChange.bind(this)}
              />
            </div>
    );
  }
}

export default SearchBar;

