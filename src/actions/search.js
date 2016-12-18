import { REQUEST_RESTAURANT_LIST, RECEIVE_RESTAURANT_LIST, CHANGE_ORDERING, SEARCH_INPUT_CHANGE } from '../constants/ActionTypes';
import 'whatwg-fetch';

export const requestRestaurantList = () => ({
  type: REQUEST_RESTAURANT_LIST,
});

export const receiveRestaurantList = (json) => ({
  type: RECEIVE_RESTAURANT_LIST,
  totalCount: json.count,
  nextUrl: json.next,
  prevUrl: json.previous,  
  results: json.results
});

export const fetchSearchIfNeeded = (params) => (dispatch, getState) => {
  dispatch(requestRestaurantList());
  console.log('params >>>>>> ' + objectToQueryString(params));
  return fetch('http://mangoplates.com/api/v1/restaurants' + objectToQueryString(params))
    .then(response => response.json())
    .then(json => dispatch(receiveRestaurantList(json)))
    .catch(function(ex){
      console.log(ex);
    });
};

export const changeOrdering = (val) => {
  return {
    type: CHANGE_ORDERING,
    ordering: val
  };
};

export const seachInputChange = (val) => ({
  type: SEARCH_INPUT_CHANGE,
  search: val
});


function objectToQueryString(obj) {
  return Object.keys(obj)
    .filter(key => obj[key] !== '' && obj[key] !== null)
    .map((key, index) => {
      var startWith = index === 0 ? '?' : '&';
      return startWith + key + '=' + obj[key];
    }).join('');
}