import { REQUEST_RESTAURANT_LIST, RECEIVE_RESTAURANT_LIST } from '../constants/ActionTypes';
import 'whatwg-fetch';

export const requestRestaurantList = () => ({
  type: REQUEST_RESTAURANT_LIST,
});

export const receiveRestaurantList = (json) => ({
  type: RECEIVE_RESTAURANT_LIST,
  totalCount: json.count,
  results:    json.results
  // restaurants: json.results.children.map(child => child.data)
});

export const fetchSearchIfNeeded = () => (dispatch) => {
  dispatch(requestRestaurantList());
  return fetch('http://mangoplates.com/api/v1/restaurants')
    .then(response => response.json())
    .then(json => dispatch(receiveRestaurantList(json)))
    .catch(function(ex){
      console.log(ex);
    });
};