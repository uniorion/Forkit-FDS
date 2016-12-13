import React from 'react';
import ReactDOM from 'react-dom';
import { App, IndexPage, Search, Restaurant, MyPage, PageNotFound } from './containers/index';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import configureStore from './store/configureStore';
import store from './store';
import { Provider } from 'react-redux';

// const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="search" component={Search} />
        <Route path="restaurant/:id" component={Restaurant} />
        <Route path="mypage" component={MyPage} />
        <Route path='*' status={404} component={PageNotFound} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
