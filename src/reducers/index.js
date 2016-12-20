import { combineReducers } from 'redux';
import restaurants from './restaurants';
import restaurant from './restaurant';
import search from './search';
import googleMap from './map';

const reducers = combineReducers({
  restaurant,
  restaurants, 
  search,
  googleMap
});

export default reducers;