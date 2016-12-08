import { REQUEST_RESTAURANTS, RECEIVE_RESTAURANTS } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: []
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_RESTAURANTS:
    return {
      ...state,
      isFetching: true
    };
  
  case RECEIVE_RESTAURANTS:
    return {
      ...state,
      isFetching: false,
      items: action.restaurants
    };

  default:
    return state;
  }
};

export default restaurants;