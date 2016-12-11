import { REQUEST_RESTAURANT, RECEIVE_RESTAURANT } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  info: {}
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_RESTAURANT:
    return {
      ...state,
      isFetching: true
    };
  
  case RECEIVE_RESTAURANT:
    return {
      ...state,
      isFetching: false,
      info: action.restaurant
    };

  default:
    return state;
  }
};

export default restaurant;