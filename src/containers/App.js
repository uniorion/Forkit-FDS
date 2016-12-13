import { Component } from 'react';
// import logo from '../images/logo.svg';
// import './App.css';
// import './App.scss';
// import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Common/Header'; 
import Footer from '../components/Common/Footer'; 

//Container 역할
class App extends Component {

  render() {

    const currentLocation = this.props.location.pathname;
    
    let headerContainer = (<Header />);
    let footerContainer = (<Footer />);

    let headerInvisiblePath = ['/'];
    let footerInvisiblePath = [];

    headerInvisiblePath.forEach(function(el) {
      let urlCheck = new RegExp(el+'$', 'i');
      if ( urlCheck.test(currentLocation) ) {
        headerContainer = null;
      }
    });

    footerInvisiblePath.forEach(function(el) {
      let urlCheck = new RegExp(el+'$', 'i');
      if ( urlCheck.test(currentLocation) ) {
        footerContainer = null;
      }
    });

    return (

      <div>
        {headerContainer}
        {this.props.children}
        {footerContainer}
      </div>
      // <div>
        // {/*<Link to="/">Index</Link>*/}
        // {/*<ul>*/}
        //   {/*<li><Link to="/reviewList">List</Link></li>*/}
        //   {/*<li><Link to={{ pathname: '/list', query: { foo: 'bar' } }}>/list?foo=bar</Link></li>*/}
        //   {/*<li><Link to="/mypage">MyPage</Link></li>*/}
        // {/*</ul>*/}
        // this.props.children
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

// export default App;

// const mapStateToProps = (state) => ({
//     // propname: state.property
//   text: 'abc'
// });

// mapDispatchToProps({
//   //  propname: actionName
//   request: requestRestaurants
// })

export default connect()(App);