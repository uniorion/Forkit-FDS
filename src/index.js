import React from 'react';
import ReactDOM from 'react-dom';
import { App, IndexPage, Search, Restaurant, MyPage, PageNotFound } from './containers/index';
// import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';

if (process.env.NODE_ENV === 'development')
{
  var Perf = require('react-addons-perf');
  window.Perf = Perf;
}

ReactDOM.render(
  <Router history={browserHistory}> 
    <Route path="/" component= {App}>
      <IndexRoute component={IndexPage} />
      <Route path="search" component={Search} />
      <Route path="restaurant/:id" component={Restaurant} />
      <Route path="mypage" component={MyPage} />
      <Route path='*' status={404} component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
