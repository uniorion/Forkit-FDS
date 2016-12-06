import React, { Component } from 'react';
import logo from '../images/logo.svg';
// import './App.css';
// import './App.scss';
import { Link } from 'react-router';

//Container 역할
class App extends Component {
  render() {
    return (
      // <div>
        // {/*<Link to="/">Index</Link>*/}
        // {/*<ul>*/}
        //   {/*<li><Link to="/reviewList">List</Link></li>*/}
        //   {/*<li><Link to={{ pathname: '/list', query: { foo: 'bar' } }}>/list?foo=bar</Link></li>*/}
        //   {/*<li><Link to="/mypage">MyPage</Link></li>*/}
        // {/*</ul>*/}
        this.props.children
      // </div>

      
      // <div className="App App-sass">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      
    );
  }
}

export default App;
