import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//미들웨어를 추가하려면 배열에 포함
const middleware = [ thunk ];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

export default store;