import { REQUEST_RESTAURANTS, RECEIVE_RESTAURANTS } from '../constants/ActionTypes'

export const requestRestaurants = () => ({
  type: REQUEST_RESTAURANTS
});

export const receiveRestaurants = (json) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants: json.data.children.map(child => child.data)
});