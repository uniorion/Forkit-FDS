import { REQUEST_RESTAURANTS, RECEIVE_RESTAURANTS, REQUEST_RESTAURANT, RECEIVE_RESTAURANT } from '../constants/ActionTypes';
import 'whatwg-fetch';

export const requestRestaurants = () => ({
  type: REQUEST_RESTAURANTS,
});

export const receiveRestaurants = (json) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants: json.data.children.map(child => child.data)
});

export const fetchRestaurantsIfNeeded = () => (dispatch) => {
  dispatch(requestRestaurants());
  return fetch('http://mangoplates.com/api/v1/restaurants')
    .then(response => response.json())
    .then(json => dispatch(receiveRestaurants(json)))
    .catch(function(ex){
      console.error(ex);
    });
};

export const requestRestaurant = () => ({
  type: REQUEST_RESTAURANT,
});

export const receiveRestaurant = (json) => ({
  type: RECEIVE_RESTAURANT,
  restaurant: json
});

export const fetchRestaurantIfNeeded = id => (dispatch) => {
  dispatch(requestRestaurant());
  return fetch(`http://mangoplates.com/api/v1/restaurants/${id}`, {
    mode: 'cors'
  })
    .then(response => response.json())
    .then(function(json){
      return json;
    })
    .then(json => dispatch(receiveRestaurant(json)))
    .catch(function(ex){
      console.error(ex);
    });
};