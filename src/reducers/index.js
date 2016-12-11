import { combineReducers } from 'redux';
import restaurants from './restaurants';
import restaurant from './restaurant';

const reducers = combineReducers({
  restaurant,
  restaurants
});

export default reducers;