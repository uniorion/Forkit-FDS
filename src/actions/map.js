import { REQUEST_GOOGLE_MAP_API, RECEIVE_GOOGLE_MAP_API } from '../constants/ActionTypes';
import { GOOGLE_MAP_API_KEY } from '../constants/ApiKey';
import 'whatwg-fetch';

export const requestMapList = () => ({
  type: REQUEST_GOOGLE_MAP_API,
});

export const receiveMapList = (text) => ({
  type: RECEIVE_GOOGLE_MAP_API,
  mapApi: text
});

export const fetchGoogleMapApiIfNeeded = () => (dispatch) => {
  dispatch(requestMapList());
  return fetch('https://maps.googleapis.com/maps/api/js?v=3.exp&key=' + GOOGLE_MAP_API_KEY)
    .then(response => response.text())
    .then(text => dispatch(receiveMapList(text)))
    .catch(function(ex){
      console.log(ex);
    });
};