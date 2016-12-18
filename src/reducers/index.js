import { combineReducers } from 'redux';
import restaurants from './restaurants';
import restaurant from './restaurant';
import search from './search';

const reducers = combineReducers({
  restaurant,
  restaurants, 
  search
});

export default reducers;